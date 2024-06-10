import { TemplateChapterObj, TemplateSpaceObj } from '../../main';
import {
  exampleFileElem,
  exampleFileElems,
} from '@/(server)/(model)/elements/file/main';
import { CollectionResourceVariant } from '@/(server)/(model)/gallery/collection/resource/main';

export const songSpaceTemplate: TemplateSpaceObj = {
  title: 'Song Structure Template',
  description:
    'A template for structuring a song with different sections and transitions.',
  category: 'Music',
  chapters: [
    {
      title: 'Introduction (Intro)',
      description:
        'Establishes the mood with atmospheric sounds, synths, or an introductory beat. It can be a gradual build-up or a sudden start.',
      chatTemplates: [],
      sceneTemplates: [],
      verseTemplates: [],
      retroTemplates: [],
    },
    {
      title: 'Build-up',
      description:
        'Introduces rhythmic elements and gradually increases tension and energy. The build-up typically leads to the drop.',
      chatTemplates: [],
      sceneTemplates: [],
      verseTemplates: [],
      retroTemplates: [],
    },
    {
      title: 'Drop 1',
      description:
        "The climax of the song characterized by a powerful and energetic beat. This is where the main melody or hook is often introduced, and it's the part that makes people want to dance.",
      chatTemplates: [],
      sceneTemplates: [],
      verseTemplates: [],
      retroTemplates: [],
    },
    {
      title: 'Breakdown',
      description:
        'A title that contrasts the high energy of the drop, often featuring a breakdown of the beat or melody. It allows for a moment of rest before building up to the next drop.',
      chatTemplates: [],
      sceneTemplates: [],
      verseTemplates: [],
      retroTemplates: [],
    },
    {
      title: 'Build-up',
      description:
        'Similar to the first build-up, it raises energy levels and prepares for the next drop.',
      chatTemplates: [],
      sceneTemplates: [],
      verseTemplates: [],
      retroTemplates: [],
    },
    {
      title: 'Drop 2',
      description:
        'Another intense title with variations in the melody or additional elements. It may differ from the first drop but maintains the overall energy.',
      chatTemplates: [],
      sceneTemplates: [],
      verseTemplates: [],
      retroTemplates: [],
    },
    {
      title: 'Breakdown/Build-up',
      description:
        'This title may combine elements of a breakdown and build-up to create anticipation for the final drop.',
      chatTemplates: [],
      sceneTemplates: [],
      verseTemplates: [],
      retroTemplates: [],
    },
    {
      title: 'Drop 3 (Final Drop)',
      description:
        'The last and often most powerful drop in the song. It may include variations from the previous drops to add a sense of conclusion.',
      chatTemplates: [],
      sceneTemplates: [],
      verseTemplates: [],
      retroTemplates: [],
    },
    {
      title: 'Outro',
      description:
        'The concluding title that winds down the energy and gradually fades out. It can include elements from the previous titles or introduce new elements for a smooth exit.',
      chatTemplates: [],
      sceneTemplates: [],
      verseTemplates: [],
      retroTemplates: [],
    },
  ],
};
