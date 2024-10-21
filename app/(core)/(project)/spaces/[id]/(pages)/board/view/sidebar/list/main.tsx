import { ContextForTaskLinkList } from '@/(server)/controller/way/link/list';
import { ElementVariant } from '@/(server)/model/elements/main';
import { ContextForTaskLinkObj } from '@/(server)/model/task/link/main';
import { ElementLink } from '@/ui/element/link/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import {
  ContextForSpacesBoard,
  SpacesBoardSidebarMode,
} from '../../../controller/main';
import { SpacesBoardSidebarAddFile } from './add/file/main';
import { SPaceJourneySidebarAddText } from './add/text/main';
import { SpacesLinkTextIdea } from './override/text/main';

export function SpacesBoardSidebarLinkList() {
  const {
    state: { sidebarMode },
  } = useContext(ContextForSpacesBoard);
  const linkListController = useContext(ContextForTaskLinkList);

  return (
    <div
      className='flex flex-col overflow-auto p-[1rem]'
      style={{ height: '100%', width: '100%' }}
    >
      <div className='flex flex-col space-y-[1rem]'>
        {linkListController.state.objs
          .filter((obj) =>
            sidebarMode === SpacesBoardSidebarMode.NOTES
              ? obj.variant === ElementVariant.TEXT
              : obj.variant === ElementVariant.URL ||
                obj.variant === ElementVariant.FILE,
          )
          .map((link) => (
            <ContextForTaskLinkObj.Provider value={link}>
              <ElementLink textOveride={<SpacesLinkTextIdea />} />
            </ContextForTaskLinkObj.Provider>
          ))}
        <HorizontalDivider />
        {sidebarMode === SpacesBoardSidebarMode.LINKS && (
          <SpacesBoardSidebarAddFile />
        )}

        {sidebarMode === SpacesBoardSidebarMode.NOTES && (
          <SPaceJourneySidebarAddText />
        )}
      </div>
    </div>
  );
}
