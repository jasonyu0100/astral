import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { containerStyles } from '@/(design)/(styles)/data';

export function SearchWrapper({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={SearchWrapper.name}
      size='w-full h-full'
      className={`${containerStyles.row}`}
    >
      {children}
    </GlassAreaContainer>
  );
}
