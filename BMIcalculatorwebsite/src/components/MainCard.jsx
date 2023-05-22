import Card from "./Card";
import { BsGenderAmbiguous } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import { MdOutlinePregnantWoman, MdMan2 } from "react-icons/md";
const MainCard = () => {
  return (
    <>
      <div className="md:grid md:grid-cols-2 md:w-5/6 md:mx-auto mb:14 py-24">
        
          <Card
            img={<BsGenderAmbiguous />}
            title={"Gender"}
            para={
              "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
            }
          />
          <Card
            img={<FaBirthdayCake />}
            title={"Age"}
            para={
              "The aging individuals, increased body fat and muscle loss may cause BMI to understimate body fat content."
            }
          />
          <Card
            img={<GiMuscleUp />}
            title={"Muscle"}
            para={
              "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
            }
          />
          <Card
            img={<MdOutlinePregnantWoman />}
            title={"Pregnancy"}
            para={
              "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
            }
          />
          <div className="md:col-start-1 md:col-end-3 md:w-full" >
            

          <Card
            img={<MdMan2 />}
            title={"Race"}
            para={
                "Certain health concerns may affect individuals of some Black and Asian origins at lovwer BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
            }
            />
       
            </div>
        
      </div>
    </>
  );
};

export default MainCard;
