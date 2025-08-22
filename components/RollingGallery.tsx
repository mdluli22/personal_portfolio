"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimation, useTransform, PanInfo } from "framer-motion";
import Image from "next/image";

const IMGS: string[] = [
  "/images/coffee1.jpeg",
  "/images/coffee2.jpeg",
  "/images/coffee3.jpeg",
  "/images/coffee4.jpeg",
  "/images/coffee5.jpeg",
  "/images/coffee6.jpeg",
  "/images/coffee7.jpeg",
  "/images/coffee8.jpeg",
  "/images/gradPicture.jpeg",
];

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: string[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
}) => {
  images = IMGS;
  const [isScreenSizeSm, setIsScreenSizeSm] = useState<boolean | null>(null);
  const cylinderWidth: number = isScreenSizeSm !== null ? (isScreenSizeSm ? 1100 : 1800) : 1800;
  const faceCount: number = images.length;
  const faceWidth: number = (cylinderWidth / faceCount) * 2;
  const dragFactor: number = 0.05;
  const radius: number = cylinderWidth / (2 * Math.PI);
  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleDrag = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    controls.start({
      rotateY: rotation.get() + info.velocity.x * dragFactor,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        mass: 0.1,
        ease: "easeOut",
      },
    });
  };

  const transform = useTransform(rotation, (value: number) => {
    return `rotate3d(0, 1, 0, ${value}deg)`;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsScreenSizeSm(window.innerWidth <= 640);
    }
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsScreenSizeSm(window.innerWidth <= 640);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - 360 / faceCount,
          transition: { duration: 2, ease: "linear" },
        });
        rotation.set(rotation.get() - 360 / faceCount);
      }, 2000);
      return () => {
        if (autoplayRef.current) clearInterval(autoplayRef.current);
      };
    }
  }, [autoplay, rotation, controls, faceCount]);

  const handleMouseEnter = (): void => {
    if (autoplay && pauseOnHover) {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      controls.stop();
    }
  };

  const handleMouseLeave = (): void => {
    if (autoplay && pauseOnHover) {
      controls.start({
        rotateY: rotation.get() - 360 / faceCount,
        transition: { duration: 2, ease: "linear" },
      });
      rotation.set(rotation.get() - 360 / faceCount);
      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - 360 / faceCount,
          transition: { duration: 2, ease: "linear" },
        });
        rotation.set(rotation.get() - 360 / faceCount);
      }, 2000);
    }
  };

  return (
    <div className="relative h-[500px] w-full overflow-hidden min-h-screen bg-gradient-to-br from-yellow-100 to-orange-100 flex flex-col">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-10">About Me</h1>
        <div className="max-w-6xl mx-auto px-2">
          <p className="text-2xl font-light text-center text-gray-600 mb-8">
            I am motivated and adaptable Information Systems Honours student with solid technical skills in data analytics, full-stack development, and cybersecurity. Backed by hands-on experience in tutoring, tech support, and real-world projects, I bring a practical, growth-driven approach to problem-solving. Passionate about building impactful digital solutions and continuously learning to stay ahead in the tech space.
          </p>
        </div>
        <p className="text-2xl font-light text-center text-gray-600 mb-8">
          Oh and if you have not noticed, I love coffee! ☕
        </p>
      </div>
      {/* Optional gradient overlays */}
      <div className="absolute top-0 left-0 h-full w-12 z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-12 z-10 pointer-events-none"></div>
      <div className="flex h-full items-center justify-center perspective-[1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          className="flex min-h-[200px] items-center justify-center cursor-grab [transform-style:preserve-3d]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform,
            width: cylinderWidth,
          }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
        >
          {images.map((url, i) => (
            <div
              key={i}
              className="absolute flex items-center justify-center backface-hidden p-[8%]"
              style={{
                width: `${faceWidth}px`,
                height: "450px",
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
              }}
            >
              <Image
                src={url}
                alt={`gallery-${i}`}
                width={500}   // adjust depending on expected image width
                height={500}  // adjust depending on expected image height
                className="w-full h-full rounded-xl border-4 border-white object-cover transition-transform duration-300 ease-in-out hover:scale-105 pointer-events-none"
                />

            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;