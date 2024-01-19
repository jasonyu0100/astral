'use client';
import { createContext } from 'react';
import { FlowView } from './view';
import { ChapterHandler, useChapters } from '../../handler/chapters/main';
import { MomentHandler, useMoment } from '../../handler/moments/main';
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
  const { moment, moments, momentId, _momentHandler } = useMoment();

  const chapterHandler: ChapterHandler = {
    queryListChapters: async () => {
      return _chapterHandler.queryListChapters();
    },
    queryCreateChapter: async (title: string, description: string) => {
      return _chapterHandler.queryCreateChapter(title, description);
    },
    addChapter: (chapter: ChapterObj) => {
      _chapterHandler.addChapter(chapter);
      _momentHandler.updateMoments([]);
      return chapter;
    },
    goToChapter: (chapter: ChapterObj) => {
      _chapterHandler.goToChapter(chapter);
      _momentHandler.updateMoments([]);
      return chapter;
    },
    goToPrevChapter: () => {
      const chapter = _chapterHandler.goToPrevChapter();
      _momentHandler.updateMoments([]);
      return chapter;
    },
    goToNextChapter: () => {
      const chapter = _chapterHandler.goToNextChapter();
      _momentHandler.updateMoments([]);
      return chapter;
    },
  };

  const momentHandler: MomentHandler = {
    updateMoments: (moments: MomentObj[]) => {
      _momentHandler.updateMoments(moments);
      return moments;
    },
    updateMoment: (moment: MomentObj) => {
      _momentHandler.updateMoment(moment);
      return moment;
    },
    addMoment: (moment: MomentObj) => {
      _momentHandler.addMoment(moment);
      return moment;
    },
  };

  const context: FlowContextObj = {
    chapter,
    moment,
    moments,
    momentId,
    chapterId,
    chapters,
    chapterHandler,
    momentHandler,
  };

  return (
    <FlowContext.Provider value={context}>
      <FlowView />
    </FlowContext.Provider>
  );
}

export default insideCosmos(Page);
