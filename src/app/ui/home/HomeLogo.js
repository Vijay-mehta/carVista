import Image from "next/image";
import { FaCarSide } from "react-icons/fa";
import { PiArrowRightLight } from "react-icons/pi";


const HomeLogo=()=>{
    return(
        <div className=" flex items-center  bg-[#beac86] shadow-md  rounded-md">
      {/* <FaCarSide   className="h-10 w-10 md:h-20 md:w-20 text-[#f75d34]"/> */}
      <p className=" pl-2  font-bold text-xl text-white">CarVista</p>
      <PiArrowRightLight className=" text-white w-10 h-10 ml-3 md:w-10  md:h-9"/>

    </div>
    )
}

export default HomeLogo;