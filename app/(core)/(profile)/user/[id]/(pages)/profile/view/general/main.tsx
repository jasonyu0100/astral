import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { exampleFileElem } from '@/(server)/(model)/elements/file/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { ProfileUserGeneralHeader } from './header/main';

export function ProfileUserGeneralMain() {
  return (
    <>
      <ProfileUserGeneralHeader />
      <div className='flex w-full flex-col space-y-[1rem] p-[2rem]'>
        <div className='p-[3rem]'>
          <GlassWindowFrame roundedFx={roundedFx.rounded} className='p-[2rem]'>
            <GlassWindowContents className='flex flex-col items-center space-y-[2rem]'>
              <div className='flex w-full flex-row items-center space-x-[2rem]'>
                <img
                  src={exampleFileElem.src}
                  className='h-[6rem] w-[6rem] rounded'
                ></img>
                <div className='flex flex-col'>
                  <p className='text-lg font-bold text-slate-300'>
                    Hello world
                  </p>
                  <p className='text-md text-slate-300'>Hello world</p>
                </div>
              </div>
              <HorizontalDivider />
              <div className='flex w-full flex-row items-center space-x-[2rem]'>
                <img
                  src={exampleFileElem.src}
                  className='h-[6rem] w-[6rem] rounded'
                ></img>
                <div className='flex flex-col'>
                  <p className='text-lg font-bold text-slate-300'>
                    Hello world
                  </p>
                  <p className='text-md text-slate-300'>Hello world</p>
                </div>
              </div>
              <HorizontalDivider />
              <div className='flex w-full flex-row items-center space-x-[2rem]'>
                <img
                  src={exampleFileElem.src}
                  className='h-[6rem] w-[6rem] rounded'
                ></img>
                <div className='flex flex-col'>
                  <p className='text-lg font-bold text-slate-300'>
                    Hello world
                  </p>
                  <p className='text-md text-slate-300'>Hello world</p>
                </div>
              </div>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
        </div>
      </div>
    </>
  );
}
