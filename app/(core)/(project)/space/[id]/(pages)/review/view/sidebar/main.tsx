import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/(glass)/area/main';
import { SpaceReviewSidebarList } from './list/main';
import { SpaceReviewSidebarSearch } from './search/main';

export function SpaceReviewSidebar() {
  return (
    <>
      <GlassAreaContainer
        name={SpaceReviewSidebar.name}
        sizeFx='w-[300px] h-full'
        glassFx={glassFx['glass-5']}
        className={`flex flex-col items-center overflow-hidden`}
      >
        <SpaceReviewSidebarSearch />
        <SpaceReviewSidebarList />
      </GlassAreaContainer>
    </>
  );
}
