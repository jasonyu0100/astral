import { glassStyles, containerStyles } from '@/(design)/(styles)/data';
import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { FeedPosts } from './moments/main';

export function FeedMain() {
  return (
    <GlassAreaContainer
      displayName={FeedMain.name}
      className={`${containerStyles.row}`}
      // glassStyle={backgroundStyles['glass-5']}
      sizeStyle='flex-grow h-full'
    >
      <FeedPosts />
    </GlassAreaContainer>
  );
}
