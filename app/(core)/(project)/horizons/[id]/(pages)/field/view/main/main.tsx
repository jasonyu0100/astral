import { ImageBackground } from '@/ui/background/img/main';
import { AbsoluteHolder } from '@/ui/holder/main';
import { HorizonsFieldCreateSpace } from '../create/main';
import { HorizonsFieldKanban } from '../kanban/main';
import { HorizonsFieldHeader } from './header/main';

export function HorizonsFieldCore() {
  return (
    <div className='flex h-full w-full flex-col overflow-hidden'>
      <HorizonsFieldHeader />
      <div className='relative w-full' style={{ height: 'calc(100% - 8rem)' }}>
        <ImageBackground />
        <AbsoluteHolder>
          <HorizonsFieldKanban />
        </AbsoluteHolder>
      </div>
      <HorizonsFieldCreateSpace />
    </div>
  );
}
