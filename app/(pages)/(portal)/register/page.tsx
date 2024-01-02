"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HelloForm } from "./form";

export function HelloLanding() {
  const categories = [
    "star",
    "creator",
    "writer",
    "creative",
    "personality",
    "musician",
    "photographer",
    "dj",
    "mover",
    "artist",
    "storyteller",
    "performer",
    "illustrator",
    "producer",
    "designer",
    "architect",
  ];

  const [flipped, changeFlipped] = useState(false);
  const [categoryIndex, changeCategoryIndex] = useState(0);
  const [variant, changeVariant] = useState("m");
  const [imageState, changeImageState] = useState("show");

  const [tag, changeTag] = useState("");
  const [fname, changeFname] = useState("");
  const [lname, changeLname] = useState("");
  const [email, changeEmail] = useState("");
  const [role, changeRole] = useState("");

  const duration = 5000;
  const interval = useRef(0);

  function categoryIncrementCall() {
    changeCategoryIndex(
      (categoryIndex) => (categoryIndex + 1) % categories.length
    );
    changeVariant((variant) => (variant === "m" ? "f" : "m"));
  }

  function flipPolaroid() {
    if (!flipped) {
      clearInterval(interval.current);
    }
    changeFlipped(!flipped);
  }

  function tapPolaroid() {
    changeImageState("flash");
    changeCategoryIndex(
      (categoryIndex) => (categoryIndex + 1) % categories.length
    );
    setTimeout(() => {
      changeImageState("show");
    }, 300);
    clearInterval(interval.current);
  }

  useEffect(() => {
    if (!flipped) {
      let temp = window.setInterval(categoryIncrementCall, duration);
      interval.current = temp;
      return () => clearInterval(interval.current);
    }
  }, [flipped]);

  return (
    <div className="w-screen h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-violet-950 to-slate-950">
      <div className="w-[650px] h-[770px] relative bg-stone-100 shadow-2xl">
        {!flipped ? (
          <div
            className="flex flex-col items-center p-[50px] h-full w-full cursor-pointer"
            onClick={tapPolaroid}
          >
            <motion.div
              variants={{
                flash: { opacity: 0.75 },
                show: { opacity: 1 },
              }}
              className={`absolute top-50 left-50`}
              initial="flash"
              animate={imageState}
            >
              <Image
                alt="test"
                src={`/landing/${categories[categoryIndex]}-${variant}.png`}
                width={550}
                height={550}
              />
            </motion.div>
            <div className="w-[550px] h-[550px] bg-slate-200" />
            <div className="top-[665px] absolute text-center w-full text-black text-[64px] font-normal font-permanentMarker leading-9 capitalize">
              {categories[categoryIndex]}
            </div>
          </div>
        ) : (
          <HelloForm
            categoryIndex={categoryIndex}
            changeCategoryIndex={changeCategoryIndex}
          />
        )}
      </div>
      <div
        className="mt-12 text-center text-slate-500 text-xl font-bold leading-7 cursor-pointer"
        onClick={flipPolaroid}
      >
        FLIP ME
      </div>
    </div>
  );
}
