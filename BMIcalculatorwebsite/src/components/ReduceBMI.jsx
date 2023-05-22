import BMIReduceBlock from "./BMIReduceBlock";
import { RiCake3Line } from "react-icons/ri";
import { CgGym } from "react-icons/cg";
import { BsFillMoonStarsFill } from "react-icons/bs";
const ReduceBMI = () => {
  return (
    <>
      <div className="px-20">
        <BMIReduceBlock
          img={<RiCake3Line className="h-full w-full" />}
          title="Healthy eating"
          para="Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
        />
        <BMIReduceBlock
          img={<CgGym className="h-full w-full" />}
          title="Regular exercise"
          para="Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."
        />
        <BMIReduceBlock
          img={<BsFillMoonStarsFill className="h-full w-full" />}
          title="Adequate sleep"
          para="Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
        />
      </div>
    </>
  );
};

export default ReduceBMI;
