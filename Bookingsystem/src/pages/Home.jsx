import { Header } from "../components/Header";
import { Featured } from "../components/Featured";
import { FeaturedData } from "../datas/FeaturedData";
import { Properties } from "../components/Properties";
import { propertyTypeData } from "../datas/propertyTypeData";
import { HomeGuestData } from "../datas/HomesGuest";
import { HomeGuests } from "../components/HomeGuests";
import { Mail } from "../components/Mail";
export const Home = () => {
  return (
    <>
      <Header />
        {/* properties */}
        <div className="mt-14 w-fit mx-auto">
          <div className="flex gap-4 px-3">

          {FeaturedData.map((item) => {
            return (
              <Featured
              key={item.id}
              imgs={item.image}
              name={item.name}
              properties={item.properties}
              />
              );
            })}
            </div>
        </div>
        {/* property type */}
        

        
        <div className=" mx-auto w-fit">
          <h1 className="font-bold px-3 py-6 text-xl">
            Browse by property type
          </h1>
          <div className="flex gap-4 px-3">
            {propertyTypeData.map((item) => {
              return (
                <Properties
                  key={item.id}
                  imgs={item.image}
                  name={item.name}
                  Properties={item.properties}
                />
              );
            })}
          </div>
        </div>

        <div className="mx-auto w-fit">
          <h1 className="font-bold px-3 py-6 text-xl">
            Home guests love
          </h1>
          <div className="flex gap-4 px-3">
            {HomeGuestData.map((item) => {
              return (
                <HomeGuests key={item.id}
                 {...item}
                />
              );
            })}
          </div>
        </div>
        <Mail />


    </>
  );
};
