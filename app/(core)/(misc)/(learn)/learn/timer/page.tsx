"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const originalTime = 10000; // 100 x 100
  const [timeDilation, changeTimeDilation] = useState(1);
  const [timeElapsed, changeTimeElapsed] = useState(0);
  const currentTime = originalTime - timeElapsed;
  const days = Math.floor(currentTime / 60 / 60 / 24);
  const hours = Math.floor(currentTime / 60 / 60) % 24;
  const minutes = Math.floor(currentTime / 60) % 60;
  const seconds = currentTime % 60;

  useEffect(() => {
    const duration =
      timeDilation === 0
        ? Math.pow(10, 10)
        : Math.floor(1000 / Math.abs(timeDilation));
    setTimeout(() => {
      if (timeDilation < 0) {
        changeTimeElapsed(timeElapsed - 1);
      } else {
        changeTimeElapsed(timeElapsed + 1);
      }
    }, duration);
  });

  return (
    <div className="w-full h-full p-[3rem]">
      <div className="flex flex-col space-y-[3rem] bg-blue-200 p-[3rem] rounded-lg">
        <div className="text-black flex space-y-[1rem] flex-col items-center p-[3rem] bg-slate-100 rounded-full">
          <p className="transition-opacity text-3xl w-full flex justify-center">
            {days} days : {hours} hrs :{" "}
            <span className="flex justify-center w-[3rem] px-[0.5rem]">
              {minutes}
            </span>
            m :{" "}
            <span className="flex justify-center w-[3rem] px-[0.5rem]">
              {seconds}
            </span>
            s
          </p>
          <div className="flex flex-row space-x-[1rem]">
            <p className="font-bold text-lg">
              Dilation: {timeDilation}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p>Days : {days}</p>
            <p>Hours : {hours}</p>
            <p>Minutes : {minutes}</p>
            <p>Seconds : {seconds}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between rounded-md border-blue-300 border-[3px]">
          <div
            className="bg-blue-500 w-[200px] h-[200px] border-blue-300 border-[3px] justify-center items-center flex cursor-pointer"
            onClick={() => changeTimeDilation(1)}
          >
            1x
          </div>
          <div
            className="bg-blue-500 w-[200px] h-[200px] border-blue-300 border-[3px] justify-center items-center flex cursor-pointer"
            onClick={() => changeTimeDilation(2)}
          >
            2x
          </div>
          <div
            className="bg-blue-500 w-[200px] h-[200px] border-blue-300 border-[3px] justify-center items-center flex cursor-pointer"
            onClick={() => changeTimeDilation(5)}
          >
            5x
          </div>
          <div
            className="bg-blue-500 w-[200px] h-[200px] border-blue-300 border-[3px] justify-center items-center flex cursor-pointer"
            onClick={() => changeTimeDilation(0)}
          >
            Pause
          </div>
          <div
            className="bg-blue-500 w-[200px] h-[200px] border-blue-300 border-[3px] justify-center items-center flex cursor-pointer"
            onClick={() => changeTimeDilation(100)}
          >
            100x
          </div>
          <div
            className="bg-blue-500 w-[200px] h-[200px] border-blue-300 border-[3px] justify-center items-center flex cursor-pointer"
            onClick={() => changeTimeDilation(-1)}
          >
            -1x
          </div>
          <div
            className="bg-blue-500 w-[200px] h-[200px] border-blue-300 border-[3px] justify-center items-center flex cursor-pointer"
            onClick={() => changeTimeDilation(-1)}
          >
            -2x
          </div>
        </div>
      </div>
    </div>
  );
}
