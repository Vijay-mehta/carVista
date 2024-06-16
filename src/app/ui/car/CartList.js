import CarCard from "./CarCard";


const CarList =  ({carData}) => {



  return (
   <div className="  grid  grid-cols-2 md:grid-cols-5 ">  
    {carData?.response?.map((car)=><div key={car._id}><CarCard carData={car}/></div> )}
   </div>

  );
};

export default CarList;
