import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import useFetchFromAPI from "../utils/fetchFromApi";
const SearchFeed = () => {
  const [video, setVideos] = useState([]);

  const { searchTerm } = useParams();
  const {
    data: searchVideo,
    isError,
    isLoading,
  } = useFetchFromAPI(`search?part=snippet&q=${searchTerm}`);

  useEffect(() => {
    if (!isError && !isLoading) setVideos(searchVideo?.items);
  }, [searchVideo]);

  if (isError) {
    return <span>Error...</span>;
  }
  if (isLoading) {
    return <span>Loading...</span>;
  }

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
          Search Results for: <span className="text-red-600">{searchTerm}</span>{" "}
          videos
        </Typography>

        <Videos videos={video} />
      </Box>
    </>
  );
};

export default SearchFeed;
