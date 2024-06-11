'use client'
import Image from "next/image";
const CarCard=({carData})=>{
    // console.log("dara",carData)
    return(
        <div className=" ">
      
      <Image src='/home/Tesla.jpg' alt="car image" height={200} width={200}/>
      <div  className=" grid  grid-cols-2  gap-2   bg-white  shadow-sm p-4"> 
      <p>Price</p>
      <span  className=" font-bold">{carData.price}</span>
      <p>Mileage</p>
      <span className=" font-bold">{carData.mileage}</span> 
      <p>Make</p>
        <span className=" font-bold">{carData.make}</span> 
     <p>Model</p>
     <span className=" font-bold">{carData.model}</span> 
     <p>color</p>
     <span className=" font-bold">{carData.color}</span></div>
    

        </div>
    )
}

export default CarCard;