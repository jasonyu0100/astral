import { ScenesGoLeftAction } from '../../../../board/view/main/scenes/(common)/left/main';
import { ScenesGoRightAction } from '../../../../board/view/main/scenes/(common)/right/main';
import { ScenesContainer } from '../../../../board/view/main/scenes/container/main';
import { VerseChaptersRow } from './row/main';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import ScenesAdd from '../../../../board/view/main/scenes/(common)/row/add/main';
import { ElementContainer } from '../../../../board/view/main/scenes/(common)/row/element/main';
import { ScenesRowContainer } from '../../../../board/view/main/scenes/(common)/row/main';

export function VerseChapters() {
  return (
    <ScenesContainer>
      <ScenesGoLeftAction />
      <ScenesRowContainer>
        <ElementContainer index={1}>Verse 1.0</ElementContainer>
        <ElementContainer index={1}>Verse 1.1</ElementContainer>
        <ElementContainer index={1}>Verse 2.0</ElementContainer>
        <ScenesAdd onClick={() => {}} />
      </ScenesRowContainer>
      <ScenesGoRightAction />
    </ScenesContainer>
  );
}
