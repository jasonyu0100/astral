import { TemplateSpaceObj } from '../main';

export const tutorialSpaceTemplate: TemplateSpaceObj = {
  title: '🚀 Project Tutorial Space',
  description:
    'A guided tutorial space introducing you to the main project features: Progress, Chat, Scene, Post, Live, and Reflection. Learn to manage tasks, brainstorm ideas, map out concepts, share updates, and reflect on your progress. Note: This is a tutorial; your real spaces will offer even more flexibility and features.',
  summary:
    'A structured guide to using each workspace feature effectively, setting up your project for seamless creativity and organization.',
  category: 'Tutorial',
  chapters: [
    {
      title: '📋 Progress',
      description:
        'Progress is your task board, organized with "To Do," "In Progress," and "Done" columns. It’s perfect for tracking each phase and planning discussions in other areas, like Chat.',
      objective:
        'Learn to manage tasks by setting up a workflow using Progress to organize, prioritize, and track activities.',
      tasks: [
        {
          title: 'Create Initial Tasks',
          description:
            'Add tasks to "To Do" for each main step of your project, like research, brainstorming, or early development.',
        },
        {
          title: 'Organize by Priority (Optional)',
          description:
            'Reorder tasks by priority to keep focus on the most important steps first.',
        },
        {
          title: 'Track Progress in "In Progress"',
          description:
            'Move tasks to "In Progress" when you start working on them. This visual update helps with focus and informs ongoing ideas in Chat.',
        },
        {
          title: 'Review and Mark as Done',
          description:
            'When finished, move tasks to "Done" for a record of progress that can help with future planning.',
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
      title: '📝 Post',
      description:
        'Post lets you share key insights from Scene. Create posts from scratch or based on scenes to present project highlights and updates in a clear, public format.',
      objective:
        'Learn to create posts from Scene or from scratch to share progress updates and insights with your audience.',
      tasks: [
        {
          title: 'Create a Post from Scene',
          description:
            'Turn elements from Scene into a post that highlights your project’s key points.',
        },
        {
          title: 'Add Content and Media',
          description:
            'Make posts more engaging with images or media that illustrate your ideas.',
        },
      ],
    },
    {
      title: '📺 Live',
      description:
        'Live combines Progress and Post to show your project’s journey, organized by chapters. Track each phase’s status and posts to get a complete view of the workspace.',
      objective:
        'Learn to use Live as an overview of the project’s progression, combining updates from Progress and Post in a real-time, chapter-based format.',
      tasks: [
        {
          title: 'Review Project Progress',
          description:
            'View the project’s overall status in Live, with updates organized by chapters.',
        },
      ],
    },
    {
      title: '🔎 Reflection',
      description:
        'Reflection is your space to review key learnings, note any areas for improvement, and set goals for future projects. This can help with refining your workflow and gathering insights for ongoing learning.',
      objective:
        'Encourage reflection on what you’ve learned in this tutorial space, and set goals for future work.',
      tasks: [
        {
          title: 'List Key Learnings',
          description:
            'Document your key takeaways from using each feature in the tutorial.',
        },
        {
          title: 'Identify Areas for Improvement (Optional)',
          description:
            'Note any areas of the workflow or features that could be improved for your real projects.',
        },
        {
          title: 'Explore Additional Resources',
          description:
            'Consider looking into more advanced resources to deepen your understanding and skills.',
        },
      ],
    },
  ],
  objective:
    '📖 This tutorial guides you through using the main project features in a structured format, preparing you for flexible, real spaces. Explore, document, and refine your ideas as you navigate from brainstorming to sharing your project’s progress.',
};
