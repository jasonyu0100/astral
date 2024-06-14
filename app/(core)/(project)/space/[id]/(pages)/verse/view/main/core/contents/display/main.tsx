import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx } from '@/(style)/data';

export function SpaceVerseList() {
  return (
    <GlassAreaContainer
      name={SpaceVerseList.name}
      sizeFx='flex-grow h-full'
      className={`space-y-[3rem] overflow-auto p-[2rem]`}
    >
      <div className='flex h-full w-full flex-row items-center justify-center space-x-[2rem] p-[2rem]'>
        <GlassWindowFrame className='aspect-[10/13] h-full bg-white'>
          <GlassWindowContents className='flex flex-col space-y-[1rem] p-[1rem]'>
            <div className='aspect-square w-full bg-black'>
              <img
                className='h-full w-full object-cover'
                src='https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              />
            </div>
            <div className='p flex flex-col space-y-[1rem]'>
              <div className='font-bold text-slate-500'>Verse 1.0</div>
              <div className='font-bold text-slate-500'>
                A quick verse drop that I made on the weekend
              </div>
            </div>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      </div>
    </GlassAreaContainer>
  );
}
