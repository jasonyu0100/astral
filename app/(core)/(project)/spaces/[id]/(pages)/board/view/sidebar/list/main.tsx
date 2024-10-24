import { ContextForTaskLinkList } from '@/(server)/controller/way/link/list';
import { ContextForTaskLinkObj } from '@/(server)/model/task/link/main';
import { ElementLink } from '@/components/element/link/main';
import { useContext } from 'react';
import {
  ContextForSpacesBoard,
  SpacesBoardSidebarMode,
} from '../../../controller/main';
import { SpacesBoardSidebarChapters } from '../chapters/main';
import { SpacesBoardSidebarAddFile } from './add/file/main';
import { SpacesLinkTextIdea } from './override/text/main';

export function SpacesBoardSidebarLinkList() {
  const {
    state: { sidebarMode },
  } = useContext(ContextForSpacesBoard);
  const linkListController = useContext(ContextForTaskLinkList);

  return (
    <div
      className='flex flex-col overflow-auto'
      style={{ height: '100%', width: '100%' }}
    >
      <div className='flex flex-col space-y-[1rem]'>
        {sidebarMode === SpacesBoardSidebarMode.CHAPTERS && (
          <>
            <SpacesBoardSidebarChapters />
          </>
        )}

        {sidebarMode === SpacesBoardSidebarMode.NOTES && (
          <div className='flex flex-col space-y-[1rem] p-[1rem]'>
            {linkListController.state.objs.map((link) => (
              <ContextForTaskLinkObj.Provider value={link}>
                <ElementLink textOveride={<SpacesLinkTextIdea />} />
              </ContextForTaskLinkObj.Provider>
            ))}
            <SpacesBoardSidebarAddFile />
          </div>
        )}
      </div>
    </div>
  );
}
