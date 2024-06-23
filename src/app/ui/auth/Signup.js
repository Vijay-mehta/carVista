'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useInternalApiService } from "@/app/hook/useInternalApiService";

const Signup = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    file: null, // Initialize file as null
    name: "",
    email: "",
    password: "",
  });

  const [imagePreview, setImagePreview] = useState("/home/Tesla.jpg");

  const handleChange = (e) => {
    const { files, value, name } = e.target;
    if (name === "file" && files.length > 0) {
      const file = files[0];
      setUserData((prev) => ({
        ...prev,
        file: file, // Set the file object directly
      }));
      setImagePreview(URL.createObjectURL(file));
    } else {
      setUserData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const [saveUser, saveUserResult, saveUserInProgress, saveUserError] =
    useInternalApiService("api/users/signup", "POST");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", userData.name);
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    formData.append("userprofile", userData.file);

    try {
      await saveUser({
        body: formData,
      });

      if (saveUserResult) {
        toast.success(`${saveUserResult?.message}`);
        router.push("/login");
      }
    } catch (error) {
      toast.error(`${error.message}`);
    }
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
          <Image
            src={imagePreview}
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
        <div className="flex flex-col mt-6">
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            onChange={handleChange}
            className="px-4 py-3 m-2 border border-gray-300 bg-gray-100 text-black"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            onChange={handleChange}
            className="px-4 py-3 m-2 border border-gray-300 bg-gray-100 text-black"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            onChange={handleChange}
            className="px-4 py-3 m-2 border border-gray-300 bg-gray-100 text-black"
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
          Already have an account?
          <Link href="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
