import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { createContext } from 'react';
import { PostObj } from '@/(types)/model/post/main';
import { DraftPanel } from '../panel/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';

export const DraftMomentContext = createContext({} as PostObj);

export function DraftMoments() {

  return (
    <div className='flex w-full flex-row' style={{ height: '100%' }}>
      <DraftPanel />
      <GlassAreaContainer
        name={DraftMoments.name}
        sizeFx='flex-grow h-full'
        className={`overflow-auto p-[2rem] space-y-[3rem]`}
      >
        {/* TODO */}
        <div className='flex flex-col space-y-[1rem]'>
          <div className='font-bold text-slate-500'>Take 4A</div>
          <GlassWindowFrame className="h-[300px] w-[500px]">
            <GlassWindowPane glassFx={glassFx['glass-5']}/>
          </GlassWindowFrame>
        </div>
        <div className='flex flex-col space-y-[1rem]'>
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
        </div>

      </GlassAreaContainer>
    </div>
  );
}
