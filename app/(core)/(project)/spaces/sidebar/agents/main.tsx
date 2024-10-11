import { exampleAgents } from '@/(server)/model/agent/main';
import { UserDisplayPictureElement } from '@/ui/cover/user/main';
import { useContext } from 'react';
import { ContextForSpacesSidebarModals } from '../modal/controller/main';

export function SpaceSidebarAgentsList() {
  const spacesSidebarModals = useContext(ContextForSpacesSidebarModals);
  return (
    <div className='flex w-full flex-shrink-0 flex-col items-end space-y-[2rem] overflow-hidden rounded-full'>
      {exampleAgents
        .map((agent) => agent.dp)
        .map((fileElem) => (
          <div
            onClick={() => {
              spacesSidebarModals.agentConversationController.open();
            }}
          >
            <UserDisplayPictureElement fileElem={fileElem} />
          </div>
        ))}
    </div>
  );
}
