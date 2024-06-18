import { exampleFileElem } from '@/(server)/(model)/elements/file/main';
import { ElementVariant } from '@/(server)/(model)/elements/main';
import { TemplateGalleryObj } from '../main';

export const vibeGalleryTemplate: TemplateGalleryObj = {
  title: 'Vibe Gallery',
  description: 'Vibe Gallery Description',
  thumbnail: exampleFileElem,
  collections: [
    {
      title: 'Collection 1',
      description: 'This is a collection',
      resources: [
        {
          title: 'Resource 1',
          description: 'This is a resource',
          variant: ElementVariant.FILE,
          fileElem: exampleFileElem,
        },
      ],
    },
  ],
};
