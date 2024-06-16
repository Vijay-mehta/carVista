import CarCard from "./CarCard";


const CarList =  ({carData}) => {

console.log("carData on CarList",carData.response
)

  return (
   <div className=" text-black mt-14 pt-12">
   {/* <h1>CarList</h1> */}
   <CarCard carData={carData}/>
    {/* {carData?.response?.map((car)=>(car.price))} */}
   </div>

  );
};

export default CarList;
