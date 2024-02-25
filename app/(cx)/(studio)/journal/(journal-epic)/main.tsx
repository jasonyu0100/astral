import { backgroundStyles, containerStyles } from '@/(design)/(styles)/data';
import { Glass } from '@/(components)/(basic)/glass/main';
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
