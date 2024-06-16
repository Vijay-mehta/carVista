'use client'
import CarList from "@/app/ui/car/CartList";
import { useInternalService } from "@/app/hook/useInternalService";
import { useEffect } from "react";

const UserCar=()=>{
   
    const [carData, isCarDataLoading, carDataError, fetchCarData] = useInternalService("http://localhost:3000/api/car/getcar", "GET");

    useEffect(()=>{ fetchCarData()},[])
      
   
    return(
        <div className=" bg-white">
        <CarList carData={carData}/>
        </div>
    )
}

export default UserCar;