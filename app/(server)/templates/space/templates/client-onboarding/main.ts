import { TemplateSpaceObj } from '../../main';

export const clientOnboardingTemplate: TemplateSpaceObj = {
  title: 'Client Onboarding',
  description:
    'A structured template for onboarding new clients efficiently and effectively.',
  summary:
    'Guide your clients through a smooth onboarding process, from initial contact to project kickoff.',
  category: 'Client Management',
  chapters: [
    {
      title: 'Welcome and Introduction',
      summary:
        'Start the onboarding process with a warm welcome and clear communication.',
      description:
        'Introduce the client to your business and set the tone for the relationship.',
      sceneTemplates: [
        {
          title: 'Welcome Message',
          summary: 'Send a welcome message to the new client.',
          objective:
            'Create a positive first impression and provide an overview of the onboarding process.',
        },
        {
          title: 'Introduction to Team',
          summary: 'Introduce the client to key team members.',
          objective:
            'Help the client feel connected by introducing them to the people they will be working with.',
        },
        {
          title: 'Client Onboarding Guide',
          summary: 'Provide a guide or roadmap for the onboarding process.',
          objective:
            'Set expectations and give the client a clear understanding of what to expect next.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Establish a strong, positive foundation for the client relationship.',
    },
    {
      title: 'Information Gathering',
      summary:
        'Collect all necessary information from the client to start the project.',
      description:
        'Ensure you have all the details needed to tailor your services to the client’s needs.',
      sceneTemplates: [
        {
          title: 'Client Questionnaire',
          summary: 'Send a detailed questionnaire to the client.',
          objective:
            'Gather essential information about the client’s business, goals, and expectations.',
        },
        {
          title: 'Document Collection',
          summary: 'Request necessary documents and assets from the client.',
          objective:
            'Ensure that you have all the materials needed to begin work efficiently.',
        },
        {
          title: 'Client Preferences',
          summary:
            'Discuss and document the client’s preferences for communication, reporting, and collaboration.',
          objective:
            'Tailor the onboarding process and ongoing interactions to meet the client’s preferences.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Gather all necessary information to ensure the project starts smoothly and meets the client’s needs.',
    },
    {
      title: 'Contract and Agreement',
      summary: 'Formalize the relationship with contracts and agreements.',
      description:
        'Ensure that both parties are aligned on the terms of the partnership.',
      sceneTemplates: [
        {
          title: 'Contract Drafting',
          summary: 'Prepare and send the contract to the client.',
          objective:
            'Clearly outline the scope of work, deliverables, timelines, and payment terms.',
        },
        {
          title: 'Agreement Review',
          summary:
            'Review the contract with the client and address any questions or concerns.',
          objective:
            'Ensure that the client fully understands and agrees to the terms before signing.',
        },
        {
          title: 'Contract Signing',
          summary: 'Finalize the contract with signatures from both parties.',
          objective:
            'Formally establish the business relationship with a signed agreement.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Establish clear and mutually agreed-upon terms to start the project on a solid legal foundation.',
    },
    {
      title: 'Project Kickoff',
      summary: 'Begin the project with a structured kickoff meeting.',
      description:
        'Ensure that everyone is aligned on the project goals, timelines, and responsibilities.',
      sceneTemplates: [
        {
          title: 'Kickoff Meeting Agenda',
          summary: 'Create a detailed agenda for the kickoff meeting.',
          objective:
            'Ensure that all key topics are covered, including project scope, timelines, and roles.',
        },
        {
          title: 'Roles and Responsibilities',
          summary:
            'Clarify the roles and responsibilities of all parties involved.',
          objective:
            'Ensure everyone knows their role in the project and what is expected of them.',
        },
        {
          title: 'Project Timeline',
          summary: 'Present and agree on the project timeline.',
          objective: 'Set clear expectations for deliverables and deadlines.',
        },
        {
          title: 'Communication Plan',
          summary: 'Establish a communication plan for the project.',
          objective:
            'Determine how and when updates will be communicated to the client.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Ensure a successful project kickoff by aligning on all critical aspects of the project.',
    },
    {
      title: 'Ongoing Communication and Support',
      summary:
        'Maintain strong communication and provide ongoing support throughout the project.',
      description:
        'Keep the client informed and engaged throughout the duration of the project.',
      sceneTemplates: [
        {
          title: 'Regular Check-ins',
          summary: 'Schedule regular meetings or check-ins with the client.',
          objective:
            'Provide updates, gather feedback, and ensure the project is on track.',
        },
        {
          title: 'Progress Reports',
          summary: 'Send periodic progress reports to the client.',
          objective:
            'Keep the client informed of the project’s status and any issues that arise.',
        },
        {
          title: 'Issue Resolution',
          summary: 'Handle any issues or concerns that the client may have.',
          objective:
            'Address problems promptly to maintain client satisfaction.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Ensure ongoing client satisfaction by maintaining open and proactive communication.',
    },
    {
      title: 'Project Handover and Feedback',
      summary:
        'Conclude the project with a smooth handover and gather client feedback.',
      description:
        'Ensure the client is satisfied with the final deliverables and gather insights for future improvement.',
      sceneTemplates: [
        {
          title: 'Final Deliverables Review',
          summary:
            'Review and deliver the final project outcomes to the client.',
          objective:
            'Ensure that all deliverables meet the agreed-upon standards and client expectations.',
        },
        {
          title: 'Client Feedback',
          summary:
            'Request feedback from the client on the overall experience.',
          objective:
            'Use client feedback to improve future projects and processes.',
        },
        {
          title: 'Handover Documentation',
          summary:
            'Provide the client with all necessary documentation and materials.',
          objective:
            'Ensure the client has everything they need to continue using the deliverables effectively.',
        },
        {
          title: 'Next Steps and Ongoing Support',
          summary:
            'Discuss any potential next steps or ongoing support arrangements.',
          objective:
            'Explore opportunities for future collaboration and offer continued support if needed.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Conclude the project positively by ensuring the client is satisfied and ready for potential future engagements.',
    },
  ],
  objective:
    'Streamline the client onboarding process to ensure a positive experience and successful project outcomes.',
};
