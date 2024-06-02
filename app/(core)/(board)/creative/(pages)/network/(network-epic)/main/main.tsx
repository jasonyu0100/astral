import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { NetworkSearch } from './core/search/main';
import { NetworkFooter } from './core/footer/main';
import { NetworkResults } from './core/results/main';

export function NetworkMain() {
  return (
    <GlassAreaContainer
      name={NetworkMain.name}
      sizeFx='h-full flex-grow'
      className='flex flex-col'
    >
      <NetworkSearch />
      <NetworkResults />
      <NetworkFooter />
    </GlassAreaContainer>
  );
}
