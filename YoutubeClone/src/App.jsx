import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Box } from "@mui/material";
import { Navbar } from "./components";
import Loader from "./components/Loader";
const Feed = lazy(() => import("./components/Feed"));
const VideoDetail = lazy(() => import("./components/VideoDetail"));
const ChannelDetail = lazy(() => import("./components/ChannelDetail"));
const SearchFeed = lazy(() => import("./components/SearchFeed"));
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();
const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Box sx={{ backgroundColor: "#000" }}>
          <Navbar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/video/:id" element={<VideoDetail />} />
              <Route path="/channel/:id" element={<ChannelDetail />} />
              <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
          </Suspense>
        </Box>
      </QueryClientProvider>
    </>
  );
};

export default App;
