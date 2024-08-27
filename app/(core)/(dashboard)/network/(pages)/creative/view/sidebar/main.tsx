import { borderFx, glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { CreativeNetworkSidebarEntry } from './entry/main';

export function CreativeNetworkSidebar() {
  return (
    <GlassAreaContainer
      name={CreativeNetworkSidebar.name}
      sizeFx='w-[300px] h-full'
      className={`flex flex-col overflow-auto p-[1rem]`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-l']}
    >
      <div className='flex flex-col  space-y-[1rem]'>
        <p className='text-lg font-bold text-slate-300'>12 days ago</p>
        <CreativeNetworkSidebarEntry />
        <CreativeNetworkSidebarEntry />
        <CreativeNetworkSidebarEntry />
        <p className='text-lg font-bold text-slate-300'>1 month ago</p>
        <CreativeNetworkSidebarEntry />
      </div>
    </GlassAreaContainer>
  );
}
