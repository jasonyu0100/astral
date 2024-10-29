'use client';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { ContextForSceneIdeaList } from '@/server/controller/idea/list';
import { ContextForIdeaObj } from '@/server/model/idea/main';
import { useContext, useEffect, useRef } from 'react';
import { ContextForSpacesScene } from '../../../../../../controller/main';
import { SpacesSceneContentsSceneConnections } from './connections/main';
import { SpacesSceneMovableIdea } from './idea/main';
import { SpacesSceneMovable } from './moveable/main';

export function SpacesSceneScene() {
  const ideaListController = useContext(ContextForSceneIdeaList);
  const spacesSceneController = useContext(ContextForSpacesScene);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        const width = ref.current.offsetWidth;
        const height = ref.current.offsetHeight;
        spacesSceneController.actions.updateDivWidth(width);
        spacesSceneController.actions.updateDivHeight(height);
      }
    };

    // Initial dimension update
    updateDimensions();

    // Update dimensions on window resize
    window.addEventListener('resize', updateDimensions);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', updateDimensions);
  }, [spacesSceneController.actions]); // Ensure the effect re-runs if actions change

  return (
    <div className='relative h-full w-full' ref={ref}>
      <div
        className='relative z-10 h-full w-full cursor-pointer'
        onClick={() => spacesSceneController.actions.updateSelectedIdeas([])}
      >
        {ideaListController.state.objs.map((idea, index) => (
          <ContextForIndexable.Provider key={idea.id} value={index}>
            <ContextForIdeaObj.Provider value={idea}>
              <SpacesSceneMovable>
                <SpacesSceneMovableIdea />
              </SpacesSceneMovable>
            </ContextForIdeaObj.Provider>
          </ContextForIndexable.Provider>
        ))}
        <SpacesSceneContentsSceneConnections />
      </div>
    </div>
  );
}
