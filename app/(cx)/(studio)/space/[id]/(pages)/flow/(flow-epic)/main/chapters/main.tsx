import { ChaptersLeft } from '../../../../(common)/chapters/left/main';
import { ChaptersRight } from '../../../../(common)/chapters/right/main';
import { ChaptersContainer } from '../../../../(common)/chapters/main';
import { FlowChaptersRow } from './row/main';

export function FlowChapters() {
  return (
    <ChaptersContainer>
      <ChaptersLeft />
      <FlowChaptersRow />
      <ChaptersRight />
    </ChaptersContainer>
  );
}
