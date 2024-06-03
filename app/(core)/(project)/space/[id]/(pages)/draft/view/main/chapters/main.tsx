import { ChaptersLeft } from '../../../../(common)/chapters/left/main';
import { ChaptersRight } from '../../../../(common)/chapters/right/main';
import { ChaptersContainer } from '../../../../(common)/chapters/main';
import { DraftChaptersRow } from './row/main';
import { ChapterContext } from '@/(model)/chapter/main';
import ChaptersAdd from '../../../../(common)/chapters/row/add/main';
import { ChapterContainer } from '../../../../(common)/chapters/row/chapter/main';
import { ChaptersRowContainer } from '../../../../(common)/chapters/row/main';

export function DraftChapters() {
  return (
    <ChaptersContainer>
      <ChaptersLeft />
      <ChaptersRowContainer>
            <ChapterContainer index={1}>Take 4A</ChapterContainer>
            <ChapterContainer index={1}>Take 4B</ChapterContainer>
            <ChapterContainer index={1}>Take 4C</ChapterContainer>
        <ChaptersAdd onClick={() => {}} />
      </ChaptersRowContainer>
      <ChaptersRight />
    </ChaptersContainer>
  );
}
