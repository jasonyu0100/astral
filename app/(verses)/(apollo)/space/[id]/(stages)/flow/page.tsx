'use client';
import { createContext } from 'react';
import { FlowView } from './view';
import { ChapterHandler, useChapters } from '@/(verses)/(handler)/chapters/main';
import { MomentHandler, useMoments } from '@/(verses)/(handler)/flow/moments/main';
import { MomentObj } from '@/(ouros)/(model)/flow/moment/main';
import insideCosmos from '@/utils/isAuth';
import { ChapterObj } from '@/(ouros)/(model)/space/chapter/main';
import { FlowModalContext, useFlowModal } from '../../../../../(modals)/flow-modal/main';
import { FlowModalView } from '@/(verses)/(modals)/flow-modal/view';

interface FlowContextObj {
  chapter?: ChapterObj;
  moment?: MomentObj;
  moments: MomentObj[];
  momentId: string;
  chapterId: string;
  chapters: ChapterObj[];
  chapterHandler: ChapterHandler;
  momentHandler: MomentHandler;
}

export const FlowContext = createContext<FlowContextObj>({} as FlowContextObj);

function Page({ params }: { params: { id: string } }) {
  const { chapter, chapters, chapterId, _chapterHandler } = useChapters(
    params.id,
  );
  const { moment, moments, momentId, _momentHandler } = useMoments(
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
