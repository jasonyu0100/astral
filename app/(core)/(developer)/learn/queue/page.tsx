'use client';
import { useState } from 'react';

export default function Page() {
  const [queue, setQueue] = useState<number[]>([1, 1, 1, 1]);
  const [history, setHistory] = useState<number[]>([]);

  function shuffleArrayImmutable(array: number[]) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  return (
    <div className='flex w-full flex-col space-y-[1rem] overflow-auto p-[3rem]'>
      <div className='flex flex-col items-center rounded-md p-[1rem]'>
        <button
          className='flex h-[50px] w-[50px] items-center justify-center border-b-[2px] border-white bg-blue-300 p-[1rem] font-bold'
          onClick={() => {
            setQueue([...shuffleArrayImmutable(queue), ...queue]);
          }}
        >
          W
        </button>
        <div className='flex flex-row'>
          <button
            className='flex h-[50px] w-[50px] items-center justify-center border-r-[2px] border-white bg-blue-300 p-[1rem] font-bold'
            onClick={() =>
              setQueue([...queue, Math.floor(1 + Math.random() * 100)])
            }
          >
            A
          </button>
          <button
            className='flex h-[50px] w-[50px] items-center justify-center bg-blue-300 p-[1rem] font-bold'
            onClick={() => {
              setQueue(queue.toSorted());
            }}
          >
            S
          </button>
          <button
            className='flex h-[50px] w-[50px] items-center justify-center border-l-[2px] border-white bg-blue-300 p-[1rem] font-bold'
            onClick={() => {
              const stack: number[] = [];
              const num = queue.shift();
              if (num) {
                stack.push(num);
                while (queue.at(0) === num && queue.shift()) {
                  stack.push(num);
                }
              }
              setHistory([...history, ...stack]);
            }}
          >
            D
          </button>
        </div>
      </div>
      <div className='h-[1px] w-full bg-slate-500'></div>
      <div className='space-y-[1rem] py-[2rem]'>
        {queue.map((item, i) => (
          <Container size={item} key={i} />
        ))}
      </div>
      <div className='h-[1px] w-full bg-slate-500'></div>
      <div className='space-y-[1rem] py-[2rem]'>
        {history.map((item, i) => (
          <Container size={item} key={i} />
        ))}
      </div>
    </div>
  );
}

export function Container({ size }: { size: number }) {
  return (
    <div
      className={`flex w-full flex-shrink-0 flex-col rounded-md bg-slate-300 p-[1rem]`}
      style={{ height: 50 * size }}
    >
      Size: {size}
    </div>
  );
}
