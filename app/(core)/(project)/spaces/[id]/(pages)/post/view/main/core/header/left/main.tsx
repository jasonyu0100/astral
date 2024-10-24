import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralSidebarRightIcon } from '@/icons/sidebar-right/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesPost,
  SpacesPostSidebarVisibility,
} from '../../../../../controller/main';
import { ContextForSpacesPostModals } from '../../../../../modal/controller/main';

export function SpacesPostHeaderLeft() {
  const modalController = useContext(ContextForSpacesPostModals);
  const {
    state: { sidebarVisibility },
    actions: { updateSidebarVisibility },
  } = useContext(ContextForSpacesPost);

  return (
    <>
      <div className='flex w-1/3 flex-row items-center space-x-[1rem]'>
        <AstralSidebarRightIcon
          className={ctwn({
            'rotate-180 transform':
              sidebarVisibility === SpacesPostSidebarVisibility.CLOSED,
          })}
          onClick={() => {
            updateSidebarVisibility(
              sidebarVisibility === SpacesPostSidebarVisibility.CLOSED
                ? SpacesPostSidebarVisibility.OPEN
                : SpacesPostSidebarVisibility.CLOSED,
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
