import { PublicSpaceSidebarChapters } from './chapters/main';
import { PublicSpaceSidebarSpace } from './space/main';

export function PublicSpaceSidebar() {
  return (
    <div className='flex flex-shrink-0 flex-col space-y-[2rem] py-[4rem]'>
      <PublicSpaceSidebarSpace />
      <PublicSpaceSidebarChapters />
    </div>
  );
}
