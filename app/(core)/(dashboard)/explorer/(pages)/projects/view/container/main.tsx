import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/(glass)/area/main';

export function VentureHorizonsContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={VentureHorizonsContainer.name}
      sizeFx='h-full flex-grow'
      glassFx={glassFx['glass-5']}
      className={`flex flex-row`}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {children}
    </GlassAreaContainer>
  );
}
