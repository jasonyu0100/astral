import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { CreativeSearch } from './core/search/main';
import { CreativeFooter } from './core/footer/main';
import { CreativeResults } from './core/results/main';

export function CreativeNetworkMain() {
  return (
    <GlassAreaContainer
      name={CreativeNetworkMain.name}
      size='h-full flex-grow'
      className='flex flex-col'
    >
      <CreativeSearch />
      <CreativeResults />
      <CreativeFooter />
    </GlassAreaContainer>
  );
}
