import {
  glassFx,
  containerFx,
  roundedFx,
} from '@/(design)/(fx)/data';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

export function StormContainer({ children }: { children: React.ReactNode }) {
  return (
    <GlassAreaContainer
      name={StormContainer.name}
      sizeFx='h-full flex-grow'
      glassFx={glassFx['glass-5']}
      className={`${containerFx['row']}`}
      roundedFx={roundedFx['rounded-container-sm']}
    >
      {children}
    </GlassAreaContainer>
  );
}
