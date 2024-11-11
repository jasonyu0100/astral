import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForUserPostObj } from '@/architecture/model/post/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralMoreVertIcon } from '@/icons/more-vert/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForScrollToHorizontalIndex } from '@/logic/controller/scroll-to-horizontal-index/main';
import { glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import { ContextForSpacesPublic } from '../../../../../controller/main';
import { ContextForSpacesPublicModals } from '../../../../../modal/controller/main';

export function SpacesPublicRowElement() {
  const index = useContext(ContextForIndexable);
  const post = useContext(ContextForUserPostObj);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const active = post.id === postListController.state.objId;
  const controllerForScrollToCursor = useContext(
    ContextForScrollToHorizontalIndex,
  );
  const spacesPublicController = useContext(ContextForSpacesPublic);
  const spacesPublicModalsController = useContext(ContextForSpacesPublicModals);

  return (
    <GlassWindowFrame
      className={ctwn('z-10 h-[3.5rem] flex-shrink-0', {
        'animate-pulse-slow': active,
      })}
      roundedFx={roundedFx['rounded-full']}
    >
      <GlassWindowContents
        className='flex h-full w-full flex-row items-center justify-between space-x-[1rem] px-[1rem]'
        onClick={() => {
          postListController.actions.stateActions.select(post);
          controllerForScrollToCursor.scrollToHorizontalIndex(index);
        }}
      >
        <p
          className={`w-full whitespace-nowrap font-bold ${active ? 'text-slate-300' : 'text-slate-400'}`}
        >
          {index + 1}. {post.title || 'Untitled'}
        </p>
        <AstralMoreVertIcon
          onClick={() => {
            spacesPublicModalsController.editPostController.open();
          }}
        />
      </GlassWindowContents>
      {!active ? (
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      ) : (
        <GlassWindowPane glassFx={glassFx['glass-20']} />
      )}
    </GlassWindowFrame>
  );
}
