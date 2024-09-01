import { ContextForSceneIdeaList } from '@/(server)/controller/space/chapter/scene/idea/list';
import { ContextForSceneIdeaObj } from '@/(server)/model/space/chapter/scene/idea/main';
import { useContext } from 'react';
import { SpaceJourneySidebarIdeasListBack } from './back/main';
import { SpaceJourneySidebarIdeasListItem } from './item/main';

export function SpaceJourneySidebarIdeasList() {
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div className='flex flex-col space-y-[1rem] p-[1rem]'>
        <div className='flex flex-col space-y-[1rem]'>
          <SpaceJourneySidebarIdeasListBack />
          {ideaListController.state.more.queryResults.map((idea) => (
            <ContextForSceneIdeaObj.Provider value={idea}>
              <SpaceJourneySidebarIdeasListItem />
            </ContextForSceneIdeaObj.Provider>
          ))}
        </div>
      </div>
    </div>
  );
}
