'use client';
import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { ContextForIdeaObj } from '@/architecture/model/idea/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext, useEffect, useRef } from 'react';
import { ContextForSpaceSpace } from '../../../../../../controller/main';
import { SpaceSpaceContentsSceneConnections } from './connections/main';
import { SpaceSpaceMovableIdea } from './idea/main';
import { SpaceSpaceMovable } from './moveable/main';

export function SpaceSpaceScene() {
  const ideaListController = useContext(ContextForSceneIdeaList);
  const spaceSpaceController = useContext(ContextForSpaceSpace);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        const width = ref.current.offsetWidth;
        const height = ref.current.offsetHeight;
        spaceSpaceController.actions.updateDivWidth(width);
        spaceSpaceController.actions.updateDivHeight(height);
      }
    };

    // Initial dimension update
    updateDimensions();

    // Update dimensions on window resize
    window.addEventListener('resize', updateDimensions);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', updateDimensions);
  }, [spaceSpaceController.actions]); // Ensure the effect re-runs if actions change

  return (
    <div className='relative h-full w-full' ref={ref}>
      <div
        className='relative z-10 h-full w-full cursor-pointer'
        onClick={() => spaceSpaceController.actions.updateSelectedIdeas([])}
      >
        {ideaListController.state.objs.map((idea, index) => (
          <ContextForIndexable.Provider key={idea.id} value={index}>
            <ContextForIdeaObj.Provider value={idea}>
              <SpaceSpaceMovable>
                <SpaceSpaceMovableIdea />
              </SpaceSpaceMovable>
            </ContextForIdeaObj.Provider>
          </ContextForIndexable.Provider>
        ))}
        <SpaceSpaceContentsSceneConnections />
      </div>
    </div>
  );
}
