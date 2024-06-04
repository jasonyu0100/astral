import { SceneVariant } from '@/(model)/space/chapter/scene/main';
import { exampleFiles } from '@/(model)/media/resource/file/main';
import { ResourceVariant } from '@/(model)/media/resource/main';
import { ChapterTemplateObj } from './main';
import { MessageSource } from '@/(model)/space/chapter/chat/conversation/message/main';

export const ideaTemplate: ChapterTemplateObj[] = [
  {
    title: 'Preparation',
    description:
      'In this stage, the focus is on defining the problem or opportunity clearly. Gather relevant information about the context to inform the ideation process. It sets the groundwork for generating ideas with a deep understanding of the subject.',
    chatTemplate: {
      title: 'Preperation',
      description: 'Chat about preparation.',
      messages: [
        {
          source: MessageSource.AGENT,
          message: 'Lets talk about your preparation.',
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
    title: 'Incubation',
    description:
      'The incubation stage involves stepping back from the problem and allowing your mind to absorb information without actively thinking about solutions. Divergent thinking is encouraged to explore a wide range of ideas without judgment.',
  },
  {
    title: 'Illumination',
    description:
      "The illumination stage is marked by the 'Eureka' moment when a creative solution emerges. It often happens when the subconscious connects previously unrelated information. This is the time when innovative ideas start to take shape.",
  },
  {
    title: 'Evaluation',
    description:
      'In the evaluation stage, ideas are critically assessed for feasibility, viability, and desirability. Factors such as resources, potential impact, and alignment with goals are considered. Prioritization helps identify the most promising concepts.',
  },
  {
    title: 'Planning',
    description:
      'The planning stage involves developing detailed implementation plans for the chosen idea. This includes outlining steps, allocating resources, and assessing potential risks. A strategic approach is taken to prepare for the execution phase.',
  },
  {
    title: 'Execution',
    description:
      'During the execution stage, the focus shifts to bringing the idea to life. This may involve creating prototypes, testing, and refining the idea in a real-world context. Iterative development ensures continuous improvement based on feedback.',
  },
  {
    title: 'Reflection',
    description:
      'Reflection is a crucial stage where outcomes are assessed, and feedback is gathered. Lessons learned during the ideation and implementation process are identified. This stage informs future projects and contributes to ongoing learning.',
  },
];
