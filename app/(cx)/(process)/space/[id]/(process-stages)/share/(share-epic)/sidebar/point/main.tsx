import { glassStyles, borderStyles } from '@/(design)/(styles)/data';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

export function SharePoint({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={SharePoint.name}
      size='w-full h-[150px]'
      className='p-[2rem] text-white'
    >
      {children}
    </GlassAreaContainer>
  );
}
