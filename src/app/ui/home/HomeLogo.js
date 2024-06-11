import Image from "next/image";
import Link from "next/link";
import { FaCarSide } from "react-icons/fa";
import { PiArrowRightLight } from "react-icons/pi";

const HomeLogo = ({ devicePixelRatio }) => {
  return (
    <>
      {devicePixelRatio > 2 ? (
        devicePixelRatio > 3 ? (
          <>
            <div className=" flex items-center  bg-[#beac86] shadow-md  rounded-md px-6 py-2">
              <Link href="/store/c">
                <p className=" pl-2  font-bold text-xl text-white">See More</p>
              </Link>
            </div>
          </>
        ) : (
          <>
           <div className=" flex items-center  bg-[#beac86] shadow-md  rounded-md px-6 py-2">
              <Link href="/store/c">
                <p className=" pl-2  font-bold text-xl text-white">See More</p>
              </Link>
            </div>
          </>
        )
      ) : (
        <>
        <Link href="/store/c">
          <div className=" flex items-center  bg-[#beac86] shadow-md  rounded-md px-4 py-2  ">
            <FaCarSide className=" h-12 w-12 text-[#f75d34]" />
            
              <p className=" pl-2  font-bold text-xl text-white">CarVista</p>
          
            <PiArrowRightLight className=" text-white w-10 h-10 ml-3 md:w-10  md:h-9" />
          </div>
          </Link>
        </>
      )}
    </>
  );
};

export default HomeLogo;
