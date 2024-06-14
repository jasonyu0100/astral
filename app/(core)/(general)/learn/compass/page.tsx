'use client';
import { useState } from 'react';

export default function Page() {
  const [theta, setTheta] = useState(0);
  const [thetaStar, setThetaStar] = useState(30);
  const [history, setHistory] = useState([[0, 0, 0]]);

  return (
    <div className='flex h-full w-full flex-col space-y-[1rem] p-[3rem]'>
      <div className='flex h-[300px] w-[300px] flex-col items-center justify-center rounded-full border bg-slate-100'>
        <div className='h-[3px] w-[3px] rounded-full bg-slate-300' />
        <div
          className={`flex h-[0px] w-full justify-between border-y-[1px] border-dashed border-red-500 px-[3px]`}
          style={{ rotate: `${theta}deg` }}
        >
          <p className='font-bold text-slate-500'>A</p>
          <p className='font-bold text-slate-500'>B</p>
        </div>
        <div
          className={`flex h-[0px] w-full justify-between border-y-[1px] border-green-500 px-[3px]`}
          style={{ rotate: `${thetaStar}deg` }}
        >
          <p className='font-bold text-slate-500'>A*</p>
          <p className='font-bold text-slate-500'>B*</p>
        </div>
      </div>
      <div className='flex flex-col font-bold'>
        θ = {thetaStar}, Δ = {thetaStar - theta}
      </div>
      <div className='flex flex-col font-bold'>
        History
        {history.map((thetas, i) => (
          <p
            className=''
            key={i}
            onClick={() => {
              setThetaStar(thetas[0]);
              setTheta(thetas[1]);
            }}
          >
            θ: {thetas[0]}, θ*: {thetas[1]}, Δ: {thetas[2]}
          </p>
        ))}
      </div>
      <input
        className='w-[300px]'
        type='range'
        id='theta-one'
        name='theta one'
        min='0'
        value={thetaStar}
        max='180'
        step='1'
        onChange={(e) => setThetaStar(parseInt(e.target.value))}
      />
      <button
        className='w-[300px] rounded-md bg-slate-100'
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
