import { AiOutlineArrowRight } from "react-icons/ai";
const AboutBlock = ({img, title, para}) => {
  return (
    <>
      <div className=" w-full gridsection gap-x-10">
       <div className="flex justify-end">
        <img className="h-20" src={img} alt="pic" />
        
       </div>
       <div className="pl-3 py-2">
        <h1 className="font-bold text-xl capitalize">{title}</h1>
        <p className="pt-3 text-xl">{para}</p>
        <span className="flex text-blue-800 text-2xl items-center pt-5">Learn More <AiOutlineArrowRight /> </span>
       </div>
      </div>
    </>
  )
}

export default AboutBlock
