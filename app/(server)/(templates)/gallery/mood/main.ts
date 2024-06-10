import { CollectionResourceVariant } from '@/(server)/(model)/gallery/collection/resource/main';
import { TemplateGalleryObj } from '../main';
import { exampleFileElem } from '@/(server)/(model)/elements/file/main';

export const moodGalleryTemplate: TemplateGalleryObj = {
  title: 'Mood Gallery',
  description: 'Mood Gallery Description',
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
          fileElem: exampleFileElem,
        },
      ],
    },
  ],
};
