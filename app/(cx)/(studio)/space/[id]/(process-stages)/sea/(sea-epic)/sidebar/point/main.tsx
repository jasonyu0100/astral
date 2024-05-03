import { glassFx, borderFx } from '@/(fx)/data';
import { GlassAreaContainer } from '@/(pkgs)/(glass)/area/main';

export function SharePoint({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={SharePoint.name}
      sizeFx='w-full h-[150px]'
      className='p-[2rem] text-white'
    >
      {children}
    </GlassAreaContainer>
  );
}
