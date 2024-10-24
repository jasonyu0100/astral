import { ContextForUserPostListFromChapter } from '@/(server)/controller/post/list-from-chapter';
import { ContextForUserPostObj } from '@/(server)/model/post/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';

export function SpacesFlightSidebarItem() {
  const post = useContext(ContextForUserPostObj);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const selected = postListController.actions.stateActions.checkActive(post);

  return (
    <>
      {selected ? (
        <GlassWindowFrame
          className='flex h-[5rem] w-full p-[1rem]'
          roundedFx={roundedFx['rounded']}
          borderFx={borderFx['border-around']}
        >
          <GlassWindowContents
            onClick={() => postListController.actions.stateActions.select(post)}
            className='flex h-full w-full cursor-pointer flex-row items-center space-x-[1rem]'
          >
            <p className={'text-lg font-bold text-slate-300'}>
              {post.title || 'Untitled'}
            </p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      ) : (
        <GlassWindowFrame
          className='flex h-[5rem] w-full p-[1rem]'
          borderFx={borderFx['border-b']}
        >
          <GlassWindowContents
            onClick={() => postListController.actions.stateActions.select(post)}
            className='flex h-full w-full cursor-pointer flex-row items-center space-x-[1rem]'
          >
            <p className={'text-lg font-bold text-slate-500'}>
              {post.title || 'Untitled'}
            </p>
          </GlassWindowContents>
        </GlassWindowFrame>
      )}
    </>
  );
}
