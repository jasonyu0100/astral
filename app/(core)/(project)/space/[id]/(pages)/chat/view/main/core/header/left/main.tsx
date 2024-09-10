import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { cn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpaceChat,
  SpaceChatSidebarVisibility,
} from '../../../../../controller/main';

export function SpaceChatHeaderLeft() {
  const {
    state: { sidebarVisibility },
    actions: { updateSidebarVisibility },
  } = useContext(ContextForSpaceChat);
  return (
    <div className='flex w-1/3 flex-row'>
      <AstralSidebarLeftIcon
        className={cn({
          'rotate-180 transform':
            sidebarVisibility === SpaceChatSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          updateSidebarVisibility(
            sidebarVisibility === SpaceChatSidebarVisibility.CLOSED
              ? SpaceChatSidebarVisibility.OPEN
              : SpaceChatSidebarVisibility.CLOSED,
          );
        }}
      />
    </div>
  );
}
