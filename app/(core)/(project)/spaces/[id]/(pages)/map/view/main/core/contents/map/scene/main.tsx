'use client';
import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForSceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext, useEffect, useRef } from 'react';
import { ContextForSpacesMap } from '../../../../../../controller/main';
import { SpacesMapContentsSceneConnections } from './connections/main';
import { SpacesMapSceneEmpty } from './empty/main';
import { SpacesMapMovableIdea } from './idea/main';
import { SpacesMapMovable } from './moveable/main';

export function SpacesMapScene() {
  const ideaListController = useContext(ContextForSceneIdeaList);
  const {
    actions: { updateSelectedIdeas, updateDivHeight, updateDivWidth },
  } = useContext(ContextForSpacesMap);
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
    <div className='relative h-full w-full py-[2rem] pl-[8rem] pr-[2rem]'>
      {visibleIdeas.length === 0 && <SpacesMapSceneEmpty />}
      <div
        className='relative z-10 h-full w-full'
        onClick={() => updateSelectedIdeas([])}
        ref={ref}
      >
        {visibleIdeas.map((idea, index) => (
          <ContextForIndexable.Provider value={index}>
            <ContextForSceneIdeaObj.Provider value={idea}>
              <SpacesMapMovable key={idea.id}>
                <SpacesMapMovableIdea />
              </SpacesMapMovable>
            </ContextForSceneIdeaObj.Provider>
          </ContextForIndexable.Provider>
        ))}
        <SpacesMapContentsSceneConnections />
      </div>
    </div>
  );
}
