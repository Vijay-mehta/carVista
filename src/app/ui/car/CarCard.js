import Image from "next/image";
const CarCard = ({ carData }) => {
  return (
    <div className=" text-black  bg-white p-6 shadow-lg rounded-lg ">
        <Image src="/home/Tesla.jpg" alt="car image" height={400} width={400} />
        <div className="  grid gap-2 grid-cols-1   mt-2">
        <span className=" font-medium">{`${carData.make} ${carData.model}`}</span>

          <div className=" flex "  ><div className=" font-medium mr-1">{`Rs. ${carData.price} lakh `}</div><p > onwards</p></div>
     
          <p>On-Road Price, Jaipur</p>
        
       
          {/* <span className=" font-bold">{carData.model}</span> */}
         
          {/* <span className=" font-bold">{carData.color}</span> */}
        </div>
      <div className="  "><button className="px-3 py-2 text-sm font-medium text-center border  mt-5 border-[#f75d34] hover:bg-[#f75d34] hover:text-[#ffffff]">Check On-Road Price</button></div>
    </div>
  );
};

export default CarCard;
