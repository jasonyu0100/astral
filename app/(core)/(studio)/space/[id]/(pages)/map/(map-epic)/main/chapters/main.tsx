import { ChaptersLeft } from '../../../../(common)/chapters/left/main';
import { ChaptersRight } from '../../../../(common)/chapters/right/main';
import { ChaptersContainer } from '../../../../(common)/chapters/main';
import { MapChaptersRow } from './row/main';

export function MapChapters() {
  return (
    <ChaptersContainer>
      <ChaptersLeft />
      <MapChaptersRow />
      <ChaptersRight />
    </ChaptersContainer>
  );
}
