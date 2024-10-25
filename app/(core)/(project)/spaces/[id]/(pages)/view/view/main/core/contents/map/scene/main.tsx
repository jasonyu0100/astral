'use client';
import { ContextForSceneIdeaList } from '@/(server)/controller/idea/list';
import { ContextForIdeaObj } from '@/(server)/model/idea/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext, useEffect, useRef } from 'react';
import { ContextForSpacesView } from '../../../../../../controller/main';
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
    <div className='relative h-full w-full py-[2rem] pl-[8rem] pr-[2rem]'>
      {visibleIdeas.length === 0 ? (
        <SpacesViewSceneEmpty />
      ) : (
        <>
          <div
            className='relative z-10 h-full w-full'
            onClick={() => updateSelectedIdeas([])}
            ref={ref}
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
