import {
  glassFx,
  containerFx,
  roundedFx,
  borderFx,
} from '@/(style)/data';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

export function StormContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={StormContainer.name}
      sizeFx='h-full flex-grow'
      glassFx={glassFx['glass-5']}
      className={`${containerFx['row']}`}
      borderFx={borderFx['border-all']}
      roundedFx={roundedFx['rounded-container-sm']}
    >
      {children}
    </GlassAreaContainer>
  );
}
