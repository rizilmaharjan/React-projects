import { Route, Routes } from "react-router-dom";
import {lazy, Suspense} from "react"
import { userInputs } from "./data/FormSource";
import { productInputs } from "./data/FormSource";
import { myCustomContext } from "./context/ColorContext";
import classNames from "classnames";
import Loader from "./components/Loader";
const Login = lazy(()=>import("./pages/login/Login"))
const Home = lazy(()=>import("./pages/home/Home"))
const List = lazy(()=>import("./pages/list/List"))
const Single = lazy(()=>import("./pages/single/Single"))
const New = lazy(()=>import("./pages/new/New"))
const App = () => {
  const {darkMode} = myCustomContext()
  return (
    <>
      <div className={classNames({
        "bg-black" : darkMode === true,
        "bg-white" : darkMode === false
      })}>

      <Suspense fallback={<Loader />} >

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users">
          <Route index element={<List url={"/users"} />} />
          <Route path=":userId" element={<Single />} />
          <Route path="new" element={<New inputs={userInputs}  title="Add New User" />} />
        </Route>
        <Route path="/products">
          <Route index element={<List url={"/products"} />} />
          <Route path=":productId" element={<Single />} />
          <Route path="new" element={<New inputs={productInputs}  title="Add New Product" />} />
        </Route>
      </Routes>
      </Suspense>

      </div>
    </>
  );
};

export default App;
