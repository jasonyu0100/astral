/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from 'react';

export function Force() {
  const typeTwo = false;
  const [authorised, setAuthorised] = useState(false);
  const [dual, setDual] = useState(false);

  useEffect(() => {
    if (typeTwo && authorised) {
      setDual(true);
    }
  }, []);

  useEffect(() => {
    if (authorised) {
      setAuthorised(true);
    }
  }, []);

  return (
    <div className='flex flex-col'>
      {authorised && (
        <>
          <p className='text-lg font-bold text-slate-300'>Force</p>
          <br />
          <p className='text-md font-bold text-slate-500'>
            Force - Conditional modifier that unlocks fusion/fission
          </p>
          <p className='text-md font-bold text-slate-500'>
            Fusion - Conditional modifier that lets dealer multiply
          </p>
          <p className='text-md font-bold text-slate-500'>
            Fission - Conditional modifier that lets dealer divide
          </p>
          <br />
          {dual && (
            <>
              {/* Starcraft APM Program */}
              <p className='hidden'>Dualist - refined player</p>
              <p className='hidden'>Duelist - undefined player</p>
            </>
          )}
        </>
      )}
    </div>
  );
}
