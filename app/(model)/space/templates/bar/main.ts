import { ChapterSceneVariant } from '@/(model)/space/chapter/scene/main';
import { TemplateChapterObj } from '../main';
import { exampleFileElems } from '@/(model)/elements/file/main';
import { CollectionResourceVariant } from '@/(model)/archive/resource/main';
import { ConversationMessageSource } from '@/(model)/space/chapter/chat/conversation/message/main';

export const barTemplate: TemplateChapterObj[] = [
  {
    title: 'Drums',
    summary: "The 'Drums' section is the rhythmic backbone of the composition. It includes percussive elements such as kick, snare, hi-hats, and other drum elements. Drums contribute to the overall groove, energy, and feel of the musical piece.",
  },
  {
    title: 'Bass',
    summary: "In the 'Bass' section, the low-frequency foundation of the music is established. The bassline provides depth, rhythm, and a sense of movement. It often interacts with the drums to create a strong rhythmic foundation.",
  },
  {
    title: 'Mids',
    summary: "The 'Mids' section encompasses the mid-range frequencies and instruments like guitars, synths, and keyboards. Mids contribute to the melodic and harmonic aspects of the composition, adding texture and richness to the overall sound.",
  },
  {
    title: 'Vocals',
    summary: "The 'Vocals' section involves any vocal elements in the composition. This could include lead vocals, harmonies, or vocal samples. Vocals convey lyrics, melodies, and emotions, playing a central role in many genres.",
  },
  {
    title: 'Effects',
    summary: "The 'Effects' section introduces additional sonic elements such as soundscapes, electronic textures, or creative audio processing. Effects contribute to the atmosphere and mood of the composition, adding depth and interest.",
  },
];
