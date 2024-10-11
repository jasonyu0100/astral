import { exampleAgents } from '@/(server)/model/agent/main';
import { UserDisplayPictureElement } from '@/ui/cover/user/main';

export function SpaceSidebarAgentsList() {
  return (
    <div className='flex w-full flex-shrink-0 flex-col items-end space-y-[2rem] overflow-hidden rounded-full'>
      {exampleAgents
        .map((agent) => agent.dp)
        .map((fileElem) => (
          <div
            onClick={() => {
              console.log('clicked');
            }}
          >
            <UserDisplayPictureElement fileElem={fileElem} />
          </div>
        ))}
    </div>
  );
}
