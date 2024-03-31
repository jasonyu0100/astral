import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, roundedFx, glassFx } from '@/(design)/(fx)/data';
import { HorizonsSidebarDegree } from './degree/main';
import { HorizonsSidebarModal } from './modal/main';
import { HorizonsSidebarScale } from './scale/main';

export function HorizonsSidebar() {
  return (
    <GlassAreaContainer
      name={HorizonsSidebar.name}
      sizeFx='h-full w-[320px]'
      borderFx={borderFx['border-r']}
      className='flex flex-col space-y-[2rem] overflow-auto px-[1rem]'
    >
      <HorizonsSidebarScale />
      <HorizonsSidebarModal />
      <HorizonsSidebarDegree />
    </GlassAreaContainer>
  );
}
