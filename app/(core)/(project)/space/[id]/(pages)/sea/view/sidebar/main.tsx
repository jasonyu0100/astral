import { glassFx, borderFx } from '@/(style)/data';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

export function ShareSidebar({ children }: { children?: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={ShareSidebar.name}
      sizeFx='max-w-[360px] min-w-[240px] w-1/4 h-full flex-shrink-0'
      className={`$flex flex-col space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-r']}
    >
      {children}
    </GlassAreaContainer>
  );
}
