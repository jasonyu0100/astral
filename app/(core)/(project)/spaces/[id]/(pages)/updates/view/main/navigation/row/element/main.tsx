import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForScrollToHorizontalIndex } from '@/logic/controller/scroll-to-horizontal-index/main';
import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForUserPostObj } from '@/server/model/post/main';
import { glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesUpdates,
  SpacesUpdatesFeedView,
} from '../../../../../controller/main';

export function SpacesUpdatesRowElement() {
  const index = useContext(ContextForIndexable);
  const post = useContext(ContextForUserPostObj);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const active = post.id === postListController.state.objId;
  const controllerForScrollToCursor = useContext(
    ContextForScrollToHorizontalIndex,
  );
  const spacesUpdatesController = useContext(ContextForSpacesUpdates);

  return (
    <GlassWindowFrame
      className={ctwn('z-10 h-[3.5rem] min-w-[250px]', {
        'animate-pulse-slow': active,
      })}
      roundedFx={roundedFx['rounded-full']}
    >
      <GlassWindowContents
        className='z-10 flex h-full w-full items-center px-[1rem]'
        onClick={() => {
          postListController.actions.stateActions.select(post);
          controllerForScrollToCursor.scrollToHorizontalIndex(index);
          spacesUpdatesController.actions.updateFeedView(
            SpacesUpdatesFeedView.POST,
          );
        }}
      >
        <p
          className={`w-full whitespace-nowrap font-bold ${active ? 'text-slate-300' : 'text-slate-500'}`}
        >
          {index + 1}. {post.title || 'Untitled'}
        </p>
      </GlassWindowContents>
      {!active ? (
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      ) : (
        <GlassWindowPane glassFx={glassFx['glass-20']} />
      )}
    </GlassWindowFrame>
  );
}
