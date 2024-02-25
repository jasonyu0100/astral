import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { containerStyles } from '@/(design)/(styles)/data';

export function SearchWrapper({ children }: { children: React.ReactNode }) {
  return (
    <GlassContainer
      displayName={SearchWrapper.name}
      sizeStyle='w-full h-full'
      className={`${containerStyles.row}`}
    >
      {children}
    </GlassContainer>
  );
}
