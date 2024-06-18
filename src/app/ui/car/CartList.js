import CarCard from "./CarCard";


const CarList =  ({carData}) => {



  return (
   <div className="  grid  gap-3 grid-cols-1 md:grid-cols-4 m-3">  
    {carData?.response?.map((car)=><div key={car._id}><CarCard carData={car}/></div> )}
   </div>

  );
};

export default CarList;
