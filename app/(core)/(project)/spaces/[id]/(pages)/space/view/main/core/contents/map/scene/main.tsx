'use client';
import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { ContextForIdeaObj } from '@/architecture/model/idea/main';
import { ElementIdea } from '@/components/element/idea/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext, useEffect, useRef } from 'react';
import { ContextForSpacesSpace } from '../../../../../../controller/main';
import { SpacesSpaceContentsSceneConnections } from './connections/main';
import { SpacesSpaceMovable } from './moveable/main';
import { SpacesSpaceTextIdea } from './override/text/main';

export function SpacesSpaceScene() {
  const ideaListController = useContext(ContextForSceneIdeaList);
  const spacesSpaceController = useContext(ContextForSpacesSpace);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        const width = ref.current.offsetWidth;
        const height = ref.current.offsetHeight;
        spacesSpaceController.actions.updateDivWidth(width);
        spacesSpaceController.actions.updateDivHeight(height);
      }
    };

    // Initial dimension update
    updateDimensions();

    // Update dimensions on window resize
    window.addEventListener('resize', updateDimensions);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', updateDimensions);
  }, [spacesSpaceController.actions]); // Ensure the effect re-runs if actions change

  return (
    <div className='relative h-full w-full' ref={ref}>
      <div
        className='relative z-10 h-full w-full cursor-pointer'
        style={{ zoom: spacesSpaceController.state.zoom }}
        onClick={() => spacesSpaceController.actions.updateSelectedIdeas([])}
      >
        {ideaListController.state.objs.map((idea, index) => (
          <ContextForIndexable.Provider key={idea.id} value={index}>
            <ContextForIdeaObj.Provider value={idea}>
              <SpacesSpaceMovable>
                <ElementIdea textOveride={<SpacesSpaceTextIdea />} />
              </SpacesSpaceMovable>
            </ContextForIdeaObj.Provider>
          </ContextForIndexable.Provider>
        ))}
        <SpacesSpaceContentsSceneConnections />
      </div>
    </div>
  );
}
