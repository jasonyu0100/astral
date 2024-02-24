import { backgroundStyles, containerStyles } from '@/(components)/styles/data';
import { Glass } from '@/(components)/glass/main';
import { FeedPosts } from './moments/main';

export function FeedMain() {
  return (
    <Glass
      displayName={FeedMain.name}
      className={`${containerStyles.row}`}
      backgroundStyle={backgroundStyles['glass-5']}
      sizeStyle='flex-grow h-full'
    >
      <FeedPosts />
    </Glass>
  );
}
