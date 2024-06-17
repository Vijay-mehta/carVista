import Image from "next/image";
const CarCard = ({ carData }) => {
  return (
    <div className=" text-black  bg-white p-8 shadow-lg">
      <div className="  text-black">
        <Image src="/home/Tesla.jpg" alt="car image" height={400} width={400} />
        <div className="  grid  grid-cols-1 gap-2  mt-2">
        <span className=" font-medium">{`${carData.make} ${carData.model}`}</span>

          <div className=" flex "  ><div className=" font-medium mr-1">{`Rs. ${carData.price} lakh `}</div><p > onwards</p></div>
     
          {/* <span className=" font-bold">{carData.mileage}</span> */}
        
       
          {/* <span className=" font-bold">{carData.model}</span> */}
         
          {/* <span className=" font-bold">{carData.color}</span> */}
        </div>
      </div>
    </div>
  );
};

export default CarCard;
