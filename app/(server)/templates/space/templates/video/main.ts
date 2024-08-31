import { TemplateSpaceObj } from '../../main';

export const videoProjectTemplate: TemplateSpaceObj = {
  title: 'Video Project',
  description:
    'A structured template for planning and executing a video project.',
  summary: 'Guide your video production from concept to completion.',
  category: 'Video Production',
  chapters: [
    {
      title: 'Concept Development',
      summary: 'Establish the foundation of your video project.',
      description:
        'Define the concept, purpose, and target audience for the video.',
      sceneTemplates: [
        {
          title: 'Video Concept',
          summary: 'Describe the main idea and theme of the video.',
          objective:
            'Create a clear and compelling concept that guides the entire production.',
        },
        {
          title: 'Target Audience',
          summary: 'Identify the intended audience for the video.',
          objective:
            'Ensure the content resonates with the audience and meets their expectations.',
        },
        {
          title: 'Objectives',
          summary: 'Define the goals of the video.',
          objective:
            'Clarify what the video aims to achieve, whether it’s to inform, entertain, or persuade.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Set a strong foundation by clearly defining the video’s concept and purpose.',
    },
    {
      title: 'Pre-Production Planning',
      summary: 'Organize the logistics and plan the production.',
      description:
        'Prepare for the video shoot by planning all necessary elements.',
      sceneTemplates: [
        {
          title: 'Scriptwriting',
          summary: 'Write the script for the video.',
          objective:
            'Create a detailed script that guides the narrative and dialogue.',
        },
        {
          title: 'Storyboarding',
          summary: 'Visualize the scenes of the video.',
          objective:
            'Create a storyboard to plan the visual flow and key shots of the video.',
        },
        {
          title: 'Shot List',
          summary: 'List all the shots needed for the video.',
          objective:
            'Organize and prioritize the shots to ensure an efficient production process.',
        },
        {
          title: 'Location Scouting',
          summary: 'Find and select the locations for the shoot.',
          objective:
            'Choose locations that enhance the visual storytelling and are logistically feasible.',
        },
        {
          title: 'Casting and Crew',
          summary: 'Select the talent and crew for the video.',
          objective:
            'Assemble a team that can bring the video concept to life effectively.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Ensure a smooth production by planning every detail in advance.',
    },
    {
      title: 'Production',
      summary: 'Shoot the video according to the plan.',
      description:
        'Execute the production phase by filming all necessary footage.',
      sceneTemplates: [
        {
          title: 'Filming',
          summary: 'Capture all the scenes and shots.',
          objective:
            'Follow the shot list and storyboard to film the video content.',
        },
        {
          title: 'Directing',
          summary: 'Guide the talent and crew during the shoot.',
          objective:
            'Ensure that performances and shots align with the video’s concept and objectives.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Complete the filming phase with all required footage captured as planned.',
    },
    {
      title: 'Post-Production',
      summary: 'Edit and finalize the video.',
      description:
        'Bring the video to life through editing, sound design, and final touches.',
      sceneTemplates: [
        {
          title: 'Video Editing',
          summary: 'Edit the footage to create the final cut.',
          objective:
            'Combine, trim, and sequence the footage to craft the narrative.',
        },
        {
          title: 'Sound Design',
          summary: 'Add music, sound effects, and audio enhancements.',
          objective:
            'Ensure the audio complements the visuals and enhances the storytelling.',
        },
        {
          title: 'Color Grading',
          summary: 'Adjust the colors and tones of the footage.',
          objective:
            'Create a consistent visual style and mood through color correction.',
        },
        {
          title: 'Final Review',
          summary: 'Review the final cut before release.',
          objective:
            'Ensure the video meets all objectives and is ready for distribution.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Finalize the video to ensure it meets the highest quality standards.',
    },
    {
      title: 'Distribution and Marketing',
      summary: 'Release and promote the video.',
      description:
        'Plan and execute the distribution and marketing strategy for the video.',
      sceneTemplates: [
        {
          title: 'Distribution Channels',
          summary: 'Select the platforms for releasing the video.',
          objective:
            'Choose the most effective channels to reach the target audience.',
        },
        {
          title: 'Marketing Strategy',
          summary: 'Develop a plan to promote the video.',
          objective:
            'Maximize the video’s reach and impact through targeted marketing efforts.',
        },
        {
          title: 'Performance Analysis',
          summary: 'Evaluate the success of the video.',
          objective:
            'Analyze metrics such as views, engagement, and feedback to assess the video’s impact.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Ensure the video reaches its intended audience and achieves its goals.',
    },
  ],
};
