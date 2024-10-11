import { exampleAgents } from '@/(server)/model/agent/main';
import { UserDisplayPictureElement } from '@/ui/cover/user/main';

export function CommonSidebarMinimisedFavoredList() {
  return (
    <div className='flex w-full flex-shrink-0 flex-col items-end space-y-[2rem] overflow-hidden rounded-full'>
      {exampleAgents
        .slice(0)
        .map((agent) => agent.dp)
        .map((fileElem) => (
          <div>
            <UserDisplayPictureElement fileElem={fileElem} />
          </div>
        ))}
    </div>
  );
}
