import { TemplateSpaceObj } from '../../main';

export const starterProjectTemplate: TemplateSpaceObj = {
  title: 'Starter Project',
  description: 'A simple, open-ended template for any project.',
  summary: 'A flexible template to kickstart any type of project.',
  category: 'General',
  chapters: [
    {
      title: 'Introduction',
      summary: 'Lay the groundwork for your project.',
      description: 'Start by defining the purpose and goals of your project.',
      sceneTemplates: [
        {
          title: 'Project Purpose',
          summary: 'Describe why this project exists.',
          objective:
            'Clearly state the problem you’re solving or the opportunity you’re addressing.',
        },
        {
          title: 'Goals and Objectives',
          summary: 'Outline the main goals of the project.',
          objective: 'Define what you aim to achieve with this project.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective: 'Set a clear direction for the project from the outset.',
    },
    {
      title: 'Planning',
      summary: 'Organize your ideas and tasks.',
      description: 'Plan out the steps needed to achieve your project goals.',
      sceneTemplates: [
        {
          title: 'Task List',
          summary: 'Create a list of tasks or milestones.',
          objective: 'Break down the project into manageable pieces.',
        },
        {
          title: 'Timeline',
          summary: 'Establish a timeline or schedule.',
          objective: 'Set deadlines or timeframes for key tasks or milestones.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective: 'Create a structured plan to guide the project’s execution.',
    },
    {
      title: 'Execution',
      summary: 'Put the plan into action.',
      description:
        'Carry out the tasks and work towards completing the project.',
      sceneTemplates: [
        {
          title: 'Implementation',
          summary: 'Start working on the tasks.',
          objective: 'Execute the plan and make progress on the project.',
        },
        {
          title: 'Progress Tracking',
          summary: 'Monitor the project’s progress.',
          objective:
            'Keep track of what’s been accomplished and what remains to be done.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Ensure the project stays on track and moves towards completion.',
    },
    {
      title: 'Review and Next Steps',
      summary: 'Reflect on the project and plan the next steps.',
      description:
        'Evaluate the project’s outcomes and decide on the next actions.',
      sceneTemplates: [
        {
          title: 'Project Review',
          summary: 'Assess the project’s success and challenges.',
          objective: 'Identify what went well and what could be improved.',
        },
        {
          title: 'Next Steps',
          summary: 'Determine the follow-up actions or future projects.',
          objective: 'Plan any subsequent phases or related projects.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Conclude the project with a clear understanding of outcomes and future directions.',
    },
  ],
};
