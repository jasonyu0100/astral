import { glassFx, borderFx } from '@/(style)/data';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

export function SharePoint({ children }: { children?: React.ReactNode }) {
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
