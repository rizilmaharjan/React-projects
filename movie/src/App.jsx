import React from "react";
import Home from "./Home";
import Error from "./Error";
import SingleMovie from "./SingleMovie";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
