import { TemplateSpaceObj } from '../main';

export const videoProductionTemplate: TemplateSpaceObj = {
  title: 'Video Production',
  description:
    'A structured template for managing video production from pre-production to post-production.',
  summary:
    'Organize, plan, and execute your video project with clear steps for pre-production, production, and post-production phases.',
  category: 'Creative',
  chapters: [
    {
      title: 'Pre-Production',
      summary: 'Conceptualize and plan the video project.',
      description:
        'Establish the foundation of your video project by defining the concept, creating a script, and preparing storyboards.',
      objective:
        'Ensure a clear vision and roadmap for the video by finalizing the script and visual plan.',
    },
    {
      title: 'Production',
      summary: 'Execute the filming and capture media.',
      description:
        'Coordinate shooting schedules, manage the crew, and capture all necessary footage according to the storyboard.',
      objective:
        'Successfully capture all required media assets as per the production plan.',
    },
    {
      title: 'Post-Production',
      summary: 'Edit, review, and finalize the video.',
      description:
        'Edit the footage, add visual effects, sound design, and make necessary revisions before finalizing the project.',
      objective:
        'Produce a final, polished video ready for distribution, incorporating feedback and revisions.',
    },
    {
      title: 'Distribution and Marketing',
      summary: 'Plan and execute video distribution.',
      description:
        'Define your distribution strategy, including social media sharing, promotional content, and target audience reach.',
      objective:
        'Ensure the video reaches its intended audience with a clear marketing and distribution plan.',
    },
  ],
  objective:
    'Manage your video production efficiently, from concept to final distribution, ensuring every phase is executed smoothly.',
};
