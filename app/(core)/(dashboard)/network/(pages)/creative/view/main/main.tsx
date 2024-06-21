import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { CreativeNetworkResults } from './results/main';
import { CreativeNetworkSearch } from './search/main';

export function CreativeNetworkMain() {
  return (
    <GlassAreaContainer
      name={CreativeNetworkMain.name}
      sizeFx='h-full flex-grow'
      className='flex flex-col overflow-hidden'
    >
      <CreativeNetworkSearch />
      <CreativeNetworkResults />
    </GlassAreaContainer>
  );
}
