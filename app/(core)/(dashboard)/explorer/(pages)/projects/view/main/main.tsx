import { GlassAreaContainer } from '@/ui/glass/area/main';
import { HorizonsCore } from './core/main';
import { HorizonsSearch } from './core/search/main';

export function HorizonsMain() {
  return (
    <GlassAreaContainer
      name={HorizonsMain.name}
      sizeFx='h-full flex-grow'
      className='flex flex-col overflow-hidden'
    >
      <HorizonsSearch />
      <HorizonsCore />
    </GlassAreaContainer>
  );
}
