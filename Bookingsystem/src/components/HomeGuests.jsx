import { TbBrandBooking } from "react-icons/tb";
export const HomeGuests = ({image,name,location,price,properties}) => {
  return (
    <>
        <div>
            <div className="w-52 h-60">
                <img className="w-full h-full" src={image} alt={name} style={{objectFit:"cover"}} />
            </div>
            <div className="mt-2">
                <h1 className="font-semibold">{name}</h1>
            </div>
            <div className="mt-2">
                <p className="text-gray-400">{location}</p>
            </div>
            <div>
                <p className="font-semibold">Starting from {price}</p>
            </div>
            <div className="flex items-center gap-2">
                <TbBrandBooking color="blue" size={20} />
                <p>{properties}</p>
            </div>
        </div>

    </>
  )
}
