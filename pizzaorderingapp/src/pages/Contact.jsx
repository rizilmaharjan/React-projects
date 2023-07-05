import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export const Contact = () => {
  const name = useRef();
  const email = useRef();
  const subject = useRef();
  const message = useRef();

  const handleForm = (e) => {
    e.preventDefault();
    if(name.current.value === "" || email.current.value === "" || subject.current.value === "" || message.current.value === "") return toast.error("You cannot leave the field empty") 
    toast.success("Form Submitted Successfully")
    name.current.value = ""
    email.current.value = ""
    subject.current.value = ""
    message.current.value = ""
    
  };
  return (
    <>
      <ToastContainer
     position="top-right"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="light"
      />
      <div className="my-10 w-fit mx-auto">
        <h1 className="text-4xl font-bold">Contact Us</h1>

        <form className="pt-10" onSubmit={handleForm}>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              ref={name}
              className="border py-2 px-3 outline-none focus:border-blue-300"
              type="text"
              placeholder="Name"
            />
            <input
              ref={email}
              className="border py-2 px-3 outline-none focus:border-blue-300"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col gap-6 py-6">
            <input
              ref={subject}
              className="border py-2 px-3 outline-none focus:border-blue-300"
              type="text"
              placeholder="Subject"
            />
            <textarea
              ref={message}
              className="border py-2 px-3 outline-none focus:border-blue-300"
              rows={6}
              type="text"
              placeholder="Message"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 w-40 py-2 text-lg font-semibold text-white"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};
