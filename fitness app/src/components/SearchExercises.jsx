import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import { fetchData, exerciseOptions } from "../utils/fetchData";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const SearchedExercises = exercisesData.filter((item) => {
        return (
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
        );
      });
      setSearch("");
      setExercises(SearchedExercises);
    }
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  return (
    <>
      <Stack alignItems="center" mt="37px" justifyContent="center" p="200px">
        <Typography
          fontWeight={700}
          sx={{
            fontSize: { lg: "44px", xs: "30px" },
          }}
          mb="50px"
          textAlign="center"
        >
          Awesome Exercises You <br />
          Should Know
        </Typography>

        <Box position="relative" mb="72px">
          <TextField
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: { lg: "800px", xs: "350px" },
              backgroundColor: "#fff",
              borderRadius: "40px",
            }}
            height="76px"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type="text"
            value={search}
          />
          <Button
            className="search-btn"
            onClick={handleSearch}
            sx={{
              backgroundColor: "#FF2625",
              color: "#fff",
              textTransform: "none",
              width: { lg: "175px", xs: "80px" },
              fontSize: { lg: "20px", xs: "14px" },
              height: "56px",
              position: "absolute",
              right: "0",
            }}
          >
            Search
          </Button>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            p: "20px",
          }}
        >
          <HorizontalScrollbar
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            isBodyParts
          />
        </Box>
      </Stack>
    </>
  );
};

export default SearchExercises;
