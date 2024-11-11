import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForUserPostObj } from '@/architecture/model/post/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';

export function SpacesPublicSidebarItem() {
  const post = useContext(ContextForUserPostObj);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const selected = postListController.actions.stateActions.checkActive(post);

  return (
    <>
      {selected ? (
        <GlassWindowFrame
          className='flex aspect-video w-full p-[1rem]'
          roundedFx={roundedFx['rounded']}
          borderFx={borderFx['border-around']}
        >
          <GlassWindowContents
            onClick={() => postListController.actions.stateActions.select(post)}
            className='flex h-full w-full cursor-pointer flex-row space-x-[1rem]'
          >
            <p className={'text-lg font-bold text-slate-300'}>
              {post.title || 'Untitled'}
            </p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-20']} />
        </GlassWindowFrame>
      ) : (
        <GlassWindowFrame
          className='flex aspect-video  w-full p-[1rem]'
          borderFx={borderFx['border-around']}
          roundedFx={roundedFx.rounded}
        >
          <GlassWindowContents
            onClick={() => postListController.actions.stateActions.select(post)}
            className='flex h-full w-full cursor-pointer flex-row space-x-[1rem]'
          >
            <p className={'text-lg font-bold text-slate-400'}>
              {post.title || 'Untitled'}
            </p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      )}
    </>
  );
}
