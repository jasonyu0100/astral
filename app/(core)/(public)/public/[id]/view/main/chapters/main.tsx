import { PublicSpacePageComments } from './comments/main';
import { PublicSpaceDescription } from './description/main';
import { PublicSpacePost } from './post/main';

export function PublicSpaceChapters() {
  return (
    <>
      <PublicSpacePost />
      <PublicSpaceDescription />
      <PublicSpacePageComments />
    </>
  );
}
