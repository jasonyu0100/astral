import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { CreativeSearch } from './search/main';
import { CreativeFooter } from './footer/main';
import { CreativeResults } from './results/main';

export function ArtistCollection() {
  return (
    <GlassContainer
      displayName={ArtistCollection.name}
      sizeStyle='h-full flex-grow'
      className='flex flex-col'
    >
      <CreativeSearch />
      <CreativeResults />
      <CreativeFooter />
    </GlassContainer>
  );
}
