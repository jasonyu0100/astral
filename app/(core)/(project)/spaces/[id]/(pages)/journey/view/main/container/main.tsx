import { GlassAreaContainer } from '@/ui/glass/area/main';

export function SpacesJourneyContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpacesJourneyContainer.name}
        sizeFx='w-full h-full'
        className={`flex flex-col overflow-auto`}
      >
        <div className='flex w-full flex-col items-center justify-center p-[2rem]'>
          {children}
        </div>
      </GlassAreaContainer>
    </div>
  );
}
