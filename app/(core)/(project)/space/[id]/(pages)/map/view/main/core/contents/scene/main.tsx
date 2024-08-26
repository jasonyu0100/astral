'use client';
import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForSceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { ContextForSpaceMap } from '../../../../../controller/map/main';
import { SpaceMapContentsSceneConnections } from './connections/main';
import { SpaceMapMovableIdea } from './idea/main';
import { SpaceMapMovable } from './moveable/main';

export function SpaceMapContentsScene() {
  const ideaListController = useContext(ContextForSceneIdeaList);
  const mapController = useContext(ContextForSpaceMap);

  return (
    <div
      className='relative h-full w-full'
      onClick={() => mapController.updateSelectedIdea(null)}
    >
      {ideaListController.state.objs.map((idea, index) => (
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
