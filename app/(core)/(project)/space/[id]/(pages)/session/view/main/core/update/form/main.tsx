import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForChapterSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import {
  ChapterSessionUpdateObj,
  ChapterSessionUpdateVariant,
  ContextForChapterSessionUpdateObj,
} from '@/(server)/(model)/space/chapter/session/update/main';
import { useContext } from 'react';
import { SpaceSessionUpdateFormUpdate } from './action/update/main';
import { SpaceSessionUpdateFormDetails } from './details/main';
import { SpaceSessionUpdateFormHeader } from './header/main';
import { SpaceSessionUpdatePreviewChapter } from './preview/chapter/main';
import { SpaceSessionUpdatePreviewChat } from './preview/chat/main';
import { SpaceSessionUpdatePreviewConversation } from './preview/conversation/main';
import { SpaceSessionUpdatePreviewIdea } from './preview/idea/main';
import { SpaceSessionUpdatePreviewScene } from './preview/scene/main';
import { SpaceSessionUpdatePreviewVerse } from './preview/verse/main';

export function SpaceSessionUpdateForm() {
  const sessionUpdateListController = useContext(
    ContextForChapterSessionUpdateList,
  );
  const current =
    sessionUpdateListController.state.currentObj ||
    ({} as ChapterSessionUpdateObj);

  return (
    <div className='h-full w-full max-w-[800px] overflow-auto border-l-[1px] border-r-[1px] border-slate-500 border-opacity-30'>
      <div className='h-full w-full px-[4rem]'>
        <div className='flex h-full w-full flex-col space-y-[2rem]'>
          <SpaceSessionUpdateFormHeader />
          <div className='flex flex-col space-y-[1rem]'>
            <ContextForChapterSessionUpdateObj.Provider value={current}>
              {current.variant === ChapterSessionUpdateVariant.VERSE && (
                <SpaceSessionUpdatePreviewVerse />
              )}
              {current.variant === ChapterSessionUpdateVariant.CHAPTER && (
                <SpaceSessionUpdatePreviewChapter />
              )}
              {current.variant === ChapterSessionUpdateVariant.CHAT && (
                <SpaceSessionUpdatePreviewChat />
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
            <HorizontalDivider />
          </div>
          <SpaceSessionUpdateFormDetails />
          <SpaceSessionUpdateFormUpdate />
        </div>
      </div>
    </div>
  );
}
