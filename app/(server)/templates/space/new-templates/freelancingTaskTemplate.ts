import { TemplateSpaceObj } from '../main';

export const freelancingTaskTemplate: TemplateSpaceObj = {
  title: 'Freelancing Task',
  description:
    'A structured template to manage short-term, client-based work with clear deliverables and deadlines.',
  summary:
    'Organize and execute freelance projects effectively by setting expectations, deliverables, and timelines.',
  category: 'Freelance',
  chapters: [
    {
      title: 'Client Brief and Scope Definition',
      summary: 'Clarify the project scope with the client.',
      description:
        'Gather requirements from the client and define the project’s scope. Set clear expectations about deliverables, timelines, and resources. Confirm the client’s objectives and align on the key outcomes.',
      objective:
        'Ensure a clear and mutual understanding of the project scope.',
    },
    {
      title: 'Planning and Scheduling',
      summary: 'Develop a detailed work plan with deadlines.',
      description:
        'Create a project timeline with key milestones. Plan the tasks required to meet the deliverables and ensure all resources are allocated. Set deadlines for feedback and revisions, and communicate the schedule with the client.',
      objective:
        'Develop a clear plan to manage time and resources effectively.',
    },
    {
      title: 'Execution and Deliverables',
      summary: 'Complete the tasks and deliver as agreed.',
      description:
        'Work on the project tasks according to the plan. Ensure that all deliverables meet the client’s expectations and are submitted on time. Maintain communication with the client throughout the execution phase.',
      objective:
        'Deliver high-quality work and meet the agreed-upon deadlines.',
    },
    {
      title: 'Feedback and Revisions',
      summary: 'Incorporate feedback and make necessary adjustments.',
      description:
        'Gather feedback from the client on the deliverables and make revisions as needed. Ensure that the final version meets the client’s requirements and expectations.',
      objective: 'Ensure client satisfaction through iterative improvements.',
    },
    {
      title: 'Project Completion and Payment',
      summary: 'Conclude the project and handle final details.',
      description:
        'Finalize all deliverables and ensure the client is satisfied. Collect payment as agreed upon in the contract. Conduct a brief review of the project to gather insights for future work.',
      objective:
        'Wrap up the project efficiently and gather feedback for future improvements.',
    },
  ],
  objective:
    'Guide freelance professionals in managing client-based projects from start to finish with clear communication, planning, and execution.',
};
