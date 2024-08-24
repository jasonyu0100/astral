'use client';
import { ContextForIndexable } from '@/(logic)/contexts/indexable/main';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { useContext } from 'react';
import { SpaceMapContentsSceneConnections } from './connections/main';
import { SpaceMapMovableIdea } from './idea/main';
import { SpaceMapMovable } from './moveable/main';

export function SpaceMapContentsScene() {
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='relative h-full w-full'>
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
