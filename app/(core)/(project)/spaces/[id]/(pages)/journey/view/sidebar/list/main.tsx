import { ContextForLogLinkList } from '@/(server)/controller/space/chapter/log/link/list';
import { ElementVariant } from '@/(server)/model/elements/main';
import { ContextForLogLinkObj } from '@/(server)/model/space/chapter/log/link/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import {
  ContextForSpacesJourney,
  SpacesJourneySidebarMode,
} from '../../../controller/main';
import { SpacesJourneySidebarAddFile } from './add/file/main';
import { SPaceJourneySidebarAddText } from './add/text/main';
import { SpacesJourneySidebarLinksListItem } from './item/main';

export function SpacesJourneySidebarList() {
  const {
    state: { sidebarMode },
  } = useContext(ContextForSpacesJourney);
  const linkListController = useContext(ContextForLogLinkList);

  return (
    <div
      className='flex flex-col space-y-[1rem] overflow-auto p-[1rem]'
      style={{ height: '100%', width: '100%' }}
    >
      <div className='flex flex-col items-center space-y-[1rem]'>
        {linkListController.state.objs
          .filter((obj) =>
            sidebarMode === SpacesJourneySidebarMode.NOTES
              ? obj.variant === ElementVariant.TEXT
              : obj.variant === ElementVariant.URL ||
                obj.variant === ElementVariant.FILE,
          )
          .map((log) => (
            <ContextForLogLinkObj.Provider value={log}>
              <SpacesJourneySidebarLinksListItem />
            </ContextForLogLinkObj.Provider>
          ))}
        <HorizontalDivider />
        {sidebarMode === SpacesJourneySidebarMode.LINKS && (
          <SpacesJourneySidebarAddFile />
        )}

        {sidebarMode === SpacesJourneySidebarMode.NOTES && (
          <SPaceJourneySidebarAddText />
        )}
      </div>
    </div>
  );
}
