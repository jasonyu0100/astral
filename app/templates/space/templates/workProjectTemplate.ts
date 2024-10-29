import { TemplateSpaceObj } from '../main';

export const workProjectTemplate: TemplateSpaceObj = {
  title: '💼 Work Project',
  description:
    '📈 A structured template to help manage work-related projects efficiently, focusing on clear objectives, planning, execution, and review.',
  summary:
    '🔍 This template is designed to streamline project workflow with stages for setting objectives, planning, tracking tasks, and reviewing progress.',
  category: '🗂️ Work',
  chapters: [
    {
      title: '🎯 Project Overview',
      description:
        '📌 Begin by defining the project scope, goals, and key success metrics to ensure a clear direction and measurable outcomes.',
      objective:
        'Provide a comprehensive overview that aligns the team on the project’s goals and expected impact.',
      tasks: [
        {
          title: 'Define Project Goals',
          description:
            'Outline the main goals or outcomes you aim to achieve with this project, ensuring they are clear and measurable.',
        },
        {
          title: 'Set Success Metrics',
          description:
            'Identify key performance indicators (KPIs) to measure project success and track progress over time.',
        },
        {
          title: 'Identify Stakeholders',
          description:
            'List key stakeholders involved in this project, noting their roles and any specific input they may require.',
        },
      ],
    },
    {
      title: '📅 Planning & Timeline',
      description:
        '🗓️ Organize the project into phases, define milestones, and establish a realistic timeline to guide the project through completion.',
      objective:
        'Create a structured timeline and set clear phases to ensure the project progresses smoothly and stays on track.',
      tasks: [
        {
          title: 'Outline Project Phases',
          description:
            'Break down the project into distinct phases, detailing what needs to be achieved in each stage.',
        },
        {
          title: 'Establish Milestones',
          description:
            'Define significant milestones to track progress and ensure timely completion of key stages.',
        },
        {
          title: 'Set Deadlines',
          description:
            'Assign deadlines to each phase and milestone to maintain accountability and schedule adherence.',
        },
      ],
    },
    {
      title: '✅ Task Management',
      description:
        '📝 Track specific tasks needed to execute the project, delegate responsibilities, and monitor task completion.',
      objective:
        'Provide a central location for tracking tasks, monitoring progress, and ensuring team alignment.',
      tasks: [
        {
          title: 'List Actionable Tasks',
          description:
            'Break down each project phase into actionable tasks and assign them to team members as needed.',
        },
        {
          title: 'Assign Responsibilities',
          description:
            'Delegate tasks and set clear expectations on deliverables for each team member.',
        },
        {
          title: 'Monitor Progress',
          description:
            'Regularly check in on task completion and provide support where needed to keep the project on track.',
        },
      ],
    },
    {
      title: '📈 Review & Reflection',
      description:
        '🔍 Conduct a review to assess the project’s success, gather feedback, and document key insights for future improvement.',
      objective:
        'Summarize the project’s outcomes, reflect on achievements and areas for improvement, and document lessons learned.',
      tasks: [
        {
          title: 'Evaluate Success Metrics',
          description:
            'Review KPIs and other success metrics to assess if the project met its initial goals.',
        },
        {
          title: 'Gather Team Feedback',
          description:
            'Collect input from team members on what went well and what could be improved for future projects.',
        },
        {
          title: 'Document Lessons Learned',
          description:
            'Record any insights or lessons gained from this project to inform and enhance future work processes.',
        },
      ],
    },
  ],
  objective:
    '📋 This template provides a structured approach to manage work projects effectively, ensuring clear objectives, organized planning, thorough execution, and valuable reflection at the project’s conclusion.',
};
