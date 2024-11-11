'use client';
import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { ContextForIdeaObj } from '@/architecture/model/idea/main';
import { ElementIdea } from '@/components/element/idea/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext, useEffect, useRef } from 'react';
import { ContextForSpacesSpace } from '../../../../../../controller/main';
import { ContextForSpacesSpaceModals } from '../../../../../../modal/controller/main';
import { SpacesSpaceContentsSceneConnections } from './connections/main';
import { SpacesSpaceMovable } from './moveable/main';
import { SpacesSpaceTextIdea } from './override/text/main';

export function SpacesSpaceScene() {
  const ideaListController = useContext(ContextForSceneIdeaList);
  const spacesSpaceController = useContext(ContextForSpacesSpace);
  const spacesSpaceModalsController = useContext(ContextForSpacesSpaceModals);
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
    <div
      className='relative z-10 h-full w-full cursor-pointer overflow-hidden'
      ref={ref}
      style={{ zoom: spacesSpaceController.state.zoom }}
      onClick={() => spacesSpaceController.actions.updateSelectedIdeas([])}
      onDoubleClick={() => {
        spacesSpaceModalsController.addStickyIdeaController.open();
      }}
    >
      <p className=' absolute h-full w-[800px] p-[3rem] text-2xl text-slate-300'></p>
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
  );
}
