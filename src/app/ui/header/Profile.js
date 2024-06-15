"use client";
import Link from "next/link";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


const Profile = () => {
  const [isOpne, setIsOpne] = useState(false);



  return (
    <div className=" relative text-[#8ba1b9] ">
      <FaUserCircle
        className=" h-10 w-10"
        onClick={() => setIsOpne(!isOpne)}
      />
      {isOpne && (
        <>
          <div className=" absolute z-10  bg-white   w-[300px]  h-screen  top-[-10px] right-[-8px] md:right-[-96px]  rounded-md ">
         

            <div className=" bg-[#f1f3f6] p-5">
            <div className=" absolute top-5 right-10" onClick={()=>setIsOpne(false)}><RxCross2  className=" w-7 h-8 text-black"/></div>
              <h1 className=" font-bold text-black  mt-12">Login or Register for best CarVista experience</h1>
              <div className="   flex items-center  cursor-pointer mt-4 ">
                <div className=" bg-[#e96440]  px-4 py-1 md:px-5 md:py-2 text-white  mr-2  rounded-lg     ">
                  <Link href="/store/login" className=" font-medium">Login</Link>
                </div>
                <div className=" bg-[#e96440]  px-4 py-1 md:px-5 md:py-2 text-white  rounded-lg">
                  <Link href="/store/signup" className=" font-medium">Signup</Link>
                </div>
              </div>
            </div>
            <div className=" pl-6  pt-7">
              <div className=" py-2">
                <Link href="#" className=" text-black font-medium ">
                  My Orders
                </Link>
              </div>
              <div className=" py-2">
                <Link href="#" className="text-black font-medium  ">
                  My Vehicels
                </Link>
              </div>
              
              <div className=" py-2">
                <Link href="#" className=" text-black font-medium ">
                  Sortlisted Vehicels
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
