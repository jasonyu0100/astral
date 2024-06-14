import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx } from '@/(style)/data';
import { VersePanel } from '../panel/main';

export function SpaceVerseList() {
  return (
    <div className='flex w-full flex-row' style={{ height: '100%' }}>
      <GlassAreaContainer
        name={SpaceVerseList.name}
        sizeFx='flex-grow h-full'
        className={`space-y-[3rem] overflow-auto p-[2rem]`}
      >
        <div className='flex h-full w-full flex-col items-center justify-center'>
          <GlassWindowFrame className='h-[300px] w-[500px]'>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
          <br />
          <div className='flex flex-col space-y-[1rem]'>
            <div className='font-bold text-slate-500'>Verse 1.0</div>
            <div className='font-bold text-slate-500'>
              A quick verse drop that I made on the weekend
            </div>
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
      <VersePanel />
    </div>
  );
}
