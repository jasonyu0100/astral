import { AstralSidebarLeftIcon } from '@/icons/sidebar-left/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesConversation,
  SpacesConversationSidebarVisibility,
} from '../../../../../controller/main';

export function SpacesConversationHeaderLeft() {
  const {
    state: { sidebarVisibility },
    actions: { updateSidebarVisibility },
  } = useContext(ContextForSpacesConversation);
  return (
    <div className='flex w-1/3 flex-row'>
      <AstralSidebarLeftIcon
        className={ctwn({
          'rotate-180 transform':
            sidebarVisibility === SpacesConversationSidebarVisibility.CLOSED,
        })}
        onClick={() => {
          updateSidebarVisibility(
            sidebarVisibility === SpacesConversationSidebarVisibility.CLOSED
              ? SpacesConversationSidebarVisibility.OPEN
              : SpacesConversationSidebarVisibility.CLOSED,
          );
        }}
      />
    </div>
  );
}
