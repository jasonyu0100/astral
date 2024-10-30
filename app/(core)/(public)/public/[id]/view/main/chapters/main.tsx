import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { PublicSpacePageComments } from './comments/main';
import { PublicSpaceDescription } from './description/main';
import { PublicSpaceHeader } from './header/main';
import { PublicSpacePost } from './post/main';

export function PublicSpaceChapters() {
  return (
    <>
      <PublicSpaceHeader />
      <PublicSpaceDescription />
      <PublicSpacePost />
      <HorizontalDivider />
      <PublicSpacePageComments />
    </>
  );
}
