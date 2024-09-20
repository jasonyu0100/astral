import { exampleAgents } from '@/(server)/model/agent/main';
import { UserDisplayPictureElement } from '@/ui/cover/user/main';
import { useContext } from 'react';
import { ContextForCommonSidebarModals } from '../../modals/controller/main';

export function CommonSidebarMinimisedFavoredList() {
  const modalController = useContext(ContextForCommonSidebarModals);

  return (
    <div className='flex w-full flex-shrink-0 flex-col items-end space-y-[2rem] overflow-hidden rounded-full'>
      {exampleAgents
        .map((agent) => agent.dp)
        .map((fileElem) => (
          <div
            onClick={() => {
              modalController.userChatModal.open();
              console.log('clicked');
            }}
          >
            <UserDisplayPictureElement fileElem={fileElem} />
          </div>
        ))}
    </div>
  );
}
