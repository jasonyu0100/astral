import { SpaceSceneVariant } from '@/(model)/space/chapter/scene/main';
import { exampleFiles } from '@/(model)/concept/file/main';
import { CollectionResourceVariant } from '@/(model)/media/resource/main';
import { TemplateChapterObj } from '../main';
import { ConversationMessageSource } from '@/(model)/space/chapter/chat/conversation/message/main';

export const ideaTemplate: TemplateChapterObj[] = [
  {
    title: 'Preparation',
    summary: 'In this stage, the focus is on defining the problem or opportunity clearly. Gather relevant information about the context to inform the ideation process. It sets the groundwork for generating ideas with a deep understanding of the subject.',
  },
  {
    title: 'Incubation',
    summary: 'The incubation stage involves stepping back from the problem and allowing your mind to absorb information without actively thinking about solutions. Divergent thinking is encouraged to explore a wide range of ideas without judgment.',
  },
  {
    title: 'Illumination',
    summary: "The illumination stage is marked by the 'Eureka' moment when a creative solution emerges. It often happens when the subconscious connects previously unrelated information. This is the time when innovative ideas start to take shape.",
  },
  {
    title: 'Evaluation',
    summary: 'In the evaluation stage, ideas are critically assessed for feasibility, viability, and desirability. Factors such as resources, potential impact, and alignment with goals are considered. Prioritization helps identify the most promising concepts.',
  },
  {
    title: 'Planning',
    summary: 'The planning stage involves developing detailed implementation plans for the chosen idea. This includes outlining steps, allocating resources, and assessing potential risks. A strategic approach is taken to prepare for the execution phase.',
  },
  {
    title: 'Execution',
    summary: 'During the execution stage, the focus shifts to bringing the idea to life. This may involve creating prototypes, testing, and refining the idea in a real-world context. Iterative development ensures continuous improvement based on feedback.',
  },
  {
    title: 'Reflection',
    summary: 'Reflection is a crucial stage where outcomes are assessed, and feedback is gathered. Lessons learned during the ideation and implementation process are identified. This stage informs future projects and contributes to ongoing learning.',
  },
];
