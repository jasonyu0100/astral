import { CollectionResourceVariant } from '@/(model)/gallery/collection/resource/main';
import { TemplateGalleryObj } from '../main';
import { exampleFileElem } from '@/(model)/elements/file/main';

export const reelGalleryTemplate: TemplateGalleryObj = {
  title: 'Reel Gallery',
  description: 'Reel Gallery Description',
  thumbnail: exampleFileElem,
  collections: [
    {
      title: 'Collection 1',
      description: 'This is a collection',
      resources: [
        {
          title: 'Resource 1',
          description: 'This is a resource',
          variant: CollectionResourceVariant.FILE,
          file: exampleFileElem,
        },
      ],
    },
  ],
};
