import { GlassAreaContainer } from '@/ui/(glass)/area/main';
import { VentureHorizonsCore } from './core/main';
import { HorizonsSearch } from './core/search/main';

export function VentureHorizonsMain() {
  return (
    <GlassAreaContainer
      name={VentureHorizonsMain.name}
      sizeFx='h-full flex-grow'
      className='flex flex-col overflow-hidden'
    >
      <HorizonsSearch />
      <VentureHorizonsCore />
    </GlassAreaContainer>
  );
}
