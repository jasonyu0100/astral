import { FlowMain } from './flow-epic/main';
import { FlowPage } from './flow-epic/page/main';
import { FlowSidebar } from './flow-sidebar-epic/main';
import { FlowContainer } from './flow-epic/container/main';
import { FlowContext } from './page';
import { FlowMoments } from './flow-epic/page/moments/main';
import { FlowMoment } from './flow-epic/page/moments/moment/main';
import { FlowChapters } from './flow-epic/chapters/main';
import { FlowHeader } from './flow-epic/page/header/main';
import { useContext } from 'react';
import { FlowModalView } from '../../../../../(modals)/flow-modal/view';

export function FlowView() {
  const { moments, chapters } = useContext(FlowContext);

  return (
    <FlowContainer>
      <FlowModalView />
      <FlowMain>
        <FlowPage>
          <FlowHeader />
          <FlowMoments>
            {moments.map((moment, index) => (
              <FlowMoment moment={moment} index={index}></FlowMoment>
            ))}
          </FlowMoments>
        </FlowPage>
        <FlowChapters>
        </FlowChapters>
      </FlowMain>
      <FlowSidebar />
    </FlowContainer>
  );
}
