import { borderFx, glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';

export function CreativeNetworkSidebar() {
  return (
    <GlassAreaContainer
      name={CreativeNetworkSidebar.name}
      sizeFx='w-[300px] h-full'
      className={`flex flex-col overflow-auto p-[1rem]`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-l']}
    ></GlassAreaContainer>
  );
}
