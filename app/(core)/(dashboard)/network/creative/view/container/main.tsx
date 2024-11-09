import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, roundedFx } from '@/style/data';

export function NetworkCreativeContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={NetworkCreativeContainer.name}
      className={`flex flex-row`}
      sizeFx='flex-grow h-full'
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {children}
    </GlassAreaContainer>
  );
}
