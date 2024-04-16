import { HorizonsCore } from './core/main';
import { HorizonsHeader } from './core/header/main';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

export function HorizonsMain() {
  return (
    <GlassAreaContainer
      name={HorizonsMain.name}
      sizeFx='h-full flex-grow'
      className='flex flex-col'
    >
      <HorizonsHeader />
      <HorizonsCore />
    </GlassAreaContainer>
  );
}
