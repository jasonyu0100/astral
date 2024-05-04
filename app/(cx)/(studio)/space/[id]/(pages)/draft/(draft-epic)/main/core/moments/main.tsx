import { GlassAreaContainer } from '@/(lib)/(glass)/area/main';
import { glassFx } from '@/(fx)/data';
import { createContext, useContext } from 'react';
import { MomentObj } from '@/(types)/model/journal/moment/main';
import { MomentsHandlerContext } from '@/(lgx)/internal/handler/moments/main';
import { DraftPanel } from '../panel/main';
import { GlassWindowFrame } from '@/(lib)/(glass)/window/main';
import { GlassWindowPane } from '@/(lib)/(glass)/window/pane/main';

export const DraftMomentContext = createContext({} as MomentObj);

export function DraftMoments() {
  const momentsHandler = useContext(MomentsHandlerContext);
  const moments = momentsHandler.moments;

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
