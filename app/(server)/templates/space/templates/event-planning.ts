import { TemplateSpaceObj } from '../main';

export const eventPlanningTemplate: TemplateSpaceObj = {
  title: 'Event Planning',
  description:
    'A comprehensive template for organizing and executing events, from initial concept to post-event analysis.',
  summary:
    'Plan and manage events with clear steps for pre-event preparation, event execution, and post-event follow-up.',
  category: 'Event Management',
  chapters: [
    {
      title: 'Event Concept and Goals',
      summary: 'Define the purpose, goals, and concept of the event.',
      description:
        'Establish the event’s objectives, target audience, and overall theme. Define what success looks like and what metrics will be used to measure it.',
      objective:
        'Develop a clear vision for the event, ensuring alignment with objectives and audience expectations.',
    },
    {
      title: 'Event Budgeting and Logistics',
      summary: 'Create a detailed event budget and logistics plan.',
      description:
        'Plan the event’s budget, including venue costs, catering, marketing, and equipment. Manage logistics such as vendor contracts, permits, and transportation.',
      objective:
        'Ensure a well-organized event by meticulously planning budget and logistical requirements.',
    },
    {
      title: 'Marketing and Promotion',
      summary: 'Promote the event to attract attendees.',
      description:
        'Develop a marketing strategy to reach your target audience, including social media promotion, email campaigns, and partnerships. Track RSVPs and manage ticket sales if applicable.',
      objective:
        'Attract the desired number of attendees by effectively promoting the event through various channels.',
    },
    {
      title: 'Event Execution',
      summary: 'Oversee the smooth running of the event.',
      description:
        'Coordinate with vendors, manage staff, and ensure that the event schedule runs smoothly. Handle any on-site issues and keep the event running on time.',
      objective:
        'Ensure the event runs smoothly, creating a positive experience for all attendees.',
    },
    {
      title: 'Post-Event Analysis and Follow-Up',
      summary: 'Analyze the event’s success and follow up with attendees.',
      description:
        'Collect feedback from attendees, review event performance based on the defined goals, and analyze what worked and what can be improved. Send thank-you notes or follow-up communications.',
      objective:
        'Evaluate the event’s success and gather insights for future improvements, ensuring strong relationships with attendees and partners.',
    },
  ],
  objective:
    'Successfully plan, execute, and review events of any scale with detailed preparation, execution, and analysis phases.',
};
