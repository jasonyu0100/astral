import {
  glassFx,
  borderFx,
  containerFx,
} from '@/(fx)/data';
import { GlassAreaContainer } from '@/(lib)/(glass)/area/main';

export function ShareSidebar({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={ShareSidebar.name}
      sizeFx='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerFx['col-center']} px-[1rem] py-[2rem]`}
      glassFx={glassFx['glass-10']}
    >
      {children}
    </GlassAreaContainer>
  );
}
