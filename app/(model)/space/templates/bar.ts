import { SceneVariant } from '@/(model)/space/chapter/scene/main';
import { ChapterTemplateObj } from './main';
import { exampleFiles } from '@/(model)/media/resource/file/main';
import { ResourceVariant } from '@/(model)/media/resource/main';
import { MessageSource } from '@/(model)/space/chapter/chat/conversation/message/main';

export const barTemplate: ChapterTemplateObj[] = [
  {
    title: 'Drums',
    description:
      "The 'Drums' section is the rhythmic backbone of the composition. It includes percussive elements such as kick, snare, hi-hats, and other drum elements. Drums contribute to the overall groove, energy, and feel of the musical piece.",
    chatTemplate: {
      title: 'Drums Chat',
      description: 'Chat about the drum section.',
      messages: [
        {
          source: MessageSource.AGENT,
          message: 'Lets talk about your drums',
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
      variant: SceneVariant.VISUAL,
      ideas: [
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
    title: 'Bass',
    description:
      "In the 'Bass' section, the low-frequency foundation of the music is established. The bassline provides depth, rhythm, and a sense of movement. It often interacts with the drums to create a strong rhythmic foundation.",
  },
  {
    title: 'Mids',
    description:
      "The 'Mids' section encompasses the mid-range frequencies and instruments like guitars, synths, and keyboards. Mids contribute to the melodic and harmonic aspects of the composition, adding texture and richness to the overall sound.",
  },
  {
    title: 'Vocals',
    description:
      "The 'Vocals' section involves any vocal elements in the composition. This could include lead vocals, harmonies, or vocal samples. Vocals convey lyrics, melodies, and emotions, playing a central role in many genres.",
  },
  {
    title: 'Effects',
    description:
      "The 'Effects' section introduces additional sonic elements such as soundscapes, electronic textures, or creative audio processing. Effects contribute to the atmosphere and mood of the composition, adding depth and interest.",
  },
];
