import { ContextForIdeaSceneList } from '@/architecture/controller/scene/list';
import { ContextForIdeaSceneObj } from '@/architecture/model/scene/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralMoreVertIcon } from '@/icons/more-vert/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForScrollToHorizontalIndex } from '@/logic/controller/scroll-to-horizontal-index/main';
import { glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import { ContextForSpacesIdeasModals } from '../../../../../modal/controller/main';

export function SpacesIdeasRowElement() {
  const index = useContext(ContextForIndexable);
  const scene = useContext(ContextForIdeaSceneObj);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const active = scene.id === sceneListController.state.objId;
  const controllerForScrollToCursor = useContext(
    ContextForScrollToHorizontalIndex,
  );
  const spacesSpaceModalsController = useContext(ContextForSpacesIdeasModals);

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
          sceneListController.actions.stateActions.select(scene);
          controllerForScrollToCursor.scrollToHorizontalIndex(index);
        }}
      >
        <p
          className={`w-full whitespace-nowrap font-bold ${active ? 'text-slate-300' : 'text-slate-400'}`}
        >
          {index + 1}. {scene.title || 'Untitled'}
        </p>
        <AstralMoreVertIcon
          onClick={() => {
            spacesSpaceModalsController.editSceneController.open();
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
