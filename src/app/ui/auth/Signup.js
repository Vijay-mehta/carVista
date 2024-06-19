"use client";
import { useInternalApiService } from "@/app/hook/useInternalApiService";
import Image from "next/image";
import { useState } from "react";

const Signup = () => {
  const [userData, setUserData] = useState({
    file: "/home/8.jpg",
    name: "",
    email: "",
    password: "",
  });

  const[userFetch,userResult,userInProgress,userError]=useInternalApiService("http://localhost:3000/api/users/signup","POST")



  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setUserData((prev) => {
      const newState = { ...prev };
      if (name === "file") {
        newState[name] = files[0] ? URL.createObjectURL(files[0]) : prev.file;
      } else {
        newState[name] = value;
      }
      return newState;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userFetch({
      body:userData
    })
    console.log("Form submitted", userData);
  };

  return (
    <div className="flex  justify-center text-black bg-white my-10">
      <div className="w-[1100px]">
        <h1 className="font-bold text-xl mb-4 m-2 text-center">Signup Form</h1>
        <form className="shadow-md rounded-sm p-5 " onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <Image
              className="w-36 h-36 rounded-full border border-gray-300"
              alt="user profile"
              src={userData.file}
              width={250}
              height={250}
              onClick={() => document.getElementById("fileInput").click()}
            />
            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="hidden"
              id="fileInput"
            />
          </div>
          <div className=" flex flex-col items-center">
            <div className="text-center mt-5">
            </div>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              onChange={handleChange}
              className="px-3 m-2 py-2 border border-gray-300 w-[350px] hover:border-blue-200 text-xl"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email" 
              onChange={handleChange}
              className="px-3 m-2 py-2 border border-gray-300 w-[350px] hover:border-blue-200 text-xl"
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              onChange={handleChange}
              className="px-3 m-2 py-2 border border-gray-300 w-[350px] hover:border-blue-200 text-xl"
            />
            <div className="flex mt-3 m-2 w-[300px]">
              <div className="bg-[#f75d34] text-white px-4 py-2 mr-2">
                <button type="submit">Signup</button>
              </div>
              <div className="bg-[#f75d34] text-white px-4 py-2">
                <button type="button">Login</button>
              </div>
            </div>
          
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
