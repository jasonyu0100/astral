import { ContextForLogLinkList } from '@/(server)/controller/space/chapter/log/link/list';
import { ElementVariant } from '@/(server)/model/elements/main';
import { ContextForLogLinkObj } from '@/(server)/model/space/chapter/log/link/main';
import { AstralAddIcon } from '@/icons/add/main';
import { useContext } from 'react';
import {
  ContextForSpaceJourney,
  SpaceJourneySidebarMode,
} from '../../../../controller/main';
import { ContextForSpaceJourneyModals } from '../../../../modal/controller/main';
import { SpaceJourneySidebarLinksListItem } from './item/main';

export function SpaceJourneySidebarLinksList() {
  const {
    state: { sidebarMode },
  } = useContext(ContextForSpaceJourney);
  const modalController = useContext(ContextForSpaceJourneyModals);
  const linkListController = useContext(ContextForLogLinkList);

  return (
    <div
      className='flex flex-col space-y-[1rem] overflow-auto p-[1rem]'
      style={{ height: '100%', width: '100%' }}
    >
      <div className='flex flex-col items-center space-y-[1rem]'>
        {linkListController.state.objs
          .filter((obj) =>
            sidebarMode === SpaceJourneySidebarMode.NOTES
              ? obj.variant === ElementVariant.TEXT
              : obj.variant === ElementVariant.URL ||
                obj.variant === ElementVariant.FILE,
          )
          .map((log) => (
            <ContextForLogLinkObj.Provider value={log}>
              <SpaceJourneySidebarLinksListItem />
            </ContextForLogLinkObj.Provider>
          ))}
        <div
          className='flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full bg-blue-500'
          onClick={() => {
            if (sidebarMode === SpaceJourneySidebarMode.NOTES) {
              modalController.addTextLinkController.open();
            } else {
              modalController.addFileLinkController.open();
            }
          }}
        >
          <AstralAddIcon />
        </div>
      </div>
    </div>
  );
}
