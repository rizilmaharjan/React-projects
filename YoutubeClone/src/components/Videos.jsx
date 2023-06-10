import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos }) => {
  console.log("🚀 ~ file: Videos.jsx:6 ~ Videos ~ videos:", videos);
  return (
    <>
      <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item, idx) => (
          <Box key={idx}>
            {/* <p className="text-white">{item.id.videoId}</p> */}
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default Videos;
