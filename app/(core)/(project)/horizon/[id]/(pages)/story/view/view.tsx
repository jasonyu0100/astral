import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  glassFx,
  
  roundedFx,
  borderFx,
} from '@/(style)/data';

export function StoryView({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassAreaContainer
      name={StoryView.name}
      sizeFx='flex-grow h-full'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {children}
    </GlassAreaContainer>
  );
}