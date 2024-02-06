import { Layer } from '@/(common)/layer/main';
import { containerStyles } from '@/(common)/styles/data';

export function FeedPosts({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={FeedPosts.name}
      sizeStyle='flex-grow h-full'
      className={`${containerStyles['col-center']} overflow-auto p-[3rem]`}
    >
      {children}
    </Layer>
  );
}
