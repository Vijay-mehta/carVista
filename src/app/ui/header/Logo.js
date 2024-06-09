import Image from "next/image";
import { BiSolidCarMechanic } from "react-icons/bi";

const Logo = () => {
  return (
    <>
    <Image src='/home/file.png' alt="car logo" height={90} width={90} />
    {/* <BiSolidCarMechanic  className="  text-[#f75d34]  w-16 h-16" /> */}
    </>

  );
};

export default Logo;
