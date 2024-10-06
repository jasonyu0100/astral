import { borderFx, glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';

export function HorizonsFieldSidebar() {
  return (
    <GlassAreaContainer
      name={HorizonsFieldSidebar.name}
      sizeFx='w-[360px] h-full flex-shrink-0'
      className={`flex flex-col space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-10']}
      borderFx={borderFx['border-l']}
    ></GlassAreaContainer>
  );
}
