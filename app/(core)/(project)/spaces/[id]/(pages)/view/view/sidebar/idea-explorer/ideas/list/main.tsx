import { ContextForSceneIdeaList } from '@/(server)/controller/idea/list';
import { ContextForIdeaObj } from '@/(server)/model/idea/main';
import { useContext } from 'react';
import { SpacesViewSidebarIdeasBack } from './back/main';
import { SpacesViewSidebarIdeasListItem } from './item/main';

export function SpacesViewSidebarIdeasList() {
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div
      className='flex flex-col overflow-auto p-[1rem]'
      style={{ height: '100%', width: '100%' }}
    >
      <div className='flex flex-col space-y-[1rem]'>
        <SpacesViewSidebarIdeasBack />
        {ideaListController.state.more.queryResults.map((idea) => (
          <ContextForIdeaObj.Provider value={idea}>
            <SpacesViewSidebarIdeasListItem />
          </ContextForIdeaObj.Provider>
        ))}
      </div>
    </div>
  );
}
