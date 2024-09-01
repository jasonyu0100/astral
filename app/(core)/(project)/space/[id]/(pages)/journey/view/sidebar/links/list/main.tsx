import { ContextForLogLinkList } from '@/(server)/controller/space/chapter/log/link/list';
import { ContextForLogLinkObj } from '@/(server)/model/space/chapter/log/link/main';
import { useContext } from 'react';
import { SpaceJourneySidebarIdeasListBack } from './back/main';
import { SpaceJourneySidebarLinksListItem } from './item/main';

export function SpaceJourneySidebarLinksList() {
  const linkListController = useContext(ContextForLogLinkList);

  return (
    <div
      className='flex flex-col space-y-[1rem] overflow-auto p-[1rem]'
      style={{ height: '100%', width: '100%' }}
    >
      <div className='flex flex-col space-y-[1rem]'>
        <SpaceJourneySidebarIdeasListBack />
        {linkListController.state.more.queryResults.map((log) => (
          <ContextForLogLinkObj.Provider value={log}>
            <SpaceJourneySidebarLinksListItem />
          </ContextForLogLinkObj.Provider>
        ))}
      </div>
    </div>
  );
}
