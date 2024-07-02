import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { ContextForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import {
  ChapterSessionUpdateVariant,
  ContextForChapterSessionUpdateObj,
} from '@/(server)/(model)/space/chapter/session/update/main';
import { ChapterSessionUpdateObj } from '@/graphql/API';
import { useContext } from 'react';
import { SpaceProgressUpdateFormUpdate } from '../action/update/main';
import { SpaceProgressUpdateFormDetails } from './details/main';
import { SpaceProgressUpdatePreviewChapter } from './preview/chapter/main';
import { SpaceProgressUpdatePreviewChat } from './preview/chat/main';
import { SpaceProgressUpdatePreviewConversation } from './preview/conversation/main';
import { SpaceProgressUpdatePreviewIdea } from './preview/idea/main';
import { SpaceProgressUpdatePreviewScene } from './preview/scene/main';
import { SpaceProgressUpdatePreviewVerse } from './preview/verse/main';

export function SpaceProgressUpdateFormContents() {
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
          {current.variant === ChapterSessionUpdateVariant.VERSE && (
            <SpaceProgressUpdatePreviewVerse />
          )}
          {current.variant === ChapterSessionUpdateVariant.CHAPTER && (
            <SpaceProgressUpdatePreviewChapter />
          )}
          {current.variant === ChapterSessionUpdateVariant.CHAT && (
            <SpaceProgressUpdatePreviewChat />
          )}
          {current.variant === ChapterSessionUpdateVariant.CONVERSATION && (
            <SpaceProgressUpdatePreviewConversation />
          )}
          {current.variant === ChapterSessionUpdateVariant.IDEA && (
            <SpaceProgressUpdatePreviewIdea />
          )}
          {current.variant === ChapterSessionUpdateVariant.SCENE && (
            <SpaceProgressUpdatePreviewScene />
          )}
        </ContextForChapterSessionUpdateObj.Provider>
        <SpaceProgressUpdateFormDetails />
        <SpaceProgressUpdateFormUpdate />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}
