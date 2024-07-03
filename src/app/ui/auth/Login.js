"use client";
import { useInternalApiService } from "@/app/hook/useInternalApiService";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const Login = () => {
  const [error, setError] = useState({
    email: false,
    password: false,
  });
  const [loginUser, loginUserResult, loginUserInProgress, loginUserError] =
    useInternalApiService("api/users/login", "POST");

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  console.log("userData login", error);

  console.log("loginUserError", loginUserError);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setError((prev) => ({
      ...prev,
      [name]: value.length <= 0,
    }));
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newError = {
      email: userData.email.length <= 0,
      password: userData.password.length <= 0,
    };

    if (Object.values(newError).some((value) => value === true)) {
      return setError(newError);
    }

    loginUser({
      body: { email: userData.email, password: userData.password },
    });
  };

  useEffect(() => {
    if (loginUserResult) {
      toast.success(`${loginUserResult.message} `);
    } else if (loginUserError) {
      toast.error(`${loginUserError} `);
    }
  }, [loginUserResult, loginUserError]);

  return (
    <div className=" flex justify-center">
      <form
        className="bg-[#faebd7] px-4 py-36 h-screen w-full md:w-[600px] md:h-[600px]"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center font-semibold mb-8 text-black">
          Login Form
        </h1>

        <div className=" flex flex-col justify-center">
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            onChange={handleChange}
            className="px-4 py-3 m-2 border border-gray-300 bg-gray-100 text-black "
          />
          {error.email && (
            <p className=" text-red-700 font-medium m-2">Email is Required</p>
          )}
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            onChange={handleChange}
            className="px-4 py-3 m-2 border border-gray-300 bg-gray-100 text-black "
          />
          {error.password && (
            <p className=" text-red-700 font-medium m-2">
              Password is Required
            </p>
          )}

          <div className=" flex m-2">
            <button
              type="submit"
              className="bg-[#f75d34] px-6 py-2 mr-2 text-white rounded"
            >
              Login
            </button>
          </div>
          <p className=" flex mt-4 m-2 text-black">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-600">
              Signup
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
