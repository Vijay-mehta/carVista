'use client';

import Image from "next/image";

const Main = () => {



 

  return (
    <div className="relative w-full h-[calc(100vh-1rem)] md:min-h-screen mt-3">
    
       
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
  );
};

export default Main;
