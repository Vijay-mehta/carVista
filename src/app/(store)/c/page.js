"use client";
import { useInternalApiService } from "@/app/hook/useInternalApiService";
import CarList from "@/app/ui/car/CartList";
import Loader from "@/app/ui/loader";
import { useEffect, useState } from "react";

const UserCar = () => {
  const [fetchCar, fetchCarResult, fetchCarInProgress, fetchCarError] =
    useInternalApiService("api/car/getcar", "GET");

  useEffect(() => {
    fetchCar();
  }, []);
  return (
    <div className=" bg-white">
     <div className=" relative">{fetchCarInProgress ? <div className=" absolute top-64  left-28 md:top-[450px] md:left-[600px]"><Loader /> </div>:<div><CarList carData={fetchCarResult} /> </div>} </div>
      </div>
  );
};

        export default UserCar;
