import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForSessionUpdateList } from '@/(server)/(controller)/space/chapter/session/update/list';
import {
  ChapterSessionUpdateObj,
  ChapterSessionUpdateVariant,
  ContextForChapterSessionUpdateObj,
} from '@/(server)/(model)/space/chapter/session/update/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceProgressUpdatePreviewChapter } from './preview/chapter/main';
import { SpaceProgressUpdatePreviewChat } from './preview/chat/main';
import { SpaceProgressUpdatePreviewConversation } from './preview/conversation/main';
import { SpaceProgressUpdatePreviewIdea } from './preview/idea/main';
import { SpaceProgressUpdatePreviewScene } from './preview/scene/main';
import { SpaceProgressUpdatePreviewVerse } from './preview/verse/main';

export function SpaceProgressViewUpdateForm() {
  const sessionUpdateListController = useContext(ContextForSessionUpdateList);

  const current =
    sessionUpdateListController.state.currentObj ||
    ({} as ChapterSessionUpdateObj);

  return (
    <GlassWindowFrame
      className='h-full max-h-[600px] max-w-[800px] flex-grow p-[1rem]'
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents className='h-full w-full overflow-auto pr-[2rem]'>
        <div className='flex h-full w-full flex-col space-y-[2rem]'>
          <div className='flex flex-col space-y-[1rem]'>
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
          </div>
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
