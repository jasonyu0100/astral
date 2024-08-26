'use client';
import { useEffect, useState } from 'react';

export function Stage({
  stage,
  domain: domain,
}: {
  stage: number;
  domain: string | null;
}) {
  return (
    <div className='bg-slate-300 p-[1rem]'>
      <p className='font-bold'>Stage: {stage}</p>
      <a href={`https://www.${domain}`} target='_blank'>
        {domain}
      </a>
    </div>
  );
}

export default function Page() {
  // const cohort = [
  //   "2XU",
  //   "3XU",
  //   "5XU",
  //   "77U",
  //   "8XU",
  // ]

  const style = '2XU';
  const [capacity, setCapacity] = useState(9);
  const [domains, setDomains] = useState([
    null,
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
  ]);

  useEffect(() => {
    setDomains([null]);
  }, []);

  return (
    <div className='h-full w-full p-[1rem]'>
      <p className='font-bold'>ID: J22</p>
      {/* 
      <p className="font-bold">Style: ##</p>
      <p className="font-bold">Style: TBD</p>
      <p className="font-bold">Style: 2XU</p>
      <p className="font-bold">Style: 3XU</p>
      <p className="font-bold">Style: 5XU</p>
      <p className="font-bold">Style: 77U</p>
      <p className="font-bold">Style: 8XU</p> 
      */}
      <p className='font-bold'>P-Cap: {capacity}</p>
      <p className='font-bold'>Style: {style}</p>
      {/* <p className="font-bold">Feel: {feel[style]}</p> */}
      <br />
      <div className='flex flex-col space-y-[1rem]'>
        <Stage stage={1} domain={domains[1]} />
        {capacity > 1 && (
          <>
            <Stage stage={2} domain={domains[2]} />
            {capacity > 2 && (
              <>
                <Stage stage={3} domain={domains[3]} />
                {capacity > 3 && (
                  <>
                    <Stage stage={4} domain={domains[4]} />
                    {capacity > 4 && (
                      <>
                        <Stage stage={5} domain={domains[5]} />
                        {capacity > 5 && (
                          <>
                            <Stage stage={6} domain={domains[6]} />
                            {capacity > 6 && (
                              <>
                                <Stage stage={7} domain={domains[7]} />
                                {capacity > 7 && (
                                  <>
                                    <Stage stage={8} domain={domains[8]} />
                                    {capacity > 8 && (
                                      <>
                                        <Stage stage={9} domain={domains[9]} />
                                      </>
                                    )}
                                  </>
                                )}
                              </>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
