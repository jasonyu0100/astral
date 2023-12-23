"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HelloLanding() {
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
      <div className="w-[650px] h-[770px] relative bg-gradient-to-b from-slate-950 to-violet-900 shadow-2xl flex flex-col justify-center items-center space-y-[75px]">
        <Image alt="test" src={`/brand/logo.png`} width={500} height={500} />
        <div className="flex flex-col space-y-[25px]">
          <div className="w-[550px] h-[50px] border-b border-slate-50 ">
            <input
              className="w-full h-full appearance-none border-transparent focus:border-transparent focus:ring-0 text-slate-50 text-3xl font-extraBold leading-9"
              type="text"
              title="last name"
              value={lname}
              onChange={(e) => changeLname(e.target.value)}
              placeholder="email@gmail.com"
            />
          </div>
          <div className="w-[550px] h-[50px] border-b border-slate-50">
            <input
              className="w-full h-full appearance-none border-transparent focus:border-transparent focus:ring-0 text-slate-50 text-3xl font-extraBold leading-9"
              type="text"
              title="email"
              value={email}
              onChange={(e) => changeEmail(e.target.value)}
              placeholder="********"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <a className="w-[550px] h-[80px] border border-slate-50 flex justify-center items-center cursor-pointer" href="/works/now">
            <p className="text-white text-2xl font-bold leading-7">
              ENTER
            </p>
          </a>
          <div className="w-[550px] h-[80px] flex flex-row items-center justify-center space-x-[25px]">
            <hr className="bg-slate-500 w-[200px]" />
            <p className="text-slate-50 text-xl font-bold">
              OR
            </p>
            <hr className="bg-slate-50 w-[200px]" />
          </div>
          <a className="w-[550px] h-[40px] flex justify-center items-center cursor-pointer" href="/register">
            <p className="text-slate-50 text-xl font-bold leading-7">
              Register here
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
