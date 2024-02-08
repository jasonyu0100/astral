import { DraftMain } from './draft-epic/main';
import { DraftCenter } from './draft-epic/center/main';
import { DraftSidebar } from './draft-sidebar-epic/main';
import { useContext, useState } from 'react';
import { DraftWrapper } from './draft-epic/wrapper/main';
import { DraftContext } from './page';
import { DraftConstellation } from './draft-epic/center/constellation/main';
import { DraftLinks } from './draft-epic/center/constellation/links/main';
import { DraftHeader } from './draft-epic/center/header/main';
import { DraftChaptersLeftButton } from './draft-epic/chapters/left/main';
import { DraftChaptersRightButton } from './draft-epic/chapters/right/main';
import { DraftChaptersRow } from './draft-epic/chapters/row/main';
import { DraftChapter } from './draft-epic/chapters/row/item/main';
import DraftChaptersAdd from './draft-epic/chapters/row/add/main';
import { DraftChapters } from './draft-epic/chapters/main';
import { DraftConstellationStars } from './draft-epic/center/constellation/stars/main';
import { DraftModalContext } from '../../../../../(modals)/draft-modal/main';
import { DraftModalsView } from '../../../../../(modals)/draft-modal/view';
import { DraftBody } from './draft-epic/center/body/main';
import { DraftPanel } from './draft-epic/center/panel/main';
import { cn } from '@/utils/cn';

export function DraftView() {
  const { constellations, chapters, constellationId, constellationHandler } =
    useContext(DraftContext);
  const { addChapterModal } = useContext(DraftModalContext);

  return (
    <DraftWrapper>
      <DraftModalsView />
      <DraftMain>
        <DraftCenter>
          <DraftHeader></DraftHeader>
          <DraftBody>
            <DraftPanel>
              {constellations.map((constellation, index) => (
                <div
                  onClick={() =>
                    constellationHandler.updateConstellation(constellation)
                  }
                  className='cursor-pointer'
                >
                  <p
                    className={cn(`font-extraBold text-xl`, {
                      'text-slate-300': constellation.id === constellationId,
                      'text-slate-500': constellation.id !== constellationId,
                    })}
                  >
                    {index + 1}. {constellation.title}
                  </p>
                </div>
              ))}
            </DraftPanel>
            <DraftConstellation>
              <DraftLinks />
              <DraftConstellationStars />
            </DraftConstellation>
          </DraftBody>
        </DraftCenter>
        <DraftChapters>
          <DraftChaptersLeftButton />
          <DraftChaptersRow>
            {chapters.map((chapter) => (
              <DraftChapter chapter={chapter} />
            ))}
            <DraftChaptersAdd onClick={() => addChapterModal.open()} />
          </DraftChaptersRow>
          <DraftChaptersRightButton />
        </DraftChapters>
      </DraftMain>
      <DraftSidebar />
    </DraftWrapper>
  );
}
