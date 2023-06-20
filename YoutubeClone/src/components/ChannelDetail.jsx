import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import useFetchFromAPI from "../utils/fetchFromApi";
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  const { data: channelData } = useFetchFromAPI(
    `channels?part=snippet&id=${id}`
  );
  const { data: videosData } = useFetchFromAPI(
    `search?channelId=${id}&part=snippet%2Cid&order=date`
  );

  useEffect(() => {
    if (channelData) {
      setChannelDetail(channelData?.items[0]);
    }

    if (videosData) {
      setVideos(videosData?.items);
    }
  }, [channelData, videosData]);

  return (
    <>
      <Box minHeight="95vh">
        <Box>
          <div
            style={{
              background:
                "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
              zIndex: 10,
              height: "300px",
            }}
          />
          <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
        </Box>
        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: "100px" } }} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </>
  );
};

export default ChannelDetail;
