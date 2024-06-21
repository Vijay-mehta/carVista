"use client";
import { useInternalApiService } from "@/app/hook/useInternalApiService";
import Link from "next/link";
import { useState } from "react";

const Signup = () => {
  const [userData, setUserData] = useState({
    file: "/home/Tesla.jpg",
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { files, value, name } = e.target;
    if (name === "file" && files.length > 0) {
      setUserData((prev) => ({
        ...prev,
        file: URL.createObjectURL(files[0]),
      }));
    } else {
      setUserData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const [saveUser, saveUserResult, saveUserInProgress, saveUserError] =
    useInternalApiService("http://localhost:3000/api/users/signup", "POST");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("userprofile", userData.file);
    data.append("username", userData.name);
    data.append("email", userData.email);
    data.append("password", userData.password);

    // Logging the FormData contents

    saveUser({
      body: data,
    });
  };

  return (
    <div className="flex justify-center items-center">
      <form
        className="bg-[#faebd7] p-6 h-screen w-full md:w-[600px] md:h-[600px]"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center font-semibold mb-8 text-black">
          Signup Form
        </h1>
        <div className="flex justify-center">
          <img
            src={userData.file}
            width={250}
            height={250}
            className="h-36 w-36 rounded-full cursor-pointer"
            onClick={() => document.getElementById("picId").click()}
            alt="user image"
          />
          <input
            type="file"
            name="file"
            className="hidden"
            onChange={handleChange}
            id="picId"
          />
        </div>
        <div className="flex flex-col  mt-6">
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            onChange={handleChange}
            className="px-4 py-3 m-2 border border-gray-300 bg-gray-100"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            onChange={handleChange}
            className="px-4 py-3 m-2 border border-gray-300 bg-gray-100"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            onChange={handleChange}
            className="px-4 py-3 m-2 border border-gray-300 bg-gray-100"
          />
        </div>
        <div className="flex m-2">
          <button
            type="submit"
            className="bg-[#f75d34] px-6 py-2 mr-2 text-white rounded"
          >
            Signup
          </button>
        </div>
        <p className="mt-4 m-2 text-black">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
