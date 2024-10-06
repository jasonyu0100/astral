import { ImageBackground } from '@/ui/background/img/main';
import { AbsoluteHolder } from '@/ui/holder/main';
import { HorizonsHorizonPost } from './post/main';
import { HorizonsHorizonStatus } from './status/main';

export function HorizonsHorizonMain() {
  return (
    <div
      style={{
        height: 'calc(100% - 13rem)',
      }}
      className='relative flex w-full flex-col overflow-auto'
    >
      <ImageBackground />
      <AbsoluteHolder>
        <div className='h-full w-full'>
          <div className='h-full w-full overflow-auto p-[2rem]'>
            <div className='flex w-full flex-col space-y-[4rem]'>
              <HorizonsHorizonStatus />
              <HorizonsHorizonPost />
              <HorizonsHorizonStatus />
              <HorizonsHorizonPost />
              <HorizonsHorizonStatus />
              <HorizonsHorizonPost />
            </div>
          </div>
        </div>
      </AbsoluteHolder>
    </div>
  );
}
