import { TemplateSpaceObj } from '../main';

export const tutorialSpaceTemplate: TemplateSpaceObj = {
  title: '🚀 Project Tutorial Space',
  description:
    'A guided tutorial space introducing you to the main project features: Objective, Chat, Scene, Updates, and Live. Learn to manage tasks, brainstorm ideas, map out concepts, share updates, and reflect on your progress. Note: This is a tutorial; your real spaces will offer even more flexibility and features.',
  summary:
    'A structured guide to using each workspace feature effectively, setting up your project for seamless creativity and organization.',
  category: 'Tutorial',
  chapters: [
    {
      title: '🎯 Objective',
      description:
        'Objective helps you define clear goals and set expectations for your project, setting the foundation for your workspace.',
      objective:
        'Learn to establish and refine your project goals, providing direction and purpose for your activities.',
      tasks: [
        {
          title: 'Define Project Goals',
          description:
            'Set specific, measurable goals for the project to guide your progress in other areas.',
        },
        {
          title: 'Outline Key Milestones',
          description:
            'Identify major checkpoints to track your project’s advancement and keep your focus aligned.',
        },
      ],
    },
    {
      title: '💬 Chat',
      description:
        'Chat is your collaborative space to brainstorm with AI, jot down ideas, and record voice notes for quick updates. Use it as a central hub to explore thoughts and keep track of ideas that can be further developed in Scene.',
      objective:
        'Learn to use Chat as a space for real-time brainstorming, note-taking, and quick voice memos to capture ideas as they come up.',
      tasks: [
        {
          title: 'Start a Chat with AI',
          description:
            'Chat with AI to brainstorm, clarify goals, or get insights for your tasks in Progress.',
        },
        {
          title: 'Record a Voice Memo',
          description:
            'Use voice memos to capture ideas quickly. These notes can be referenced or expanded upon later.',
        },
        {
          title: 'Note Key Ideas',
          description:
            'Jot down thoughts and use Chat as a creative notepad for brainstorming.',
        },
        {
          title: 'Mark Insights for Scene',
          description:
            'Highlight useful ideas that you’d like to explore visually in Scene.',
        },
      ],
    },
    {
      title: '🌌 Scene',
      description:
        'Scene is your visual space to map ideas from Chat. Move thoughts around, add text, images, and media from YouTube, Spotify, and more to create a dynamic layout.',
      objective:
        'Learn to visually organize ideas, build connections, and create a structure for your project.',
      tasks: [
        {
          title: 'Map Key Ideas from Chat',
          description:
            'Turn main ideas from Chat into nodes in Scene, creating a visual map of connections.',
        },
        {
          title: 'Link Related Ideas',
          description:
            'Connect related nodes to form an organized structure for your project.',
        },
        {
          title: 'Add Media and Notes',
          description:
            'Enhance nodes with images, notes, or external media for a comprehensive visual scene.',
        },
      ],
    },
    {
      title: '📋 Updates',
      description:
        'Updates is where you post key insights from Scene. Create posts to share project highlights and updates in a clear, public format.',
      objective:
        'Learn to create updates from Scene or from scratch to share progress and insights with your audience.',
      tasks: [
        {
          title: 'Create an Update from Scene',
          description:
            'Turn elements from Scene into an update that highlights your project’s key points.',
        },
        {
          title: 'Add Content and Media',
          description:
            'Make updates more engaging with images or media that illustrate your ideas.',
        },
      ],
    },
    {
      title: '📺 Live',
      description:
        'Live combines Progress and Updates to show your project’s journey, organized by chapters. Track each phase’s status and updates to get a complete view of the workspace.',
      objective:
        'Learn to use Live as an overview of the project’s progression, combining updates from Progress and Updates in a real-time, chapter-based format.',
      tasks: [
        {
          title: 'Review Project Progress',
          description:
            'View the project’s overall status in Live, with updates organized by chapters.',
        },
      ],
    },
  ],
  objective:
    '📖 This tutorial guides you through using the main project features in a structured format, preparing you for flexible, real spaces. Explore, document, and refine your ideas as you navigate from brainstorming to sharing your project’s progress.',
};
