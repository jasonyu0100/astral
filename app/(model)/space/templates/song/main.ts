import { SpaceSceneVariant } from '@/(model)/space/chapter/scene/main';
import { TemplateChapterObj } from '../main';
import { exampleFile, exampleFiles } from '@/(model)/concept/file/main';
import { CollectionResourceVariant } from '@/(model)/media/resource/main';
import { ConversationMessageSource } from '@/(model)/space/chapter/chat/conversation/message/main';

export const songSpaceTemplate: TemplateChapterObj[] = [
  {
    title: 'Introduction (Intro)',
    summary: 'Establishes the mood with atmospheric sounds, synths, or an introductory beat. It can be a gradual build-up or a sudden start.',
  },
  {
    title: 'Build-up',
    summary: 'Introduces rhythmic elements and gradually increases tension and energy. The build-up typically leads to the drop.',
  },
  {
    title: 'Drop 1',
    summary: "The climax of the song characterized by a powerful and energetic beat. This is where the main melody or hook is often introduced, and it's the part that makes people want to dance.",
  },
  {
    title: 'Breakdown',
    summary: 'A title that contrasts the high energy of the drop, often featuring a breakdown of the beat or melody. It allows for a moment of rest before building up to the next drop.',
  },
  {
    title: 'Build-up',
    summary: 'Similar to the first build-up, it raises energy levels and prepares for the next drop.',
  },
  {
    title: 'Drop 2',
    summary: 'Another intense title with variations in the melody or additional elements. It may differ from the first drop but maintains the overall energy.',
  },
  {
    title: 'Breakdown/Build-up',
    summary: 'This title may combine elements of a breakdown and build-up to create anticipation for the final drop.',
  },
  {
    title: 'Drop 3 (Final Drop)',
    summary: 'The last and often most powerful drop in the song. It may include variations from the previous drops to add a sense of conclusion.',
  },
  {
    title: 'Outro',
    summary: 'The concluding title that winds down the energy and gradually fades out. It can include elements from the previous titles or introduce new elements for a smooth exit.',
  },
];
