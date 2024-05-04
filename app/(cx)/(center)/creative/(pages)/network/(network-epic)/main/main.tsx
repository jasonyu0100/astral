import { GlassAreaContainer } from '@/(lib)/(glass)/area/main';
import { CreativeSearch } from './core/search/main';
import { CreativeFooter } from './core/footer/main';
import { CreativeResults } from './core/results/main';

export function CreativeNetworkMain() {
  return (
    <GlassAreaContainer
      name={CreativeNetworkMain.name}
      sizeFx='h-full flex-grow'
      className='flex flex-col'
    >
      <CreativeSearch />
      <CreativeResults />
      <CreativeFooter />
    </GlassAreaContainer>
  );
}
