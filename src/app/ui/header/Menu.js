import Link from "next/link";
const Menu=()=>{
    return(
        <div className="   flex items-center  cursor-pointer p-2">
       <div  className=" bg-[#e96440]  px-4 py-2 md:px-5 md:py-2 text-white  mr-2  rounded-sm"><Link href='/store/login'>Login</Link></div> 
       <div className=" bg-[#e96440]  px-4 py-2 md:px-5 md:py-2 text-white  rounded-sm"><Link href='/store/signup'>Signup</Link></div> 
        </div>
    )
}

export default Menu;