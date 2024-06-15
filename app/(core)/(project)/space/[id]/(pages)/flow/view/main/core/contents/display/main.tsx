import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { useControllerForFlippable } from '@/(logic)/contexts/flippable/main';
import { glassFx } from '@/(style)/data';

export function SpaceFlowList() {
  const flippableController = useControllerForFlippable();

  return (
    <GlassAreaContainer
      name={SpaceFlowList.name}
      sizeFx='flex-grow h-full'
      className={`space-y-[3rem] overflow-auto p-[2rem]`}
    >
      <div className='flex h-full w-full flex-col items-center justify-center space-y-[2rem] p-[2rem]'>
        <GlassWindowFrame className='aspect-[10/13] h-full flex-shrink-0 bg-white'>
          {flippableController.flipped ? (
            <>
              <GlassWindowContents className='flex flex-col space-y-[1rem]  p-[1rem]'>
                <p>Hello World</p>
              </GlassWindowContents>
            </>
          ) : (
            <>
              <GlassWindowContents className='flex flex-col space-y-[1rem]  p-[1rem]'>
                <div className='aspect-square w-full bg-black'>
                  <img
                    className='h-full w-full object-cover'
                    src='https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  />
                </div>
                <div className='p flex flex-col space-y-[1rem]'>
                  <div className='font-permanentMarker text-2xl text-black'>
                    Verse 1.0
                  </div>
                  <div className='font-bold text-slate-500'>
                    A quick melody I made over the weekend
                  </div>
                </div>
              </GlassWindowContents>
            </>
          )}
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
        <p
          className='mt-[3rem] animate-pulse cursor-pointer text-center text-xl font-bold leading-7 text-slate-500'
          onClick={flippableController.flip}
        >
          FLIP ME
        </p>
      </div>
    </GlassAreaContainer>
  );
}
