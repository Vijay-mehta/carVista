import Image from "next/image";
import HomeLogo from "./HomeLogo";

const Main = () => {
  return (
    <>

      <div className="relative w-full h-[calc(100vh-1rem)] md:min-h-screen mt-2">
      <Image
        fill
         src="/home/1.jpg"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
        {/* <Image
          src="/home/4.jpg"
          alt="home page image"
          quality={100}
          layout="fill"
          objectFit="cover"
          priority={true}
          className="object-center"
        /> */}
          <div className="  absolute  top-[390px]  left-52  md:absolute   md:top-72  md:right-0 ">
        <HomeLogo />
      </div>
      </div>
    
    </>
  );
};

export default Main;
