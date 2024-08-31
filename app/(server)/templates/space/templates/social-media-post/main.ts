import { TemplateSpaceObj } from '../../main';

export const socialMediaPostTemplate: TemplateSpaceObj = {
  title: 'Social Media Post',
  description: 'A template for crafting effective social media content.',
  summary: 'Guide your social media post from concept to publication.',
  category: 'Social Media',
  chapters: [
    {
      title: 'Content Planning',
      summary: 'Define the purpose and content of your post.',
      description: 'Start by planning what your post will communicate and why.',
      sceneTemplates: [
        {
          title: 'Post Objective',
          summary: 'Determine the goal of the post.',
          objective:
            'Clarify whether the post aims to inform, engage, promote, or entertain.',
        },
        {
          title: 'Target Audience',
          summary: 'Identify who the post is intended for.',
          objective:
            'Ensure the content resonates with the specific audience you want to reach.',
        },
        {
          title: 'Key Message',
          summary: 'Define the core message or call-to-action.',
          objective:
            'Craft a clear and concise message that aligns with the post’s objective.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Establish a clear plan for what the post will achieve and how it will engage the audience.',
    },
    {
      title: 'Content Creation',
      summary: 'Develop the visuals and copy for the post.',
      description:
        'Create the media and text that will be featured in the post.',
      sceneTemplates: [
        {
          title: 'Visual Content',
          summary: 'Create or select images, videos, or graphics.',
          objective:
            'Ensure visuals are high-quality, relevant, and aligned with the brand’s style.',
        },
        {
          title: 'Copywriting',
          summary: 'Write the text that will accompany the visuals.',
          objective:
            'Craft compelling and engaging copy that enhances the message and prompts action.',
        },
        {
          title: 'Hashtags and Tags',
          summary: 'Select relevant hashtags and user tags.',
          objective:
            'Increase the post’s reach by using strategic hashtags and tagging relevant users or brands.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Create compelling content that is visually appealing and communicates the intended message effectively.',
    },
    {
      title: 'Scheduling and Posting',
      summary: 'Plan and execute the post’s publication.',
      description:
        'Decide when and where to publish the post for maximum impact.',
      sceneTemplates: [
        {
          title: 'Best Time to Post',
          summary: 'Determine the optimal time to publish the post.',
          objective:
            'Maximize engagement by posting when your target audience is most active.',
        },
        {
          title: 'Platform Selection',
          summary: 'Choose the social media platforms for the post.',
          objective:
            'Ensure the content is tailored to the strengths and audiences of selected platforms.',
        },
        {
          title: 'Post Scheduling',
          summary: 'Schedule the post for publication.',
          objective:
            'Use scheduling tools to automate posting at the optimal time.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Ensure the post is published at the right time and on the right platforms to reach the intended audience.',
    },
    {
      title: 'Post-Engagement and Analysis',
      summary: 'Monitor and analyze the post’s performance.',
      description:
        'Track how the post is received and identify areas for improvement.',
      sceneTemplates: [
        {
          title: 'Engagement Tracking',
          summary: 'Monitor likes, shares, comments, and other interactions.',
          objective:
            'Understand how the audience is interacting with the post in real-time.',
        },
        {
          title: 'Performance Analysis',
          summary: 'Evaluate the success of the post.',
          objective:
            'Analyze key metrics to determine if the post met its objectives and identify learnings for future posts.',
        },
        {
          title: 'Feedback and Iteration',
          summary: 'Gather feedback and plan for future posts.',
          objective:
            'Use audience feedback and performance data to refine future social media strategies.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Learn from the post’s performance to improve future social media efforts.',
    },
  ],
};
