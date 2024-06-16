import Image from "next/image";
import HomeLogo from "./HomeLogo";

const Main = () => {

 

  return (
    <div className="relative w-full h-[calc(100vh-1rem)] md:min-h-screen mt-3">
      <Image
        src="/home/car.jpg"
        alt="home bg-image"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
        className="object-center"
      />
      <div className=" absolute top-44 right-6  md:bottom-96 md:left-20 flex">
       <div ><HomeLogo carName="Buy Car" /></div> 
        <HomeLogo carName="Service Car" />
      </div>
    </div>
  );
};

export default Main;
