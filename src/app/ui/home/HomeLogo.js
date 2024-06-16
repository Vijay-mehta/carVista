import Image from "next/image";
import Link from "next/link";
import { PiPoliceCarDuotone } from "react-icons/pi";
import { PiArrowRightLight } from "react-icons/pi";

const HomeLogo = ({ carName }) => {
  return (
    <>
      <Link href="/c" >
        <div className=" flex items-center  bg-[#fafafa] shadow-md  p-4  md:px-6 py-2 ml-3 md:ml-5  ">
          <PiPoliceCarDuotone className=" h-12 w-12 text-black " />

          <p className=" pl-2  font-bold text-sm text-black">{carName}</p>

        </div>
      </Link>
    </>
  );
};

export default HomeLogo;
