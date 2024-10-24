import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { HorizonsSidebarMembersList } from './members/main';
import { HorizonsSidebarSquadronsList } from './squadrons/main';

export function HorizonSidebarCore() {
  return (
    <div className='flex w-full flex-col items-center space-y-[2rem] overflow-auto pb-[2rem]'>
      <HorizonsSidebarMembersList />
      <HorizontalDivider className='p-[2rem]' />
      <HorizonsSidebarSquadronsList />
    </div>
  );
}
