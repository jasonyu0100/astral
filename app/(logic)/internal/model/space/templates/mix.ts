import { ConstellationVariant } from '@/(logic)/internal/model/map/constellation/main';
import { exampleFiles } from '@/(logic)/internal/model/resource/file/main';
import { ResourceVariant } from '@/(logic)/internal/model/resource/main';
import { ChapterTemplateObj } from './main';
import { MessageSource } from '@/(logic)/internal/model/storm/chat/message/main';

export const songMixTemplate: ChapterTemplateObj[] = [
  {
    title: 'Track 1',
    description:
      'An upbeat introductory track setting the energetic tone for the mix. It features lively beats and a catchy melody to engage the audience from the start.',
    chatTemplate: {
      title: 'Track 1',
      description: 'Chat about track 1.',
      messages: [
        {
          source: MessageSource.AGENT,
          message: 'Lets talk about your track 1.',
        },
        {
          source: MessageSource.AGENT,
          message: 'How can I help?',
        },
      ],
    },
    constellationTemplate: {
      title: 'Vision',
      description: 'My vision board',
      variant: ConstellationVariant.VISUAL,
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
          file: exampleFiles[0],
          variant: ResourceVariant.FILE,
        },
        {
          title: 'Star 3',
          description: 'Twinkle twinkle little star',
          x: 120,
          y: 240,
          file: exampleFiles[0],
          variant: ResourceVariant.FILE,
        },
      ],
    },
  },
  {
    title: 'Track 2',
    description:
      'Bringing in groovy vibes, this track builds upon the energy introduced in the first track. Expect a seamless transition with a focus on maintaining a danceable rhythm.',
  },
  {
    title: 'Track 3',
    description:
      'Elevating the energy with an energetic build-up, this track prepares the audience for a climactic moment. The tempo rises, and anticipation builds for the peak of the mix.',
  },
  {
    title: 'Track 4',
    description:
      'The peak moment of the mix, featuring a powerful and dynamic beat. This track is designed to make people dance with its high energy and memorable hooks.',
  },
  {
    title: 'Track 5',
    description:
      'Transitioning into a deeper sound, this track provides a moment of contrast. The groove remains, but the atmosphere becomes more profound, leading to a hypnotic experience.',
  },
  {
    title: 'Track 6',
    description:
      'Continuing with a hypnotic groove, this track maintains the energy while exploring deeper and more atmospheric elements. It creates a captivating and immersive atmosphere.',
  },
  {
    title: 'Track 7',
    description:
      'An atmospheric interlude providing a brief break in the intensity. This track introduces a different mood, allowing the audience to catch their breath before the final segment.',
  },
  {
    title: 'Track 8',
    description:
      'Culminating in a climactic finale, this track brings back the high energy seen earlier in the mix. It features a powerful and memorable conclusion, leaving a lasting impression.',
  },
];
