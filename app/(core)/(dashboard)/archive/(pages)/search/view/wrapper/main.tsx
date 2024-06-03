import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

export function SearchWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={SearchWrapper.name}
      sizeFx='w-full h-full'
      className={`flex`}
    >
      {children}
    </GlassAreaContainer>
  );
}
