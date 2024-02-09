import { Layer } from '@/(common)/layer/main';
import { containerStyles } from '@/(common)/styles/data';
import { DraftChapters } from './chapters/main';
import { DraftBody } from './page/body/main';
import { DraftHeader } from './page/header/main';
import { DraftPage } from './page/main';

export function DraftMain() {
  return (
    <Layer
      displayName={DraftMain.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['col']}`}
    >
        <DraftPage>
          <DraftHeader />
          <DraftBody/>
        </DraftPage>
        <DraftChapters/>
    </Layer>
  );
}
