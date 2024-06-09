import Image from "next/image";
import { FaCarSide } from "react-icons/fa";
import { PiArrowRightLight } from "react-icons/pi";


const HomeLogo=()=>{
    return(
        <div className=" flex items-center  bg-white  text-black  shadow-md  p-2  rounded-md">
      <FaCarSide   className=" h-20 w-20 text-[#f75d34]"/><p className=" pl-2  font-bold text-xl ">CarVista</p>
      <PiArrowRightLight className=" w-14  h-9"/>

    </div>
    )
}

export default HomeLogo;