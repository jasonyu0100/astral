import { GlassAreaContainer } from '@/ui/glass/area/main';

export function SpaceJourneyContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceJourneyContainer.name}
        sizeFx='w-full h-full'
        className={`flex flex-col overflow-auto`}
      >
        <div className='flex h-full w-full flex-col items-center justify-center'>
          {children}
        </div>
      </GlassAreaContainer>
    </div>
  );
}
