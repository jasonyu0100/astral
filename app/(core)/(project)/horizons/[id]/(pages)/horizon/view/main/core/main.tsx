import { HorizonsHorizonPost } from './post/main';
import { HorizonsHorizonStatus } from './status/main';

export function HorizonsHorizonMain() {
  return (
    <div
      style={{
        height: 'calc(100% - 8rem)',
      }}
      className='relative flex w-full flex-col overflow-auto'
    >
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
    </div>
  );
}
