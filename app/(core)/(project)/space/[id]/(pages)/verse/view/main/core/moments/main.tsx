import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { createContext } from 'react';
import { VersePanel } from '../panel/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';

export function VerseMoments() {

  return (
    <div className='flex w-full flex-row' style={{ height: '100%' }}>
      <VersePanel />
      <GlassAreaContainer
        name={VerseMoments.name}
        sizeFx='flex-grow h-full'
        className={`overflow-auto p-[2rem] space-y-[3rem]`}
      >
        <div className='flex flex-col h-full w-full items-center justify-center'>
          <GlassWindowFrame className="h-[300px] w-[500px]">
            <GlassWindowPane glassFx={glassFx['glass-5']}/>
          </GlassWindowFrame>
          <br/>
          <div className="flex flex-col space-y-[1rem]">
            <div className='font-bold text-slate-500'>Verse 1.0</div>
            <div className='font-bold text-slate-500'>A quick verse drop that I made on the weekend</div>
          </div>
        </div>
        {/* <div className='flex flex-col space-y-[1rem]'>
          <div className='font-bold text-slate-500'>Take 4B</div>
          <GlassWindowFrame className="h-[300px] w-[500px]">
            <GlassWindowPane glassFx={glassFx['glass-5']}/>
          </GlassWindowFrame>
        </div>
        <div className='flex flex-col space-y-[1rem]'>
          <div className='font-bold text-slate-500'>Take 4C</div>
          <GlassWindowFrame className="h-[300px] w-[500px]">
            <GlassWindowPane glassFx={glassFx['glass-5']}/>
          </GlassWindowFrame>
        </div> */}
      </GlassAreaContainer>
    </div>
  );
}
