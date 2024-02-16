import { backgroundStyles, containerStyles } from '@/(common)/styles/data';
import { Layer } from '@/(common)/layer/main';
import { FeedPosts } from './moments/main';

export function FeedMain() {
  return (
    <Layer
      displayName={FeedMain.name}
      className={`${containerStyles.row}`}
      backgroundStyle={backgroundStyles['glass-5']}
      sizeStyle='flex-grow h-full'
    >
      <FeedPosts />
    </Layer>
  );
}
