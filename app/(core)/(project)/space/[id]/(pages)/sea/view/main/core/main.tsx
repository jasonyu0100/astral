import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { glassFx, roundedFx } from '@/(style)/data';

export default function SpaceSeaCore() {
  return (
    <div className='flex h-full w-full flex-col overflow-auto'>
      <div className='flex w-full flex-col space-y-[2rem] p-[2rem] '>
        <p className='text-2xl font-bold text-white'>Unadded</p>
        <HorizontalDivider />
        <div className='flex w-full flex-grow flex-row space-x-[1rem]'>
          <GlassWindowFrame
            className='aspect-[9/13] w-[200px]'
            roundedFx={roundedFx.rounded}
          >
            <GlassWindowContents className='p-[1rem]'>
              <p className='font-bold text-white'>
                Chpater 123123 Conversations
              </p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
          <GlassWindowFrame
            className='aspect-[9/13] w-[200px]'
            roundedFx={roundedFx.rounded}
          >
            <GlassWindowContents className='p-[1rem]'>
              <p className='font-bold text-white'>
                Chpater 123123 Conversations
              </p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
          <GlassWindowFrame
            className='aspect-[9/13] w-[200px]'
            roundedFx={roundedFx.rounded}
          >
            <GlassWindowContents className='p-[1rem]'>
              <p className='font-bold text-white'>
                Chpater 123123 Conversations
              </p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
        </div>
        <p className='text-2xl font-bold text-white'>Added</p>
        <HorizontalDivider />

        <div className='flex w-full flex-grow flex-row space-x-[1rem]'>
          <GlassWindowFrame
            className='aspect-[9/13] w-[200px]'
            roundedFx={roundedFx.rounded}
          >
            <GlassWindowContents className='bg-black p-[1rem]'>
              <p className='font-bold text-white'>
                Chpater 123123 Conversations
              </p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
          <GlassWindowFrame
            className='aspect-[9/13] w-[200px]'
            roundedFx={roundedFx.rounded}
          >
            <GlassWindowContents className='bg-black p-[1rem]'>
              <p className='font-bold text-white'>
                Chpater 123123 Conversations
              </p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
          <GlassWindowFrame
            className='aspect-[9/13] w-[200px]'
            roundedFx={roundedFx.rounded}
          >
            <GlassWindowContents className='bg-black p-[1rem]'>
              <p className='font-bold text-white'>
                Chpater 123123 Conversations
              </p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
        </div>
      </div>
    </div>
  );
}
