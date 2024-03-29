import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { CreativeSearch } from './search/main';
import { CreativeFooter } from './footer/main';
import { CreativeResults } from './results/main';

export function CreativeNetworkMain() {
  return (
    <GlassAreaContainer
      displayName={CreativeNetworkMain.name}
      sizeStyle='h-full flex-grow'
      className='flex flex-col'
    >
      <CreativeSearch />
      <CreativeResults />
      <CreativeFooter />
    </GlassAreaContainer>
  );
}
