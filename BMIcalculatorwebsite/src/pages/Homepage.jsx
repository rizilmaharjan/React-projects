import HeroSection from "../components/HeroSection"
import Result from "../components/Result";
import BMIResult from "../components/BMIResult";
import ReduceBMI from "../components/ReduceBMI";
import Limitations from "../components/Limitations";
import MainCard from "../components/MainCard";
const Homepage = () => {
  return (
    <>
      <HeroSection />
      <Result />
      <ReduceBMI />
      <Limitations />
      <MainCard />
    </>
  )
}

export default Homepage
