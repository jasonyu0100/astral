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
        className={`overflow-auto p-[3rem] space-y-[3rem]`}
      >
        {/* TODO */}
        <div className='flex flex-row'>
          <div className='font-bold text-slate-500'>Draft #1</div>
          <GlassWindowFrame className="h-[300px] w-[500px]">
            <GlassWindowPane glassFx={glassFx['glass-5']}/>
          </GlassWindowFrame>
        </div>
        <div className='flex flex-row'>
          <div className='font-bold text-slate-500'>Draft #1</div>
          <GlassWindowFrame className="h-[300px] w-[500px]">
            <GlassWindowPane glassFx={glassFx['glass-5']}/>
          </GlassWindowFrame>
        </div>
        <div className='flex flex-row'>
          <div className='font-bold text-slate-500'>Draft #1</div>
          <GlassWindowFrame className="h-[300px] w-[500px]">
            <GlassWindowPane glassFx={glassFx['glass-5']}/>
          </GlassWindowFrame>
        </div>
        {/* {moments.map((moment) => (
          <DraftMomentContext.Provider value={moment} key={moment.id}>
            <DraftMoment key={moment.id}/>
          </DraftMomentContext.Provider>
        ))} */}
      </GlassAreaContainer>
    </div>
  );
}
