import { ContextForIdeaSceneList } from '@/(server)/controller/scene/list';
import { ContextForIdeaSceneObj } from '@/(server)/model/scene/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForScrollToHorizontalIndex } from '@/logic/controller/scroll-to-horizontal-index/main';
import { glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';

export function SpacesMapRowElement() {
  const index = useContext(ContextForIndexable);
  const scene = useContext(ContextForIdeaSceneObj);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const active = scene.id === sceneListController.state.objId;
  const controllerForScrollToCursor = useContext(
    ContextForScrollToHorizontalIndex,
  );

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
          sceneListController.actions.stateActions.select(scene);
          controllerForScrollToCursor.scrollToHorizontalIndex(index);
        }}
      >
        <p
          className={`w-full whitespace-nowrap font-bold ${active ? 'text-slate-300' : 'text-slate-500'}`}
        >
          {index + 1}. {scene.title}
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
