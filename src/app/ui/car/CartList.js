import CarCard from "./CarCard";


const CarList =  ({carData}) => {

// console.log("carData on CarList",carData.response
// )

  return (
   <div className=" text-black mt-14 pt-12">  
    {carData?.response?.map((car)=><div key={car._id}><CarCard carData={car}/></div> )}
   </div>

  );
};

export default CarList;
