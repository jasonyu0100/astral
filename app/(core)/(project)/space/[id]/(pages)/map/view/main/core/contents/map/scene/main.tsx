'use client';
import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForSceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext, useEffect, useRef } from 'react';
import { ContextForSpaceMap } from '../../../../../../controller/main';
import { SpaceMapContentsSceneConnections } from './connections/main';
import { SpaceMapSceneEmpty } from './empty/main';
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
      console.log(width, height);
      updateDivWidth(width);
      updateDivHeight(height);

      // You can perform other actions with the width and height here.
    }
  }, []); // The empty dependency array ensures this effect runs only once after the component mounts.

  return (
    <div className='relative h-full w-full py-[2rem] pl-[2rem] pr-[6rem]'>
      {visibleIdeas.length === 0 && <SpaceMapSceneEmpty />}
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
