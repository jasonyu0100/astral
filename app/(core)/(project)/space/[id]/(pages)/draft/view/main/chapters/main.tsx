import { ScenesGoLeftAction } from '../../../../map/view/main/scenes/(common)/left/main';
import { ScenesGoRightAction } from '../../../../map/view/main/scenes/(common)/right/main';
import { ScenesContainer } from '../../../../map/view/main/scenes/container/main';
import { DraftChaptersRow } from './row/main';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import ScenesAdd from '../../../../map/view/main/scenes/(common)/row/add/main';
import { ElementContainer } from '../../../../map/view/main/scenes/(common)/row/element/main';
import { ScenesRowContainer } from '../../../../map/view/main/scenes/(common)/row/main';

export function DraftChapters() {
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
