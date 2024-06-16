import CarCard from "./CarCard";


const CarList =  ({carData}) => {

// console.log("carData on CarList",carData.response
// )

  return (
   <div className="  bg-green-700 mt-14 pt-12">
   <h1>CarList</h1>
  
    {carData?.response?.map((car)=><div key={car._id} className=" text-white   bg-red-900">{car.price}<p>hello</p></div> )}
   </div>

  );
};

export default CarList;
