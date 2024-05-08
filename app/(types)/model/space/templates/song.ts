import { PartVariant } from '@/(types)/model/map/part/main';
import { ChapterTemplateObj } from './main';
import { exampleFile, exampleFiles } from '@/(types)/model/resource/file/main';
import { ResourceVariant } from '@/(types)/model/resource/main';
import { MessageSource } from '@/(types)/model/storm/chat/message/main';

export const songSpaceTemplate: ChapterTemplateObj[] = [
  {
    title: 'Introduction (Intro)',
    description:
      'Establishes the mood with atmospheric sounds, synths, or an introductory beat. It can be a gradual build-up or a sudden start.',
    chatTemplate: {
      title: 'Introduction',
      description: 'Chat about intro.',
      messages: [
        {
          source: MessageSource.AGENT,
          message: 'Lets talk about your intro.',
        },
        {
          source: MessageSource.AGENT,
          message: 'How can I help?',
        },
      ],
    },
    partTemplate: {
      title: 'Vision',
      description: 'My vision board',
      variant: PartVariant.VISUAL,
      stars: [
        {
          title: 'Star 0',
          description: 'Twinkle twinkle little star',
          x: 120,
          y: 120,
          file: exampleFiles[0],
          variant: ResourceVariant.FILE,
        },
        {
          title: 'Star 1',
          description: 'Twinkle twinkle little star',
          x: 240,
          y: 240,
          file: exampleFiles[1],
          variant: ResourceVariant.FILE,
        },
        {
          title: 'Star 3',
          description: 'Twinkle twinkle little star',
          x: 120,
          y: 240,
          file: exampleFiles[2],
          variant: ResourceVariant.FILE,
        },
      ],
    },
  },
  {
    title: 'Build-up',
    description:
      'Introduces rhythmic elements and gradually increases tension and energy. The build-up typically leads to the drop.',
  },
  {
    title: 'Drop 1',
    description:
      "The climax of the song characterized by a powerful and energetic beat. This is where the main melody or hook is often introduced, and it's the part that makes people want to dance.",
  },
  {
    title: 'Breakdown',
    description:
      'A title that contrasts the high energy of the drop, often featuring a breakdown of the beat or melody. It allows for a moment of rest before building up to the next drop.',
  },
  {
    title: 'Build-up',
    description:
      'Similar to the first build-up, it raises energy levels and prepares for the next drop.',
  },
  {
    title: 'Drop 2',
    description:
      'Another intense title with variations in the melody or additional elements. It may differ from the first drop but maintains the overall energy.',
  },
  {
    title: 'Breakdown/Build-up',
    description:
      'This title may combine elements of a breakdown and build-up to create anticipation for the final drop.',
  },
  {
    title: 'Drop 3 (Final Drop)',
    description:
      'The last and often most powerful drop in the song. It may include variations from the previous drops to add a sense of conclusion.',
  },
  {
    title: 'Outro',
    description:
      'The concluding title that winds down the energy and gradually fades out. It can include elements from the previous titles or introduce new elements for a smooth exit.',
  },
];
