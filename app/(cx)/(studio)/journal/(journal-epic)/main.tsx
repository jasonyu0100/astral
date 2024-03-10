import { backgroundStyles, containerStyles } from '@/(design)/(styles)/data';
import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { FeedPosts } from './moments/main';

export function FeedMain() {
  return (
    <GlassContainer
      displayName={FeedMain.name}
      className={`${containerStyles.row}`}
      // glassStyle={backgroundStyles['glass-5']}
      sizeStyle='flex-grow h-full'
    >
      <FeedPosts />
    </GlassContainer>
  );
}
