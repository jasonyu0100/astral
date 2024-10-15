import { ImageBackground } from '@/ui/background/img/main';
import { AbsoluteHolder } from '@/ui/holder/main';
import { HorizonsBoardCreateSpace } from '../create/main';
import { HorizonsBoardKanban } from '../kanban/main';
import { HorizonsBoardHeader } from './header/main';

export function HorizonsBoardCore() {
  return (
    <div className='flex h-full w-full flex-col overflow-hidden'>
      <HorizonsBoardHeader />
      <div className='relative w-full' style={{ height: 'calc(100% - 8rem)' }}>
        <ImageBackground />
        <AbsoluteHolder>
          <HorizonsBoardKanban />
        </AbsoluteHolder>
      </div>
      <HorizonsBoardCreateSpace />
    </div>
  );
}
