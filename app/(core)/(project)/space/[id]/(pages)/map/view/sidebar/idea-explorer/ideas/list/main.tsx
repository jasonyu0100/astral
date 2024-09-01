import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForSceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { useContext } from 'react';
import { SpaceMapSidebarIdeasBack } from './back/main';
import { SpaceMapSidebarIdeasListItem } from './item/main';

export function SpaceMapSidebarIdeasList() {
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div
      className='flex flex-col overflow-auto p-[1rem]'
      style={{ height: '100%', width: '100%' }}
    >
      <div className='flex flex-col space-y-[1rem]'>
        <SpaceMapSidebarIdeasBack />
        {ideaListController.state.more.queryResults.map((idea) => (
          <ContextForSceneIdeaObj.Provider value={idea}>
            <SpaceMapSidebarIdeasListItem />
          </ContextForSceneIdeaObj.Provider>
        ))}
      </div>
    </div>
  );
}
