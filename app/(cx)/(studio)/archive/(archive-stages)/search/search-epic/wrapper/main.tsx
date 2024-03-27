import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { containerStyles } from '@/(design)/(styles)/data';

export function SearchWrapper({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      displayName={SearchWrapper.name}
      sizeStyle='w-full h-full'
      className={`${containerStyles.row}`}
    >
      {children}
    </GlassAreaContainer>
  );
}
