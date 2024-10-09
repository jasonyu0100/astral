import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForIdeaObj } from '@/(server)/model/idea/main';
import { useContext } from 'react';
import { SpacesMapSidebarIdeasBack } from './back/main';
import { SpacesMapSidebarIdeasListItem } from './item/main';

export function SpacesMapSidebarIdeasList() {
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div
      className='flex flex-col overflow-auto p-[1rem]'
      style={{ height: '100%', width: '100%' }}
    >
      <div className='flex flex-col space-y-[1rem]'>
        <SpacesMapSidebarIdeasBack />
        {ideaListController.state.more.queryResults.map((idea) => (
          <ContextForIdeaObj.Provider value={idea}>
            <SpacesMapSidebarIdeasListItem />
          </ContextForIdeaObj.Provider>
        ))}
      </div>
    </div>
  );
}
