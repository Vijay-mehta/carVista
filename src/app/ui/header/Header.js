import Logo from "./Logo";
import Menu from "./Menu";

const Header=()=>{
    return(
        <div className=" flex  items-center  bg-white    md:px-24  justify-between      border-y border-slate-200 	 ">
        <Logo/>
        <Menu/>
        </div>
    )
} 

export  default Header;