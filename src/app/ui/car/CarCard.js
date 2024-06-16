
const CarCard = ({ carData }) => {
  console.log("dara22",carData)
  return (
    <div className=" text-black    bg-green-600">
       <h1>hello</h1>
       {carData?.response?.map((car)=>(car.price))}
      {/* <Image src="/home/Tesla.jpg" alt="car image" height={200} width={200} /> */}
      {/* <div className=" grid  grid-cols-2 text-black">
        <p>Price</p>
        <span className=" font-bold">{carData.price}</span>
        <p>Mileage</p>
        <span className=" font-bold">{carData.mileage}</span>
        <p>Make</p>
        <span className=" font-bold">{carData.make}</span>
        <p>Model</p>
        <span className=" font-bold">{carData.model}</span>
        <p>color</p>
        <span className=" font-bold">{carData.color}</span>
      </div> */}
    </div>
  );
};

export default CarCard;
