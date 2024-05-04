import { ChaptersLeft } from '../../../../(common)/chapters/left/main';
import { ChaptersRight } from '../../../../(common)/chapters/right/main';
import { ChaptersContainer } from '../../../../(common)/chapters/main';
import { DraftChaptersRow } from './row/main';

export function DraftChapters() {
  return (
    <ChaptersContainer>
      <ChaptersLeft />
      <DraftChaptersRow />
      <ChaptersRight />
    </ChaptersContainer>
  );
}
