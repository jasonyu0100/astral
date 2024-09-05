'use client';
import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForSceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext, useEffect, useRef } from 'react';
import { ContextForSpaceMap } from '../../../../../controller/map/main';
import { SpaceMapContentsSceneConnections } from './connections/main';
import { SpaceMapMovableIdea } from './idea/main';
import { SpaceMapMovable } from './moveable/main';

export function SpaceMapScene() {
  const ideaListController = useContext(ContextForSceneIdeaList);
  const {
    actions: { updateSelectedIdeas, updateDivHeight, updateDivWidth },
  } = useContext(ContextForSpaceMap);
  const visibleIdeas = ideaListController.state.objs.filter(
    (idea) => idea.visible,
  );
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const width = ref.current.offsetWidth;
      const height = ref.current.offsetHeight;
      updateDivWidth(width);
      updateDivHeight(height);

      // You can perform other actions with the width and height here.
    }
  }, []); // The empty dependency array ensures this effect runs only once after the component mounts.

  return (
    <div className='relative h-full w-full px-[6rem] py-[2rem]'>
      {visibleIdeas.length === 0 && (
        <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center'>
          <p className='text-8xl font-black uppercase text-slate-500'>
            No ideas
          </p>
        </div>
      )}
      <div
        className='relative z-10 h-full w-full'
        onClick={() => updateSelectedIdeas([])}
        ref={ref}
      >
        {visibleIdeas.map((idea, index) => (
          <ContextForIndexable.Provider value={index}>
            <ContextForSceneIdeaObj.Provider value={idea}>
              <SpaceMapMovable key={idea.id}>
                <SpaceMapMovableIdea />
              </SpaceMapMovable>
            </ContextForSceneIdeaObj.Provider>
          </ContextForIndexable.Provider>
        ))}
        <SpaceMapContentsSceneConnections />
      </div>
    </div>
  );
}
