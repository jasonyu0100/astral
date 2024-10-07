import { ImageBackground } from '@/ui/background/img/main';
import { AbsoluteHolder } from '@/ui/holder/main';
import { HorizonsPointCreateSpace } from '../create/main';
import { HorizonsPointMainCore } from './core/main';

export function HorizonsPointMain() {
  return (
    <div className='flex h-full w-full flex-grow flex-col overflow-hidden'>
      <div className='relative flex h-full flex-grow flex-col'>
        <AbsoluteHolder>
          <HorizonsPointMainCore />
        </AbsoluteHolder>
        <ImageBackground />
      </div>
      <HorizonsPointCreateSpace />
    </div>
  );
}
