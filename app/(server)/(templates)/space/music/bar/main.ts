import { TemplateChapterObj, TemplateSpaceObj } from '../../main';
import { exampleFileElems } from '@/(server)/(model)/elements/file/main';
import { CollectionResourceVariant } from '@/(server)/(model)/gallery/collection/resource/main';

export const barTemplate: TemplateSpaceObj = {
  title: 'Bar Template',
  description: 'A template for creating a music bar.',
  category: 'Music',
  chapters: [
    {
      title: 'Drums',
      description:
        "The 'Drums' section is the rhythmic backbone of the composition. It includes percussive elements such as kick, snare, hi-hats, and other drum elements. Drums contribute to the overall groove, energy, and feel of the musical piece.",
      chatTemplates: [],
      sceneTemplates: [],
      verseTemplates: [],
    },
    {
      title: 'Bass',
      description:
        "In the 'Bass' section, the low-frequency foundation of the music is established. The bassline provides depth, rhythm, and a sense of movement. It often interacts with the drums to create a strong rhythmic foundation.",
      chatTemplates: [],
      sceneTemplates: [],
      verseTemplates: [],
    },
    {
      title: 'Mids',
      description:
        "The 'Mids' section encompasses the mid-range frequencies and instruments like guitars, synths, and keyboards. Mids contribute to the melodic and harmonic aspects of the composition, adding texture and richness to the overall sound.",
      chatTemplates: [],
      sceneTemplates: [],
      verseTemplates: [],
    },
    {
      title: 'Vocals',
      description:
        "The 'Vocals' section involves any vocal elements in the composition. This could include lead vocals, harmonies, or vocal samples. Vocals convey lyrics, melodies, and emotions, playing a central role in many genres.",
      chatTemplates: [],
      sceneTemplates: [],
      verseTemplates: [],
    },
    {
      title: 'Effects',
      description:
        "The 'Effects' section introduces additional sonic elements such as soundscapes, electronic textures, or creative audio processing. Effects contribute to the atmosphere and mood of the composition, adding depth and interest.",
      chatTemplates: [],
      sceneTemplates: [],
      verseTemplates: [],
    },
  ],
};
