import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromApi";
const SearchFeed = () => {
  const [video, setVideos] = useState([]);
  const { searchTerm} = useParams()
  console.log("🚀 ~ file: SearchFeed.jsx:9 ~ SearchFeed ~ searchTerm:", searchTerm)
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <>
      <Box
        p={2}
        sx={{
          overFlowY: "auto",
          height: "90vh",
          flex: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={"bold"}
          mb={2}
          sx={{
            color: "white",
          }}
        >
          Search Results for: <span className="text-red-600">{searchTerm}</span> videos
        </Typography>

        <Videos videos={video} />
      </Box>
    </>
  );
};

export default SearchFeed;
