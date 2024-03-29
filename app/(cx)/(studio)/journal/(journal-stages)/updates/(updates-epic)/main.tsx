import { containerStyles } from '@/(design)/(styles)/data';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { UpdatesPosts } from './moments/main';

export function UpdatesMain() {
  return (
    <GlassAreaContainer
      name={UpdatesMain.name}
      className={`${containerStyles.row}`}
      size='flex-grow h-full'
    >
      <UpdatesPosts />
    </GlassAreaContainer>
  );
}
