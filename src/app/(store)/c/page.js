"use client";
import { useInternalApiService } from "@/app/hook/useInternalApiService";
import CarList from "@/app/ui/car/CartList";
import { useEffect, useState } from "react";

const UserCar = () => {
  const [fetchCar, fetchCarResult, fetchCarInProgress, fetchCarError] =
    useInternalApiService("api/car/getcar", "GET");

  useEffect( () => {
    fetchCar();
  }, []);
  return (
    <div className=" bg-white">
      <CarList carData={fetchCarResult} />
    </div>
  );
};

export default UserCar;
