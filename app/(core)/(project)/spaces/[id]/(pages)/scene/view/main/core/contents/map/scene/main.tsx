'use client';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForSceneIdeaList } from '@/server/controller/idea/list';
import { ContextForIdeaObj } from '@/server/model/idea/main';
import { useContext, useEffect, useRef } from 'react';
import { ContextForSpacesScene } from '../../../../../../controller/main';
import { SpacesSceneContentsSceneConnections } from './connections/main';
import { SpacesSceneSceneEmpty } from './empty/main';
import { SpacesSceneMovableIdea } from './idea/main';
import { SpacesSceneMovable } from './moveable/main';

export function SpacesSceneScene() {
  const ideaListController = useContext(ContextForSceneIdeaList);
  const spacesSceneController = useContext(ContextForSpacesScene);
  const visibleIdeas = ideaListController.state.objs.filter(
    (idea) => idea.visible,
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const width = ref.current.offsetWidth;
      const height = ref.current.offsetHeight;
      spacesSceneController.actions.updateDivWidth(width);
      spacesSceneController.actions.updateDivHeight(height);

      // You can perform other actions with the width and height here.
    }
  }, []); // The empty dependency array ensures this effect runs only once after the component mounts.

  return (
    <div className='relative h-full w-full' ref={ref}>
      {visibleIdeas.length === 0 ? (
        <SpacesSceneSceneEmpty />
      ) : (
        <>
          <div
            className='relative z-10 h-full w-full cursor-pointer'
            onClick={() =>
              spacesSceneController.actions.updateSelectedIdeas([])
            }
          >
            {visibleIdeas.map((idea, index) => (
              <ContextForIndexable.Provider value={index}>
                <ContextForIdeaObj.Provider value={idea}>
                  <SpacesSceneMovable key={idea.id}>
                    <SpacesSceneMovableIdea />
                  </SpacesSceneMovable>
                </ContextForIdeaObj.Provider>
              </ContextForIndexable.Provider>
            ))}
            <SpacesSceneContentsSceneConnections />
          </div>
        </>
      )}
    </div>
  );
}
