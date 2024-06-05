"use client";
import { useState } from "react";

export default function Page() {
  const [theta, setTheta] = useState(0);
  const [thetaStar, setThetaStar] = useState(30);
  const [history, setHistory] = useState([[0, 0, 0]]);

  return (
    <div className="w-full h-full p-[3rem] flex flex-col space-y-[1rem]">
      <div className="w-[300px] flex flex-col items-center justify-center h-[300px] border rounded-full bg-slate-100">
        <div className="w-[3px] h-[3px] rounded-full bg-slate-300" />
        <div
          className={`w-full h-[0px] flex px-[3px] justify-between border-y-[1px] border-red-500 border-dashed`}
          style={{ rotate: `${theta}deg` }}
        >
          <p className="text-slate-500 font-bold">A</p>
          <p className="text-slate-500 font-bold">B</p>
        </div>
        <div
          className={`w-full h-[0px] border-y-[1px] px-[3px] flex justify-between border-green-500`}
          style={{ rotate: `${thetaStar}deg` }}
        >
          <p className="text-slate-500 font-bold">A*</p>
          <p className="text-slate-500 font-bold">B*</p>
        </div>
      </div>
      <div className="flex flex-col font-bold">
        θ = {thetaStar}, Δ = {thetaStar - theta}
      </div>
      <div className="flex flex-col font-bold">
        History
        {history.map((thetas, i) => (
          <p className="" key={i} onClick={() => {
            setThetaStar(thetas[0]);
            setTheta(thetas[1]);
          }}>
            θ: {thetas[0]}, θ*: {thetas[1]}, Δ: {thetas[2]}
          </p>
        ))}
      </div>
      <input
        className="w-[300px]"
        type="range"
        id="theta-one"
        name="theta one"
        min="0"
        value={thetaStar}
        max="180"
        step="1"
        onChange={(e) => setThetaStar(parseInt(e.target.value))}
      />
      <button
        className="bg-slate-100 rounded-md w-[300px]"
        onClick={() => {
          setThetaStar(thetaStar);
          setTheta(thetaStar);
          setHistory([...history, [theta, thetaStar, thetaStar - theta]]);
        }}
      >
        Update
      </button>
    </div>
  );
}
