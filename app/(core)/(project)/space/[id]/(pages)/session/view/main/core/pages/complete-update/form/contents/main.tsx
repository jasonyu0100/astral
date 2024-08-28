import { ContextForSessionUpdateOfChapterList } from '@/(server)/controller/space/chapter/session/update/chapter-list';
import {
  ChapterSessionUpdateVariant,
  ContextForChapterSessionUpdateObj,
} from '@/(server)/model/space/chapter/session/update/main';
import { ChapterSessionUpdateObj } from '@/graphql/API';
import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import { SpaceSessionUpdateFormUpdate } from '../action/update/main';
import { SpaceSessionUpdateFormDetails } from './details/main';
import { SpaceSessionUpdatePreviewChapter } from './preview/chapter/main';
import { SpaceSessionUpdatePreviewConversation } from './preview/conversation/main';
import { SpaceSessionUpdatePreviewIdea } from './preview/idea/main';
import { SpaceSessionUpdatePreviewReview } from './preview/review/main';
import { SpaceSessionUpdatePreviewScene } from './preview/scene/main';

export function SpaceSessionUpdateFormContents() {
  const sessionUpdateListController = useContext(
    ContextForSessionUpdateOfChapterList,
  );
  const current =
    sessionUpdateListController.state.currentObj ||
    ({} as ChapterSessionUpdateObj);

  return (
    <GlassWindowFrame className='h-full overflow-auto'>
      <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
        <ContextForChapterSessionUpdateObj.Provider value={current}>
          {current.variant === ChapterSessionUpdateVariant.REVIEW && (
            <SpaceSessionUpdatePreviewReview />
          )}
          {current.variant === ChapterSessionUpdateVariant.CHAPTER && (
            <SpaceSessionUpdatePreviewChapter />
          )}
          {current.variant === ChapterSessionUpdateVariant.CONVERSATION && (
            <SpaceSessionUpdatePreviewConversation />
          )}
          {current.variant === ChapterSessionUpdateVariant.IDEA && (
            <SpaceSessionUpdatePreviewIdea />
          )}
          {current.variant === ChapterSessionUpdateVariant.SCENE && (
            <SpaceSessionUpdatePreviewScene />
          )}
        </ContextForChapterSessionUpdateObj.Provider>
        <SpaceSessionUpdateFormDetails />
        <SpaceSessionUpdateFormUpdate />
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
