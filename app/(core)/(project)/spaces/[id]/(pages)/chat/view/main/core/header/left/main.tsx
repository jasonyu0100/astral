import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesChat,
  SpacesChatSidebarVisibility,
} from '../../../../../controller/main';

export function SpacesChatHeaderLeft() {
  const {
    state: { sidebarVisibility },
    actions: { updateSidebarVisibility },
  } = useContext(ContextForSpacesChat);
  return (
    <div className='flex w-1/3 flex-row'>
      <AstralSidebarLeftIcon
        className={ctwn({
          'rotate-180 transform':
            sidebarVisibility === SpacesChatSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          updateSidebarVisibility(
            sidebarVisibility === SpacesChatSidebarVisibility.CLOSED
              ? SpacesChatSidebarVisibility.OPEN
              : SpacesChatSidebarVisibility.CLOSED,
          );
        }}
      />
    </div>
  );
}
