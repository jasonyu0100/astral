'use client';
import { createContext } from 'react';
import { FlowView } from './view';
import { ChapterHandler, useChapters } from '../../handler/chapters/main';
import { MomentHandler, useMoments } from '../../handler/moments/main';
import { MomentObj } from '@/tables/flow/moment/main';
import insideCosmos from '@/utils/isAuth';
import { ChapterObj } from '@/tables/space/chapter/main';

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

export const FlowContext = createContext<FlowContextObj>({
} as FlowContextObj);

function Page({ params }: { params: { id: string }}) {
  const { chapter, chapters, chapterId, _chapterHandler } = useChapters(params.id);
  const { moment, moments, momentId, _momentHandler } = useMoments(chapterId, params.id);

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

  return (
    <FlowContext.Provider value={context}>
      <FlowView />
    </FlowContext.Provider>
  );
}

export default insideCosmos(Page);
