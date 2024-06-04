import { ChaptersLeft } from '../../../../(common)/chapters/left/main';
import { ChaptersRight } from '../../../../(common)/chapters/right/main';
import { ChaptersContainer } from '../../../../(common)/chapters/main';
import { DraftChaptersRow } from './row/main';
import { ChapterContext } from '@/(model)/space/chapter/main';
import ChaptersAdd from '../../../../(common)/chapters/row/add/main';
import { ChapterContainer } from '../../../../(common)/chapters/row/chapter/main';
import { ChaptersRowContainer } from '../../../../(common)/chapters/row/main';

export function DraftChapters() {
  return (
    <ChaptersContainer>
      <ChaptersLeft />
      <ChaptersRowContainer>
            <ChapterContainer index={1}>Verse 1.0</ChapterContainer>
            <ChapterContainer index={1}>Verse 1.1</ChapterContainer>
            <ChapterContainer index={1}>Verse 2.0</ChapterContainer>
        <ChaptersAdd onClick={() => {}} />
      </ChaptersRowContainer>
      <ChaptersRight />
    </ChaptersContainer>
  );
}
