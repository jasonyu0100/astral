import { FlowMain } from "./flow-epic/main";
import { FlowCenter } from "./flow-epic/center/main";
import { FlowSidebar } from "./flow-sidebar-epic/main";
import { FlowWrapper } from "./flow-epic/wrapper/main";
import { FlowContext } from "./page";
import { FlowMoments } from "./flow-epic/center/moments/main";
import { FlowMoment } from "./flow-epic/center/moments/moment/main";
import { FlowChapters } from "./flow-epic/chapters/main";
import { FlowChaptersLeftButton } from "./flow-epic/chapters/left/main";
import { FlowChaptersRightButton } from "./flow-epic/chapters/right/main";
import { FlowChapter } from "./flow-epic/chapters/row/item/main";
import { FlowChaptersRow } from "./flow-epic/chapters/row/main";
import { FlowHeader } from "./flow-epic/center/header/main";
import { FlowSidebarColumn } from "./flow-sidebar-epic/column/main";
import { FlowSidebarEntry } from "./flow-sidebar-epic/column/section/entry/main";
import { FlowSidebarSection } from "./flow-sidebar-epic/column/section/main";
import { useContext } from "react";
import FlowChaptersAdd from "./flow-epic/chapters/row/add/main";

export function FlowView() {
  const {
    moments,
    chapters,
  } = useContext(FlowContext);

  return (
    <FlowWrapper>
      <FlowMain>
        <FlowCenter>
          <FlowHeader/>
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
              <FlowChapter chapter={chapter}/>
            ))}
            <FlowChaptersAdd/>
          </FlowChaptersRow>
          <FlowChaptersRightButton />
        </FlowChapters>
      </FlowMain>
      <FlowSidebar>
        <FlowSidebarColumn>
          <FlowSidebarSection>
            {moments.map((moment) => (
              <FlowSidebarEntry moment={moment} />
            ))}
          </FlowSidebarSection>
        </FlowSidebarColumn>
      </FlowSidebar>
    </FlowWrapper>
  );
}
