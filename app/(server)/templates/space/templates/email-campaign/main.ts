import { TemplateSpaceObj } from '../../main';

export const emailCampaignTemplate: TemplateSpaceObj = {
  title: 'Email Campaign',
  description:
    'A structured template for planning, creating, and executing an effective email campaign.',
  summary: 'Guide your email campaign from concept to analysis and refinement.',
  category: 'Marketing',
  chapters: [
    {
      title: 'Campaign Objective',
      summary: 'Define the goal of the email campaign.',
      description: 'Start by establishing clear objectives for the campaign.',
      sceneTemplates: [
        {
          title: 'Campaign Goal',
          summary: 'Determine what you want to achieve with the campaign.',
          objective:
            'Set specific, measurable goals such as lead generation, customer engagement, or sales conversions.',
        },
        {
          title: 'Target Audience',
          summary:
            'Identify the segment of your audience that the campaign is aimed at.',
          objective:
            'Ensure the content and messaging are tailored to the specific needs and interests of your target audience.',
        },
        {
          title: 'Key Message',
          summary: 'Define the primary message or call to action.',
          objective:
            'Craft a compelling message that aligns with the campaign’s goal and resonates with the audience.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Establish a clear purpose and direction for the email campaign.',
    },
    {
      title: 'Audience Segmentation',
      summary: 'Divide your email list into targeted segments.',
      description:
        'Organize your audience based on specific criteria to improve relevance and effectiveness.',
      sceneTemplates: [
        {
          title: 'Segmentation Criteria',
          summary:
            'Choose how to segment your audience (e.g., demographics, behavior, past interactions).',
          objective:
            'Ensure each segment receives content that is most relevant to them.',
        },
        {
          title: 'List Cleaning',
          summary: 'Review and clean your email list before sending.',
          objective:
            'Remove inactive or invalid emails to improve deliverability and engagement rates.',
        },
        {
          title: 'Personalization Strategy',
          summary: 'Plan how to personalize content for each segment.',
          objective:
            'Increase engagement by addressing specific needs, preferences, or behaviors of different segments.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Enhance the effectiveness of your campaign by targeting the right audience with personalized content.',
    },
    {
      title: 'Content Creation',
      summary: 'Develop the content for the email campaign.',
      description:
        'Create compelling and engaging content that aligns with your campaign goals.',
      sceneTemplates: [
        {
          title: 'Email Copy',
          summary: 'Write the text for the emails.',
          objective:
            'Craft clear, concise, and persuasive copy that drives the desired action.',
        },
        {
          title: 'Subject Lines',
          summary: 'Create attention-grabbing subject lines.',
          objective:
            'Improve open rates by writing subject lines that are both intriguing and relevant.',
        },
        {
          title: 'Visual Design',
          summary: 'Design the layout and visuals for the emails.',
          objective:
            'Ensure the email is visually appealing and supports the campaign’s message.',
        },
        {
          title: 'Call to Action (CTA)',
          summary: 'Design effective CTAs that encourage action.',
          objective:
            'Place prominent, clear CTAs that guide recipients towards the campaign’s goal.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Create high-quality email content that captures attention and drives results.',
    },
    {
      title: 'Scheduling and Automation',
      summary: 'Plan and automate the sending of your emails.',
      description:
        'Determine the timing and automation rules for your email campaign.',
      sceneTemplates: [
        {
          title: 'Email Sequence Planning',
          summary: 'Plan the sequence and timing of emails.',
          objective:
            'Organize the campaign into a logical flow, ensuring each email builds on the previous one.',
        },
        {
          title: 'Automation Setup',
          summary: 'Set up automation for sending emails based on triggers.',
          objective:
            'Use marketing automation tools to send emails at the optimal times based on user actions or timing.',
        },
        {
          title: 'A/B Testing',
          summary: 'Plan tests to optimize email performance.',
          objective:
            'Test different versions of emails to determine what works best in terms of subject lines, content, or CTAs.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Ensure the campaign is delivered efficiently and effectively through proper scheduling and automation.',
    },
    {
      title: 'Performance Tracking',
      summary: 'Monitor the results of your email campaign.',
      description:
        'Track key metrics to assess the effectiveness of your campaign.',
      sceneTemplates: [
        {
          title: 'Key Metrics',
          summary:
            'Identify which metrics to track (e.g., open rates, click-through rates, conversions).',
          objective:
            'Measure the success of the campaign against the initial goals and adjust as needed.',
        },
        {
          title: 'Real-Time Monitoring',
          summary: 'Keep an eye on campaign performance as it unfolds.',
          objective:
            'Respond quickly to underperforming emails by making adjustments on the fly.',
        },
        {
          title: 'Feedback Collection',
          summary: 'Gather feedback from recipients if applicable.',
          objective:
            'Understand the audience’s response and identify areas for improvement.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Gain insights into the campaign’s effectiveness and learn how to improve future efforts.',
    },
    {
      title: 'Analysis and Refinement',
      summary: 'Analyze the campaign’s performance and refine your strategy.',
      description:
        'Conduct a thorough review of the campaign and apply learnings to future campaigns.',
      sceneTemplates: [
        {
          title: 'Post-Campaign Review',
          summary:
            'Review overall performance and compare it to the campaign’s objectives.',
          objective:
            'Identify what worked well and what didn’t to improve future campaigns.',
        },
        {
          title: 'Learnings and Recommendations',
          summary:
            'Document key learnings and make recommendations for future campaigns.',
          objective:
            'Apply insights gained from the campaign to enhance the effectiveness of future email marketing efforts.',
        },
        {
          title: 'Continuous Improvement',
          summary:
            'Plan for ongoing improvements based on the campaign’s results.',
          objective:
            'Commit to refining strategies and tactics to continually improve email marketing success.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Use the campaign results to refine and improve future email marketing efforts.',
    },
  ],
  objective: 'Plan, create, and execute a successful email marketing campaign.',
};
