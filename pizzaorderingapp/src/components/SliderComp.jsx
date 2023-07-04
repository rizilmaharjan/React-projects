import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderData } from "../data/SliderData";
import { settings } from "../utils/Caraousel";

export const SliderComp = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Slider {...settings}>
          {SliderData.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-orange-700 myDisplay justify-center"
              >
                <div className="w-[78%]">
                  <img
                    className="w-full object-cover"
                    src={item.image}
                    alt="images"
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
