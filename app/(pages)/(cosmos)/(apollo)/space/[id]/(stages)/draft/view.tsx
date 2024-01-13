import { DraftMain } from "./draft-epic/main";
import { DraftCenter } from "./draft-epic/center/main";
import { DraftSidebar } from "./draft-sidebar-epic/main";
import { useContext } from "react";
import { DraftWrapper } from "./draft-epic/wrapper/main";
import { DraftContext } from "./page";
import { DraftConstellation } from "./draft-epic/center/constellation/main";
import { DraftLinks } from "./draft-epic/center/constellation/links/main";
import { DraftHeader } from "./draft-epic/center/header/main";
import { DraftChaptersLeftButton } from "./draft-epic/chapters/left/main";
import { DraftChaptersRightButton } from "./draft-epic/chapters/right/main";
import { DraftChaptersRow } from "./draft-epic/chapters/row/main";
import { DraftChapter } from "./draft-epic/chapters/row/item/main";
import DraftChaptersAdd from "./draft-epic/chapters/row/add/main";
import { DraftChapters } from "./draft-epic/chapters/main";
import { DraftConstellationStars } from "./draft-epic/center/constellation/stars/main";

export function DraftView() {
  const {
    chapters,
  } = useContext(DraftContext);

  return (
    <DraftWrapper>
      <DraftMain>
        <DraftCenter>
          <DraftHeader></DraftHeader>
          <DraftConstellation>
            <DraftLinks />
            <DraftConstellationStars />
          </DraftConstellation>
        </DraftCenter>
        <DraftChapters>
          <DraftChaptersLeftButton/>
          <DraftChaptersRow>
            {chapters.map((chapter) => (
              <DraftChapter chapter={chapter}/>
            ))}
            <DraftChaptersAdd/>
          </DraftChaptersRow>
          <DraftChaptersRightButton />
        </DraftChapters>
      </DraftMain>
      <DraftSidebar />
    </DraftWrapper>
  );
}
