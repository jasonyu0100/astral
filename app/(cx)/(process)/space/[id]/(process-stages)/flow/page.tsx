'use client';
import { createContext } from 'react';
import { FlowView } from './view';
import { ChapterActions, useChaptersHandler } from '@/(logic)/internal/handler/chapters/main';
import { MomentActions, useMomentsHandler } from '@/(logic)/internal/handler/flow/moments/main';
import { MomentObj } from '@/(logic)/internal/data/infra/model/flow/moment/main';
import insideCosmos from '@/(logic)/utils/isAuth';
import { ChapterObj } from '@/(logic)/internal/data/infra/model/space/chapter/main';
import { FlowModalContext, useFlowModal } from '../../../../../../(modals)/(process)/flow-modal/main';
import { FlowModalView } from '@/(modals)/(process)/flow-modal/view';

interface FlowContextObj {
  chapter?: ChapterObj;
  moment?: MomentObj;
  moments: MomentObj[];
  momentId: string;
  chapterId: string;
  chapters: ChapterObj[];
  chapterHandler: ChapterActions;
  momentHandler: MomentActions;
}

export const FlowContext = createContext<FlowContextObj>({} as FlowContextObj);

function Page({ params }: { params: { id: string } }) {
  const { chapter, chapters, chapterId, chapterActions: _chapterHandler } = useChaptersHandler(
    params.id,
  );
  const { moment, moments, momentId, momentActions: _momentHandler } = useMomentsHandler(
    chapterId,
    params.id,
  );

  const context: FlowContextObj = {
    chapter,
    moment,
    moments,
    momentId,
    chapterId,
    chapters,
    chapterHandler: _chapterHandler,
    momentHandler: _momentHandler,
  };

  const modalContext = useFlowModal();

  return (
    <FlowContext.Provider value={context}>
      <FlowModalContext.Provider value={modalContext}>
      <FlowModalView />
        <FlowView />
      </FlowModalContext.Provider>
    </FlowContext.Provider>
  );
}

export default insideCosmos(Page);
