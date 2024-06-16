'use client'
import CarList from "@/app/ui/car/CartList";
import { useEffect, useState } from "react";

const UserCar=()=>{
   
  const [newData,setNewData]=useState([])
const apiCall= async()=>{
  let res= await fetch("api/car/getcar");
  let data = await res.json()
 setNewData(data)
 }

 useEffect(()=>{apiCall()},[])
      
   
    return(
        <div className=" bg-white">
        <CarList carData={newData}/>
        </div>
    )
}

export default UserCar;