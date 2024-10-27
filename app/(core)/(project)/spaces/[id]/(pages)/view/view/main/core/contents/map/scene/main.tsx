'use client';
import { ContextForSpacesView } from '@/(core)/(project)/spaces/[id]/(pages)/view/controller/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForSceneIdeaList } from '@/server/controller/idea/list';
import { ContextForIdeaObj } from '@/server/model/idea/main';
import { useContext, useEffect, useRef } from 'react';
import { SpacesViewContentsSceneConnections } from './connections/main';
import { SpacesViewSceneEmpty } from './empty/main';
import { SpacesViewMovableIdea } from './idea/main';
import { SpacesViewMovable } from './moveable/main';

export function SpacesViewScene() {
  const ideaListController = useContext(ContextForSceneIdeaList);
  const {
    actions: { updateSelectedIdeas, updateDivHeight, updateDivWidth },
  } = useContext(ContextForSpacesView);
  const visibleIdeas = ideaListController.state.objs.filter(
    (idea) => idea.visible,
  );
  const ref = useRef<HTMLDivElement>(null);

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
    <div
      className='relative h-full w-full py-[2rem] pl-[8rem] pr-[2rem]'
      ref={ref}
    >
      {visibleIdeas.length === 0 ? (
        <SpacesViewSceneEmpty />
      ) : (
        <>
          <div
            className='relative z-10 h-full w-full cursor-pointer'
            onClick={() => updateSelectedIdeas([])}
          >
            {visibleIdeas.map((idea, index) => (
              <ContextForIndexable.Provider value={index}>
                <ContextForIdeaObj.Provider value={idea}>
                  <SpacesViewMovable key={idea.id}>
                    <SpacesViewMovableIdea />
                  </SpacesViewMovable>
                </ContextForIdeaObj.Provider>
              </ContextForIndexable.Provider>
            ))}
            <SpacesViewContentsSceneConnections />
          </div>
        </>
      )}
    </div>
  );
}
