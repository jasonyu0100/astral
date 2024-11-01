import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { SpacesPreviewComments } from './comments/main';
import { SpacesPreviewMainPostContents } from './contents/main';
import { SpacesPreviewDescription } from './description/main';

export function SpacesPreviewMainPost() {
  return (
    <>
      <SpacesPreviewDescription />
      <SpacesPreviewMainPostContents />
      <HorizontalDivider />
      <SpacesPreviewComments />
    </>
  );
}
