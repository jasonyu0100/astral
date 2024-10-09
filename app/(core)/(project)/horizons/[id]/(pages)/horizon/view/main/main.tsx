import { HorizonsHorizonMain } from './core/main';
import { HorizonsHorizonHeader } from './header/main';
import { HorizonsHorizonSendPost } from './send/main';

export function HorizonsHorizonCore() {
  return (
    <div className='h-full flex-grow overflow-hidden'>
      <HorizonsHorizonHeader />
      <HorizonsHorizonMain />
      <HorizonsHorizonSendPost />
    </div>
  );
}
