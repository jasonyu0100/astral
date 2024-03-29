import { containerStyles } from '@/(design)/(styles)/data';
import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { UpdatesPosts } from './moments/main';

export function UpdatesMain() {
  return (
    <GlassAreaContainer
      displayName={UpdatesMain.name}
      className={`${containerStyles.row}`}
      sizeStyle='flex-grow h-full'
    >
      <UpdatesPosts />
    </GlassAreaContainer>
  );
}
