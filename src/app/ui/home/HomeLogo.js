import Image from "next/image";
import Link from "next/link";
import { PiPoliceCarDuotone } from "react-icons/pi";
import { PiArrowRightLight } from "react-icons/pi";

const HomeLogo = ({ carName }) => {
  return (
    <>
      <Link href="/store/c" >
        <div className=" flex items-center  bg-[#fafafa] shadow-md  p-4  md:px-6 py-2 ml-3 md:ml-5 ">
          <PiPoliceCarDuotone className=" h-12 w-12 text-black " />

          <p className=" pl-2  font-bold text-sm text-black">{carName}</p>

          {/* <PiArrowRightLight className=" text-white w-10 h-10 ml-3 md:w-10  md:h-9" /> */}
        </div>
      </Link>
    </>
  );
};

export default HomeLogo;
