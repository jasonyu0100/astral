import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForSessionUpdateOfChapterList } from '@/(server)/(controller)/space/chapter/session/update/chapter-list';
import {
  ChapterSessionUpdateObj,
  ChapterSessionUpdateVariant,
  ContextForChapterSessionUpdateObj,
} from '@/(server)/(model)/space/chapter/session/update/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceSessionsUpdateFormUpdate } from './action/update/main';
import { SpaceSessionsUpdateFormDetails } from './details/main';
import { SpaceSessionsUpdateFormHeader } from './header/main';
import { SpaceSessionsUpdatePreviewChapter } from './preview/chapter/main';
import { SpaceSessionsUpdatePreviewChat } from './preview/chat/main';
import { SpaceSessionsUpdatePreviewConversation } from './preview/conversation/main';
import { SpaceSessionsUpdatePreviewIdea } from './preview/idea/main';
import { SpaceSessionsUpdatePreviewScene } from './preview/scene/main';
import { SpaceSessionsUpdatePreviewVerse } from './preview/verse/main';

export function SpaceSessionsUpdateForm() {
  const sessionUpdateListController = useContext(
    ContextForSessionUpdateOfChapterList,
  );
  const current =
    sessionUpdateListController.state.currentObj ||
    ({} as ChapterSessionUpdateObj);

  return (
    <GlassWindowFrame
      className='max-w-[800px] flex-grow  p-[2rem]'
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents className='overflow-auto'>
        <div className='h-full w-full pr-[2rem]'>
          <div className='flex h-full w-full flex-col space-y-[2rem]'>
            <SpaceSessionsUpdateFormHeader />
            <div className='flex flex-col space-y-[1rem]'>
              <HorizontalDivider />
              <ContextForChapterSessionUpdateObj.Provider value={current}>
                {current.variant === ChapterSessionUpdateVariant.VERSE && (
                  <SpaceSessionsUpdatePreviewVerse />
                )}
                {current.variant === ChapterSessionUpdateVariant.CHAPTER && (
                  <SpaceSessionsUpdatePreviewChapter />
                )}
                {current.variant === ChapterSessionUpdateVariant.CHAT && (
                  <SpaceSessionsUpdatePreviewChat />
                )}
                {current.variant ===
                  ChapterSessionUpdateVariant.CONVERSATION && (
                  <SpaceSessionsUpdatePreviewConversation />
                )}
                {current.variant === ChapterSessionUpdateVariant.IDEA && (
                  <SpaceSessionsUpdatePreviewIdea />
                )}
                {current.variant === ChapterSessionUpdateVariant.SCENE && (
                  <SpaceSessionsUpdatePreviewScene />
                )}
              </ContextForChapterSessionUpdateObj.Provider>
              <HorizontalDivider />
            </div>
            <SpaceSessionsUpdateFormDetails />
            <SpaceSessionsUpdateFormUpdate />
          </div>
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
