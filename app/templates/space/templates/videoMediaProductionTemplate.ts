import { TemplateSpaceObj } from '../main';

export const filmProductionTemplate: TemplateSpaceObj = {
  title: '🎬 Film Production Template',
  description:
    'A structured template for planning, creating, and producing video content, ensuring a smooth workflow from concept to final edit.',
  summary:
    '📹 This template provides a comprehensive framework for managing all phases of video production, including pre-production, production, and post-production.',
  category: '🎥 Media Production',
  chapters: [
    {
      title: '💡 Concept Development',
      description:
        'Start by outlining the main concept of the video. Identify its purpose, key messages, and target audience. Develop a clear vision for the video that aligns with the overall goals of the project.',
      objective:
        '🔍 Establish a solid foundation for the video project that guides all subsequent phases.',
      tasks: [
        {
          title: 'Brainstorm Ideas',
          description:
            'Generate a list of potential video concepts and themes based on the project goals.',
        },
        {
          title: 'Identify Target Audience',
          description:
            'Define who the video is aimed at and consider their interests and preferences.',
        },
        {
          title: 'Outline Key Messages',
          description:
            'Determine the main messages you want to convey through the video.',
        },
        {
          title: 'Research Similar Videos',
          description:
            'Look for existing videos in the same genre for inspiration and understanding of best practices.',
        },
        {
          title: 'Create Vision Statement',
          description:
            'Draft a vision statement that summarizes the purpose and goals of the video project.',
        },
      ],
    },
    {
      title: '✍️ Scriptwriting and Storyboarding',
      description:
        'Draft a detailed script that outlines the dialogue, voiceovers, and key actions in the video. Create a storyboard to visualize scenes and transitions, helping to organize the flow of the video content. Consider shot types, angles, and visual elements during this stage.',
      objective:
        '📖 Ensure that the video has a clear narrative structure and visual plan before filming begins.',
      tasks: [
        {
          title: 'Write the Script',
          description:
            'Create a detailed script that includes all dialogue, voiceovers, and descriptions of actions.',
        },
        {
          title: 'Create Shot List',
          description:
            'Compile a list of shots needed for each scene, detailing angles and movements.',
        },
        {
          title: 'Develop Storyboard',
          description:
            'Visualize the video by creating a storyboard that outlines key scenes and transitions.',
        },
        {
          title: 'Plan Visual Elements',
          description:
            'Consider props, costumes, and backgrounds needed for each scene.',
        },
        {
          title: 'Review and Revise',
          description:
            'Get feedback on the script and storyboard, making necessary adjustments for clarity and flow.',
        },
      ],
    },
    {
      title: '📅 Pre-Production Planning',
      description:
        'Plan all aspects of the production, including casting, location scouting, equipment rental, and scheduling. Create a production timeline that outlines key milestones and deadlines. Ensure all necessary permissions and agreements are in place before filming.',
      objective:
        '🛠️ Prepare thoroughly to facilitate a smooth production process and minimize potential issues.',
      tasks: [
        {
          title: 'Cast Talent',
          description:
            'Identify and secure actors or presenters for the video, conducting auditions if necessary.',
        },
        {
          title: 'Scout Locations',
          description:
            'Find and finalize locations for filming, ensuring they fit the video’s aesthetic and logistics.',
        },
        {
          title: 'Rent Equipment',
          description:
            'Arrange for the rental of necessary filming equipment, including cameras, lighting, and audio gear.',
        },
        {
          title: 'Create Production Schedule',
          description:
            'Draft a timeline that outlines shooting dates, locations, and crew responsibilities.',
        },
        {
          title: 'Obtain Permits',
          description:
            'Secure any necessary permits or permissions required for filming at specific locations.',
        },
      ],
    },
    {
      title: '🎥 Production Phase',
      description:
        'Execute the filming process by capturing all required footage as per the script and storyboard. Ensure effective communication among team members and maintain a flexible approach to adapt to any unforeseen challenges. Capture high-quality audio and video, focusing on lighting and framing.',
      objective:
        '📹 Produce engaging and high-quality video content that aligns with the established vision.',
      tasks: [
        {
          title: 'Set Up Equipment',
          description:
            'Prepare and test all filming equipment, ensuring everything is functioning properly before shooting.',
        },
        {
          title: 'Direct Filming',
          description:
            'Guide actors and crew during the filming process, ensuring that all scenes are captured as planned.',
        },
        {
          title: 'Monitor Quality',
          description:
            'Continuously check audio and video quality during filming to address any issues immediately.',
        },
        {
          title: 'Adapt to Challenges',
          description:
            'Be prepared to make quick decisions and adjustments during the shoot if unexpected issues arise.',
        },
        {
          title: 'Wrap Up Daily Shoots',
          description:
            'Review footage at the end of each day, ensuring all necessary scenes are captured before concluding.',
        },
      ],
    },
    {
      title: '✂️ Post-Production Editing',
      description:
        'Import and organize the footage for editing. Utilize editing software to assemble the video, incorporating cuts, transitions, music, sound effects, and graphics as needed. Pay attention to pacing, visual continuity, and audio quality during the editing process.',
      objective:
        '✨ Create a polished and engaging final video that effectively communicates the intended message.',
      tasks: [
        {
          title: 'Import Footage',
          description:
            'Transfer all recorded footage to the editing software and organize it for easy access.',
        },
        {
          title: 'Edit Video Sequence',
          description:
            'Assemble the video by selecting the best takes and arranging them according to the script and storyboard.',
        },
        {
          title: 'Add Audio and Music',
          description:
            'Incorporate sound effects, voiceovers, and background music to enhance the overall production.',
        },
        {
          title: 'Apply Visual Effects',
          description:
            'Add any necessary graphics, text overlays, or visual effects to improve the video quality.',
        },
        {
          title: 'Finalize Edit',
          description:
            'Review the entire video for pacing and continuity, making final adjustments before export.',
        },
      ],
    },
    {
      title: '🔄 Feedback and Revisions',
      description:
        'Share the edited video with stakeholders for feedback. Analyze the input received and make any necessary revisions to enhance the video. Consider re-editing certain sections or incorporating additional elements based on feedback.',
      objective:
        '✅ Ensure that the final video meets the expectations of stakeholders and resonates with the target audience.',
      tasks: [
        {
          title: 'Present Draft Video',
          description:
            'Share the first cut of the video with stakeholders and gather their feedback.',
        },
        {
          title: 'Collect Feedback',
          description:
            'Document all feedback received from stakeholders to understand their perspectives and preferences.',
        },
        {
          title: 'Make Revisions',
          description:
            'Edit the video based on the feedback, focusing on areas that need improvement.',
        },
        {
          title: 'Review Revised Video',
          description:
            'Share the updated version with stakeholders for additional feedback before finalizing.',
        },
        {
          title: 'Finalize Video',
          description:
            'Complete any last-minute adjustments and prepare the video for final review.',
        },
      ],
    },
    {
      title: '🔍 Final Review and Distribution',
      description:
        'Perform a thorough review of the final video to ensure all elements are aligned with the project goals. Export the video in the required formats for distribution. Develop a distribution plan to share the video through relevant channels, maximizing reach and engagement.',
      objective:
        '🚀 Successfully launch the video and monitor its performance to gauge audience response and engagement.',
      tasks: [
        {
          title: 'Conduct Final Review',
          description:
            'Watch the final video to ensure all elements are complete and meet the project requirements.',
        },
        {
          title: 'Export Video',
          description:
            'Export the final video in the necessary formats for different distribution platforms.',
        },
        {
          title: 'Create Distribution Plan',
          description:
            'Outline a strategy for sharing the video through social media, websites, and other channels.',
        },
        {
          title: 'Monitor Performance',
          description:
            'Track the video’s engagement metrics and audience feedback post-launch to assess success.',
        },
        {
          title: 'Gather Insights',
          description:
            'Collect data and insights from the video performance to inform future projects.',
        },
      ],
    },
  ],
  objective:
    '🧭 Guide teams through the video production process, ensuring each phase is well-planned and executed to produce high-quality media content that effectively engages the audience.',
};
