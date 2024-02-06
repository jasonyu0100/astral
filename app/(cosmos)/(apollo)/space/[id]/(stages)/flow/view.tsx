import { FlowMain } from './flow-epic/main';
import { FlowCenter } from './flow-epic/center/main';
import { FlowSidebar } from './flow-sidebar-epic/main';
import { FlowWrapper } from './flow-epic/wrapper/main';
import { FlowContext } from './page';
import { FlowMoments } from './flow-epic/center/moments/main';
import { FlowMoment } from './flow-epic/center/moments/moment/main';
import { FlowChapters } from './flow-epic/chapters/main';
import { FlowChaptersLeftButton } from './flow-epic/chapters/left/main';
import { FlowChaptersRightButton } from './flow-epic/chapters/right/main';
import { FlowChapter } from './flow-epic/chapters/row/item/main';
import { FlowChaptersRow } from './flow-epic/chapters/row/main';
import { FlowHeader } from './flow-epic/center/header/main';
import { useContext } from 'react';
import FlowChaptersAdd from './flow-epic/chapters/row/add/main';
import { FlowModalsView } from './flow-epic/modal/view';
import { FlowModalContext } from './flow-epic/modal/main';

export function FlowView() {
  const { moments, chapters } = useContext(FlowContext);
  const { addChapter } = useContext(FlowModalContext);

  return (
    <FlowWrapper>
      <FlowModalsView />
      <FlowMain>
        <FlowCenter>
          <FlowHeader />
          <FlowMoments>
            {moments.map((moment, index) => (
              <FlowMoment moment={moment} index={index}></FlowMoment>
            ))}
          </FlowMoments>
        </FlowCenter>
        <FlowChapters>
          <FlowChaptersLeftButton />
          <FlowChaptersRow>
            {chapters.map((chapter) => (
              <FlowChapter chapter={chapter} />
            ))}
            <FlowChaptersAdd onClick={() => addChapter.open()} />
          </FlowChaptersRow>
          <FlowChaptersRightButton />
        </FlowChapters>
      </FlowMain>
      <FlowSidebar />
    </FlowWrapper>
  );
}
