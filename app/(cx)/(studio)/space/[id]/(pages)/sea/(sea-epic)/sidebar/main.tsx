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
      sizeFx='max-w-[360px] min-w-[240px] w-1/4 h-full'
      className={`${containerFx['col-center']} px-[1rem] py-[2rem]`}
      glassFx={glassFx['glass-5']}
    >
      {children}
    </GlassAreaContainer>
  );
}
