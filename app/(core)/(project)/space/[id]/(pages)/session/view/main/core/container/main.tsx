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
        <div className='flex h-full w-full flex-col justify-center space-y-[2rem] px-[3rem] py-[2rem]'>
          {children}
        </div>
      </GlassAreaContainer>
    </div>
  );
}
