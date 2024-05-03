import { GlassAreaContainer } from '@/(pkgs)/(glass)/area/main';
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
      <CreativeFooter />
      <CreativeResults />
      <CreativeSearch />
    </GlassAreaContainer>
  );
}
