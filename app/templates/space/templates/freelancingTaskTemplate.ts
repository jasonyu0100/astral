import { TemplateSpaceObj } from '../main';

export const freelancingTaskTemplate: TemplateSpaceObj = {
  title: '💼 Freelancing Task',
  description:
    'A structured template to manage short-term, client-based work with clear deliverables and deadlines.',
  summary:
    '📝 Organize and execute freelance projects effectively by setting expectations, deliverables, and timelines.',
  category: 'Freelance',
  chapters: [
    {
      title: '📋 Client Brief and Scope Definition',
      description:
        'Gather requirements from the client and define the project’s scope. Set clear expectations about deliverables, timelines, and resources. Confirm the client’s objectives and align on the key outcomes.',
      objective:
        '🔍 Ensure a clear and mutual understanding of the project scope.',
      tasks: [
        {
          title: 'Conduct Initial Client Meeting',
          description:
            'Discuss project requirements, objectives, and any existing materials or resources.',
        },
        {
          title: 'Draft Project Scope Document',
          description:
            'Create a document outlining the project scope, including deliverables, timelines, and resources needed.',
        },
      ],
    },
    {
      title: '🗓️ Planning and Scheduling',
      description:
        'Create a project timeline with key milestones. Plan the tasks required to meet the deliverables and ensure all resources are allocated. Set deadlines for feedback and revisions, and communicate the schedule with the client.',
      objective:
        '📅 Develop a clear plan to manage time and resources effectively.',
      tasks: [
        {
          title: 'Create a Project Timeline',
          description:
            'Develop a timeline that includes all tasks, milestones, and deadlines.',
        },
        {
          title: 'Identify Required Resources',
          description:
            'List out all resources (tools, personnel, etc.) needed for project execution.',
        },
      ],
    },
    {
      title: '🚀 Execution and Deliverables',
      description:
        'Work on the project tasks according to the plan. Ensure that all deliverables meet the client’s expectations and are submitted on time. Maintain communication with the client throughout the execution phase.',
      objective:
        '🎯 Deliver high-quality work and meet the agreed-upon deadlines.',
      tasks: [
        {
          title: 'Complete Project Tasks',
          description:
            'Execute all planned tasks according to the project timeline.',
        },
        {
          title: 'Regularly Update Client',
          description:
            'Maintain consistent communication with the client regarding progress and any potential issues.',
        },
      ],
    },
    {
      title: '🔄 Feedback and Revisions',
      description:
        'Gather feedback from the client on the deliverables and make revisions as needed. Ensure that the final version meets the client’s requirements and expectations.',
      objective:
        '✅ Ensure client satisfaction through iterative improvements.',
      tasks: [
        {
          title: 'Present Deliverables to Client',
          description:
            'Share the initial deliverables with the client for feedback.',
        },
        {
          title: 'Implement Revisions',
          description:
            'Make necessary changes based on client feedback and resubmit for approval.',
        },
      ],
    },
    {
      title: '🏁 Project Completion and Payment',
      description:
        'Finalize all deliverables and ensure the client is satisfied. Collect payment as agreed upon in the contract. Conduct a brief review of the project to gather insights for future work.',
      objective:
        '💼 Wrap up the project efficiently and gather feedback for future improvements.',
      tasks: [
        {
          title: 'Finalize All Deliverables',
          description:
            'Ensure all project deliverables are complete and meet client expectations.',
        },
        {
          title: 'Send Invoice to Client',
          description:
            'Prepare and send an invoice based on the agreed payment terms.',
        },
        {
          title: 'Conduct Project Review',
          description:
            'Review the project internally to identify lessons learned and areas for improvement.',
        },
      ],
    },
  ],
  objective:
    '🎨 Guide freelance professionals in managing client-based projects from start to finish with clear communication, planning, and execution.',
};
