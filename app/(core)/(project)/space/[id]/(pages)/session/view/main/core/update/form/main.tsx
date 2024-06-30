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
import { borderFx, glassFx } from '@/(style)/data';
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
    ContextForSessionUpdateOfChapterList,
  );
  const current =
    sessionUpdateListController.state.currentObj ||
    ({} as ChapterSessionUpdateObj);

  return (
    <GlassWindowFrame
      className='h-full max-w-[800px] flex-grow  p-[2rem]'
      borderFx={`${borderFx['border-l']} ${borderFx['border-r']}`}
    >
      <GlassWindowContents className='overflow-auto'>
        <div className='h-full w-full pr-[2rem]'>
          <div className='flex h-full w-full flex-col space-y-[2rem]'>
            <SpaceSessionUpdateFormHeader />
            <div className='flex flex-col space-y-[1rem]'>
              <HorizontalDivider />
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
                {current.variant ===
                  ChapterSessionUpdateVariant.CONVERSATION && (
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
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
