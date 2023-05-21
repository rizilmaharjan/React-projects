import { FormControl } from "@chakra-ui/form-control";
import { ArrowBackIcon } from "@chakra-ui/icons";
import ReactHtmlParser from "react-html-parser";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { BsFillMicFill, BsFillMicMuteFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";

// import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import { IconButton, Spinner, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../animations/typing.json";
import { getSender, getSenderFull } from "../config/ChatLogics";
import ScrollableChat from "./ScrollableChat";
import ProfileModal from "./miscellaneous/ProfileModal";
import "./styles.css";

import io from "socket.io-client";
import { ChatState } from "../Context/ChatProvider";
import UpdateGroupChatModal from "./miscellaneous/UpdateGroupChatModal";
import { BaseAxios } from "../http/baseAxios";

const ENDPOINT = "http://localhost:4000";
var socket, selectedChatCompare;

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [socketConnected, setSocketConnected] = useState(false);
  const [typing, setTyping] = useState(false);
  const [istyping, setIsTyping] = useState(false);
  const toast = useToast();
  const [speech, setSpeech] = useState(false);

  const startListening = () =>{
    SpeechRecognition.startListening({ continuous: true, language: 'en-US' });
    setSpeech(!speech);
  

  } 
  const stopListening = ()=>{
    SpeechRecognition.stopListening();
    setSpeech(!speech);
  }

    const { transcript, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }


  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { selectedChat, setSelectedChat, user, notification, setNotification } =
    ChatState();

  const fetchMessages = async () => {
    if (!selectedChat) return;

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      setLoading(true);

      const { data } = await BaseAxios.get(
        `/api/message/${selectedChat._id}`,
        config
      );
      setMessages(data);
      setLoading(false);

      socket.emit("join chat", selectedChat._id);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Messages",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  const sendMessage = async (event) => {
    if (newMessage) {
      socket.emit("stop typing", selectedChat._id);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        };
        setNewMessage("");
        const plainTextContent = editorRef.current.getContent();
        const { data } = await BaseAxios.post(
          "/api/message",
          {
            content: plainTextContent,
            chatId: selectedChat,
          },
          config
        );

        socket.emit("new message", data);
        setMessages([...messages, data]);
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: "Failed to send the Message",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
    }
  };

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user);
    socket.on("connected", () => setSocketConnected(true));
    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));
  }, []);

  useEffect(() => {
    fetchMessages();

    selectedChatCompare = selectedChat;
  }, [selectedChat]);

  useEffect(() => {
    socket.on("message recieved", (newMessageRecieved) => {
      if (
        !selectedChatCompare ||
        selectedChatCompare._id !== newMessageRecieved.chat._id
      ) {
        if (!notification.includes(newMessageRecieved)) {
          setNotification([newMessageRecieved, ...notification]);
          setFetchAgain(!fetchAgain);
        }
      } else {
        setMessages([...messages, newMessageRecieved]);
      }
    });
  });

  
  return (
    <>
      {selectedChat ? (
        <>
          <Text
            fontSize={{ base: "28px", md: "30px" }}
            pb={3}
            px={2}
            w="100%"
            fontFamily="Work sans"
            display="flex"
            justifyContent={{ base: "space-between" }}
            alignItems="center"
          >
            <IconButton
              display={{ base: "flex", md: "none" }}
              icon={<ArrowBackIcon />}
              onClick={() => setSelectedChat("")}
            />
            {messages &&
              (!selectedChat.isGroupChat ? (
                <>
                  {getSender(user, selectedChat.users)}
                  <ProfileModal
                    user={getSenderFull(user, selectedChat.users)}
                  />
                </>
              ) : (
                <>
                  {selectedChat.chatName.toUpperCase()}
                  <UpdateGroupChatModal
                    fetchMessages={fetchMessages}
                    fetchAgain={fetchAgain}
                    setFetchAgain={setFetchAgain}
                  />
                </>
              ))}
          </Text>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            p={3}
            bg="#E8E8E8"
            w="100%"
            h="100%"
            borderRadius="lg"
            overflowY="hidden"
          >
            {loading ? (
              <Spinner
                size="xl"
                w={20}
                h={20}
                alignSelf="center"
                margin="auto"
              />
            ) : (
              <div className="messages">
                <ScrollableChat
                  messages={messages.map((message) => ({
                    ...message,
                    content: ReactHtmlParser(message.content),
                  }))}
                />
              </div>
            )}

            <FormControl
              onKeyDown={sendMessage}
              id="first-name"
              isRequired
              mt={3}
            >
              {istyping ? (
                <div>
                  <Lottie
                    options={defaultOptions}
                    // height={50}
                    width={70}
                    style={{ marginBottom: 15, marginLeft: 0 }}
                  />
                </div>
              ) : (
                <></>
              )}
              
              <div style={{ height: "200px", width:"100%", marginBottom: "-6.8rem", position:"relative" }}>
                <div className="z-10 top-3 absolute flex right-6">
                <BsFillMicFill className="mx-2 text-2xl cursor-pointer" onClick={startListening}/>
              <BsFillMicMuteFill className="mx-2 text-2xl cursor-pointer" onClick={stopListening} />
              <GrPowerReset className="mx-2 text-2xl cursor-pointer" onClick={resetTranscript} />
                </div>
             

                <Editor
                
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  onEditorChange={setNewMessage}
                  value={ speech ? transcript  : newMessage}
                  init={{
                    statusbar: "false",
                    height: 145,
                    menubar: false,
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code help wordcount",
                      "lists",
                    ],
                    toolbar:
                      "undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent",
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.shiftKey) {
                      const selection = editorRef.current.selection;
                      const container = selection.getNode();
                      if (container && container.nodeName === "LI") {
                        e.preventDefault();
                        const parentList = container.parentNode;
                        const listItemIndex = Array.from(
                          parentList.children
                        ).indexOf(container);
                        const newListItem = document.createElement("li");
                        newListItem.innerHTML = "<br>";
                        parentList.insertBefore(
                          newListItem,
                          parentList.children[listItemIndex + 1]
                        );
                        editorRef.current.selection.setCursorLocation(
                          newListItem,
                          0
                        );
                      }
                    } else if (e.key === "Enter") {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                />
              </div>
            </FormControl>
          </Box>
        </>
      ) : (
        // to get socket.io on same page
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          h="100%"
        >
          <Text
            fontSize="3xl"
            color={"gray.400"}
            fontWeight={"bold"}
            pb={3}
            fontFamily="Work sans"
          >
            Click on a user to start chatting
          </Text>
        </Box>
      )}
    </>
  );
};

export default SingleChat;
