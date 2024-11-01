import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { SpacesPreviewPostComments } from './comments/main';
import { SpacesPreviewPostContents } from './contents/main';
import { SpacesPreviewPostDescription } from './description/main';

export function SpacesPreviewMainPost() {
  return (
    <>
      <SpacesPreviewPostDescription />
      <SpacesPreviewPostContents />
      <HorizontalDivider />
      <SpacesPreviewPostComments />
    </>
  );
}
