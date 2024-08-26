import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

export function SpaceSessionContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceSessionContainer.name}
        sizeFx='w-full h-full'
        className={`flex flex-col overflow-auto`}
      >
        <div className='flex h-full w-full flex-col justify-center'>
          {children}
        </div>
      </GlassAreaContainer>
    </div>
  );
}
