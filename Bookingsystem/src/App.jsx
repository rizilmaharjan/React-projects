import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Hotel } from "./pages/Hotel";
import { Navbar } from "./components/Navbar";
import { Error } from "./pages/Error";
export default function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
