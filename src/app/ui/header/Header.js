'use clienty'
import Logo from "./Logo";
import Profile from "./Profile";
import { TbHeart } from "react-icons/tb";




const Header = () => {

    
  return (
    <div className=" flex  items-center  bg-white    md:px-24  justify-between      border-y border-slate-200  px-2	 ">
      <Logo />
      <div className=" flex items-center">
       <div><TbHeart className=" text-black w-8 h-8 mr-4" /></div> 
       <div><Profile /></div> 
      </div>
    </div>
  );
};

export default Header;
