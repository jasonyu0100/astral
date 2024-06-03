import { HorizonsCore } from './core/main';
import { HorizonsHeader } from './core/header/main';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { HorizonsSearch } from './core/search/main';

export function HorizonsMain() {
  return (
    <GlassAreaContainer
      name={HorizonsMain.name}
      sizeFx='h-full flex-grow'
      className='flex flex-col'
    >
      <HorizonsSearch />
      <HorizonsCore />
      <HorizonsHeader />
    </GlassAreaContainer>
  );
}
