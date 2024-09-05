import { ContextForSessionUpdateList } from '@/(server)/controller/space/chapter/session/update/list-from-session';
import {
  ChapterSessionUpdateObj,
  ChapterSessionUpdateVariant,
  ContextForChapterSessionUpdateObj,
} from '@/(server)/model/space/chapter/session/update/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import { SpaceSessionUpdatePreviewChapter } from './preview/chapter/main';
import { SpaceSessionUpdatePreviewConversation } from './preview/conversation/main';
import { SpaceSessionUpdatePreviewIdea } from './preview/idea/main';
import { SpaceSessionUpdatePreviewReview } from './preview/review/main';
import { SpaceSessionUpdatePreviewScene } from './preview/scene/main';

export function SpaceSessionViewUpdateForm() {
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
              {current.variant === ChapterSessionUpdateVariant.SPOTLIGHT && (
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
          </div>
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
