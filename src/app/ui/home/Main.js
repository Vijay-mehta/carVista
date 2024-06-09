import Image from "next/image";
import HomeLogo from "./HomeLogo";

const Main = () => {
  return (
    <>  <div className="relative w-full h-[calc(100vh-1rem)] md:min-h-screen mt-2">
    <Image
      src="/home/car.jpg"
      alt="home page image"
      quality={100}
      layout="fill"
      objectFit="cover"
      priority={true}
      className="object-center"
    />
  </div>
 <div className=" md:absolute   md:top-96  md:left-96"><HomeLogo /></div> </>
  
  );
};

export default Main;
