'use client';
import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForSceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { ContextForSpaceMap } from '../../../../../controller/map/main';
import { SpaceMapContentsSceneConnections } from './connections/main';
import { SpaceMapMovableIdea } from './idea/main';
import { SpaceMapMovable } from './moveable/main';

export function SpaceMapScene() {
  const ideaListController = useContext(ContextForSceneIdeaList);
  const {
    actions: { updateSelectedIdeas },
  } = useContext(ContextForSpaceMap);
  const visibleIdeas = ideaListController.state.objs.filter(
    (idea) => idea.visible,
  );

  return (
    <div
      className='relative z-10 h-full w-full'
      onClick={() => updateSelectedIdeas([])}
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
  );
}
