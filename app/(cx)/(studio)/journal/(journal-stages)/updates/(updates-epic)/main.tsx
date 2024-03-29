import { containerFx } from '@/(design)/(fx)/data';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { UpdatesPosts } from './moments/main';

export function UpdatesMain() {
  return (
    <GlassAreaContainer
      name={UpdatesMain.name}
      className={`${containerFx.row}`}
      sizeFx='flex-grow h-full'
    >
      <UpdatesPosts />
    </GlassAreaContainer>
  );
}
