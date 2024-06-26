'use client';
import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { ContextForSceneIdeaObj } from '@/(server)/(model)/space/chapter/scene/idea/main';
import { useContext } from 'react';
import { SpaceMapMovable } from './moveable/main';

export function SpaceMapContentsScene() {
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='container relative h-full w-full'>
      {ideaListController.state.objs.map((idea) => (
        <ContextForSceneIdeaObj.Provider value={idea}>
          <SpaceMapMovable key={idea.id} />
        </ContextForSceneIdeaObj.Provider>
      ))}
    </div>
  );
}
