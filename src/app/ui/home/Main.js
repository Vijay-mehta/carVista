'use client';

import Image from "next/image";
import HomeLogo from "./HomeLogo";
import { useEffect, useState } from "react";

const Main = () => {
  const [devicePixelRatio, setDevicePixelRatio] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.devicePixelRatio;
    }
    return 1; 
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setDevicePixelRatio(window.devicePixelRatio);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-1rem)] md:min-h-screen">
      {(devicePixelRatio > 2) ? 
        (devicePixelRatio > 1) ? 
          <Image
            fill
            src="/home/thar.jpg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          /> : 
          <Image
            src="/home/car.jpg"
            alt="home page image"
            quality={100}
            layout="fill"
            objectFit="cover"
            priority={true}
            className="object-center"
          /> : 
        <Image
          src="/home/car.jpg"
          alt="home page image"
          quality={100}
          layout="fill"
          objectFit="cover"
          priority={true}
          className="object-center"
        />
      }
      <div className="absolute top-[390px] left-52 md:absolute md:left-10 md:top-[500px] lg:absolute lg:top-[390px] lg:left-52">
        <HomeLogo devicePixelRatio={devicePixelRatio} />
      </div>
    </div>
  );
};

export default Main;
