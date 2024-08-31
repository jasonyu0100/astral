import { TemplateSpaceObj } from '../../main';

export const projectManagementTemplate: TemplateSpaceObj = {
  title: 'Project Management',
  description:
    'A structured template for managing projects from initiation to completion.',
  summary:
    'Guide your project through every phase, ensuring successful delivery and outcomes.',
  category: 'Project Management',
  chapters: [
    {
      title: 'Project Scope',
      summary:
        'Define the objectives, deliverables, and success criteria for the project.',
      description:
        'Start by clearly outlining what the project aims to achieve.',
      sceneTemplates: [
        {
          title: 'Project Objectives',
          summary: 'Identify the main goals of the project.',
          objective:
            'Set clear, measurable objectives that guide the project’s direction and focus.',
        },
        {
          title: 'Deliverables',
          summary: 'List the key deliverables of the project.',
          objective:
            'Ensure all stakeholders are aligned on what the project will produce.',
        },
        {
          title: 'Success Criteria',
          summary: 'Define how success will be measured.',
          objective:
            'Establish specific criteria that will determine whether the project has met its goals.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Clearly define the project’s scope to guide all subsequent activities.',
    },
    {
      title: 'Task Breakdown',
      summary: 'Organize the project into manageable tasks and subtasks.',
      description: 'Break the project down into smaller, actionable steps.',
      sceneTemplates: [
        {
          title: 'Work Breakdown Structure (WBS)',
          summary:
            'Create a hierarchical decomposition of the project into tasks.',
          objective:
            'Ensure that every aspect of the project is accounted for in a detailed work breakdown.',
        },
        {
          title: 'Task Assignment',
          summary: 'Assign tasks to team members.',
          objective:
            'Distribute tasks based on team members’ skills and availability to ensure efficient progress.',
        },
        {
          title: 'Dependencies',
          summary:
            'Identify task dependencies and their impact on the project.',
          objective:
            'Understand how tasks are interrelated to avoid bottlenecks and delays.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Ensure that the project is broken down into clear, actionable tasks with responsible owners.',
    },
    {
      title: 'Timeline and Milestones',
      summary: 'Create a timeline with key milestones to track progress.',
      description:
        'Establish a timeline that guides the project from start to finish.',
      sceneTemplates: [
        {
          title: 'Project Schedule',
          summary: 'Develop a detailed schedule for the project.',
          objective:
            'Outline when each task should be started and completed to keep the project on track.',
        },
        {
          title: 'Milestones',
          summary: 'Identify critical milestones in the project.',
          objective:
            'Mark key dates and deliverables that signify important progress points.',
        },
        {
          title: 'Gantt Chart',
          summary: 'Visualize the project timeline using a Gantt chart.',
          objective:
            'Provide a visual representation of the project’s timeline to easily track progress.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Maintain a clear timeline that ensures the project progresses as planned.',
    },
    {
      title: 'Resource Allocation',
      summary:
        'Assign resources, including personnel, tools, and budget, to tasks.',
      description:
        'Ensure that all necessary resources are allocated to meet project demands.',
      sceneTemplates: [
        {
          title: 'Human Resources',
          summary: 'Assign team members to tasks based on their expertise.',
          objective:
            'Ensure the right people are working on the right tasks at the right time.',
        },
        {
          title: 'Budget Allocation',
          summary: 'Distribute the project budget across tasks and activities.',
          objective:
            'Ensure that financial resources are used efficiently to support project goals.',
        },
        {
          title: 'Tools and Materials',
          summary: 'Identify and allocate necessary tools and materials.',
          objective:
            'Ensure all required tools, software, and materials are available and accessible.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Ensure optimal use of resources to keep the project moving forward efficiently.',
    },
    {
      title: 'Risk Management',
      summary: 'Identify, assess, and plan for potential risks.',
      description:
        'Prepare for potential challenges by managing risks effectively.',
      sceneTemplates: [
        {
          title: 'Risk Identification',
          summary: 'List potential risks that could impact the project.',
          objective:
            'Identify possible obstacles that could hinder project success.',
        },
        {
          title: 'Risk Assessment',
          summary: 'Evaluate the likelihood and impact of each risk.',
          objective:
            'Prioritize risks based on their potential impact and likelihood of occurrence.',
        },
        {
          title: 'Mitigation Strategies',
          summary: 'Develop plans to mitigate identified risks.',
          objective:
            'Ensure that contingency plans are in place to address risks if they occur.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Proactively manage risks to minimize their impact on the project.',
    },
    {
      title: 'Progress Tracking',
      summary: 'Monitor progress and adjust plans as needed.',
      description:
        'Keep the project on track by regularly reviewing progress and making adjustments.',
      sceneTemplates: [
        {
          title: 'Status Reports',
          summary: 'Generate regular status reports for stakeholders.',
          objective:
            'Provide updates on project progress, including completed tasks and upcoming milestones.',
        },
        {
          title: 'Performance Metrics',
          summary: 'Track key performance indicators (KPIs).',
          objective:
            'Measure the project’s progress using specific, quantifiable metrics.',
        },
        {
          title: 'Task Completion',
          summary: 'Track the completion of tasks and milestones.',
          objective:
            'Ensure that tasks are completed on time and milestones are achieved as scheduled.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Maintain visibility into project progress and make necessary adjustments to stay on track.',
    },
    {
      title: 'Post-Project Review',
      summary:
        'Analyze the project’s outcomes and gather insights for future projects.',
      description:
        'Reflect on the project’s successes and challenges to improve future project management.',
      sceneTemplates: [
        {
          title: 'Final Deliverables Review',
          summary:
            'Ensure all deliverables meet the project’s objectives and quality standards.',
          objective:
            'Confirm that the project outputs align with the initial goals and are of high quality.',
        },
        {
          title: 'Lessons Learned',
          summary: 'Document key lessons learned during the project.',
          objective:
            'Identify what worked well and what could be improved for future projects.',
        },
        {
          title: 'Stakeholder Feedback',
          summary: 'Gather feedback from stakeholders and team members.',
          objective:
            'Understand the perspectives of those involved to refine future project approaches.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Conclude the project with a thorough review to learn and improve for future initiatives.',
    },
  ],
};
