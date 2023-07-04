import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderData } from "../data/SliderData";
import { settings } from "../utils/Caraousel";

export const SliderComp = () => {
  return (
    <>
        <Slider {...settings}>
          {SliderData.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-orange-700 myDisplay h-screen items-center justify-center"
              >
                <div className="h-fit w-fit">
                  <img
                    className="h-[25rem] w-[25rem] "
                    src={item.image}
                    alt="images"
                  />
                </div>
                <div className="h-fit">
                  <h1 className="text-7xl capitalize text-white font-semibold">
                    {item.info}
                  </h1>
                </div>
              </div>
            );
          })}
        </Slider>
    </>
  );
};
