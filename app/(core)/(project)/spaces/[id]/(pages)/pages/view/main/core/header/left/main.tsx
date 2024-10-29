import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralSidebarRightIcon } from '@/icons/sidebar-right/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesPages,
  SpacesPagesSidebarVisibility,
} from '../../../../../controller/main';
import { ContextForSpacesPagesModals } from '../../../../../modal/controller/main';

export function SpacesPagesHeaderLeft() {
  const modalController = useContext(ContextForSpacesPagesModals);
  const {
    state: { sidebarVisibility },
    actions: { updateSidebarVisibility },
  } = useContext(ContextForSpacesPages);

  return (
    <>
      <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
        <AstralSidebarRightIcon
          className={ctwn({
            'rotate-180 transform':
              sidebarVisibility === SpacesPagesSidebarVisibility.CLOSED,
          })}
          onClick={() => {
            updateSidebarVisibility(
              sidebarVisibility === SpacesPagesSidebarVisibility.CLOSED
                ? SpacesPagesSidebarVisibility.OPEN
                : SpacesPagesSidebarVisibility.CLOSED,
            );
          }}
        />
        <BarDividerIndicator />
        <AstralAddIcon
          onClick={() => modalController.addPostController.open()}
        />
      </div>
    </>
  );
}
