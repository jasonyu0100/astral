import { TemplateSpaceObj } from '../main';

export const projectManagementTemplate: TemplateSpaceObj = {
  title: 'Project Management',
  description:
    'A structured template for managing projects efficiently, from initiation to completion.',
  summary:
    'Organize, plan, and execute projects with clear timelines, milestones, and task ownership.',
  category: 'Management',
  chapters: [
    {
      title: 'Project Kickoff',
      summary: 'Define project goals, scope, and stakeholders.',
      description:
        'Establish the foundation of the project by outlining objectives, key stakeholders, and high-level scope.',
      sceneTemplates: [
        {
          title: 'Project Overview',
          summary: 'Summarize the key objectives and scope of the project.',
          objective:
            'Align the team on the project’s goals, deliverables, and constraints.',
        },
        {
          title: 'Stakeholder Identification',
          summary: 'Identify key stakeholders and their roles.',
          objective:
            'Ensure everyone involved knows who’s responsible for what and who needs to be kept in the loop.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Create a solid project foundation with clearly defined goals and stakeholders.',
    },
    {
      title: 'Task Breakdown',
      summary: 'List and assign tasks to team members.',
      description:
        'Break down the project into tasks, assign owners, and track progress.',
      sceneTemplates: [
        {
          title: 'Task List Creation',
          summary: 'Define tasks required to meet project objectives.',
          objective:
            'Ensure every task is accounted for and aligned with the overall project goals.',
        },
        {
          title: 'Task Assignment',
          summary: 'Assign tasks to relevant team members.',
          objective:
            'Ensure ownership for each task is clear, improving accountability and delivery.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Structure the project with manageable tasks that team members are responsible for.',
    },
    {
      title: 'Milestone Tracking',
      summary: 'Set key project milestones and track progress.',
      description:
        'Define key project milestones and regularly track progress to ensure the project stays on schedule.',
      sceneTemplates: [
        {
          title: 'Milestone Identification',
          summary: 'Set key deliverables and timelines.',
          objective:
            'Break the project into phases and ensure each milestone is aligned with the overall timeline.',
        },
        {
          title: 'Progress Tracking',
          summary: 'Monitor progress and adjust as needed.',
          objective:
            'Track progress against milestones to ensure the project is on course.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Keep the project on track by setting clear milestones and regularly monitoring progress.',
    },
  ],
  objective:
    'Manage your project efficiently with clear goals, tasks, and milestones.',
};
