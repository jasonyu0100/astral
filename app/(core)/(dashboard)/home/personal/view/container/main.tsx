import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, roundedFx } from '@/style/data';

export function HomePersonalContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={HomePersonalContainer.name}
      sizeFx='h-full flex-grow'
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
      className='flex flex-col py-[1rem]'
    >
      {children}
    </GlassAreaContainer>
  );
}
