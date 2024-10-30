import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import { PublicSpacePageComments } from './comments/main';
import { PublicSpaceDescription } from './description/main';
import { PublicSpacePost } from './post/main';

export function PublicSpaceChapters() {
  const postListController = useContext(ContextForUserPostListFromChapter);
  return (
    <>
      <GlassWindowFrame
        className='w-full flex-shrink-0'
        roundedFx={roundedFx['rounded']}
      >
        <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] p-[2rem]'>
          <PublicSpaceDescription />
          <GlassWindowFrame
            className='w-full flex-shrink-0'
            roundedFx={roundedFx['rounded']}
            borderFx={borderFx['border-around']}
          >
            <GlassWindowContents className='flex h-full w-full flex-col p-[1rem]'>
              {postListController.state?.objs.length === 0 && (
                <div className='flex h-[400px] w-full items-center justify-center'>
                  <p className='text-3xl font-black text-slate-300'>NO POST</p>
                </div>
              )}
              {postListController.state?.objs.length > 0 && <PublicSpacePost />}
            </GlassWindowContents>
          </GlassWindowFrame>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
      <HorizontalDivider />
      <GlassWindowFrame
        className='w-full flex-shrink-0'
        roundedFx={roundedFx['rounded']}
      >
        <GlassWindowContents className='flex h-full w-full flex-col'>
          <PublicSpacePageComments />
        </GlassWindowContents>
      </GlassWindowFrame>
    </>
  );
}
