import { ImageBackground } from '@/ui/background/img/main';
import { AbsoluteHolder } from '@/ui/holder/main';
import { HorizonsArcCore } from './core/main';

export function HorizonsArcMain() {
  return (
    <div
      className='relative flex flex-grow flex-col'
      style={{ height: 'calc(100% - 10rem)' }}
    >
      <ImageBackground />
      <AbsoluteHolder>
        <HorizonsArcCore />
      </AbsoluteHolder>
    </div>
  );
}
