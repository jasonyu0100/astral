import { TemplateSpaceObj } from '../main';

export const tutorialSpaceTemplate: TemplateSpaceObj = {
  title: '🚀 Project Tutorial Space',
  description:
    'A guided tutorial space introducing you to the main project features: board, chat, scene, and pages. Explore task management, brainstorming, idea mapping, and sharing in a structured walkthrough. Note: This is a tutorial; your real spaces will have even more flexibility and features.',
  summary:
    'A structured guide to using each workspace feature effectively, setting up your project for seamless creativity and organization.',
  category: 'Tutorial',
  chapters: [
    {
      title: '📋 Board',
      description:
        'board is your organizational hub for tasks, structured with "To Do," "In Progress," and "Done" columns. It’s ideal for tracking progress and informing discussions in other areas, like chat.',
      objective:
        'Master task management by setting up a clear workflow, using board to organize, prioritize, and track project activities.',
      tasks: [
        {
          title: 'Create Initial Tasks',
          description:
            'Add initial tasks to "To Do" for each key step of your project. These might include research, brainstorming, and early-stage development.',
        },
        {
          title: 'Organize by Priority (Optional)',
          description:
            'Reorder tasks by priority to maintain focus on the most critical steps first.',
        },
        {
          title: 'Track Progress in "In Progress"',
          description:
            'Move tasks to "In Progress" when you start working on them. This visual progress helps manage your focus and informs ongoing ideas in chat.',
        },
        {
          title: 'Review and Mark as Done',
          description:
            'Once complete, move tasks to "Done" for a record of progress. This can inform future iterations and decisions.',
        },
      ],
    },
    {
      title: '💬 Chat',
      description:
        'chat is an open-ended space for brainstorming with AI, noting ideas, and summarizing insights. Conversations here can provide structure to ideas that evolve into visual plans in scene.',
      objective:
        'Learn to utilize chat as a collaborative space for creative thinking, documentation, and informal project discussions.',
      tasks: [
        {
          title: 'Begin a Chat with AI',
          description:
            'Initiate a conversation with AI to brainstorm ideas, clarify project goals, or explore questions related to your tasks on board.',
        },
        {
          title: 'Note Down Key Thoughts',
          description:
            'Use chat as a space for jotting down ideas as they come up. Think of this as your creative notepad.',
        },
        {
          title: 'Create Summaries (Optional)',
          description:
            'Summarize key points from conversations or brainstorming sessions to easily reference later.',
        },
        {
          title: 'Save Useful Insights for Scene',
          description:
            'Mark ideas or insights that may be useful for visual mapping in scene. This helps streamline your workflow.',
        },
      ],
    },
    {
      title: '🌌 Scene',
      description:
        'scene is a visual space to map ideas from chat, creating a constellation of thoughts. Use it to connect concepts, explore relationships, and identify patterns that help shape your project direction.',
      objective:
        'Learn to visually map ideas for better clarity, and to develop a cohesive structure from brainstorming to implementation.',
      tasks: [
        {
          title: 'Map Key Ideas from Chat',
          description:
            'Take central concepts from chat and create nodes in scene, allowing you to see connections visually.',
        },
        {
          title: 'Link Related Ideas',
          description:
            'Connect related nodes to form relationships and pathways, creating a more organized structure for your project.',
        },
        {
          title: 'Group Ideas into Categories (Optional)',
          description:
            'Create groupings of related ideas to help organize thoughts into specific categories or themes.',
        },
        {
          title: 'Refine Structure and Add Notes',
          description:
            'Add notes to each node, expanding on ideas or adding context to support the bigger picture.',
        },
      ],
    },
    {
      title: '🌍 Pages',
      description:
        'pages serves as the public-facing space for sharing your project’s ideas and insights. Create summaries from scene and build a clear narrative to present your work.',
      objective:
        'Learn to present and share your project ideas in a polished, public-facing format, making them accessible to others.',
      tasks: [
        {
          title: 'Create a Summary from Scene',
          description:
            'Distill key ideas from scene into a concise summary to prepare for public sharing.',
        },
        {
          title: 'Build a Draft of Your Public Page',
          description:
            'Create a structured layout for your public page, ensuring your ideas are clear and engaging.',
        },
        {
          title: 'Add Visuals or Media (Optional)',
          description:
            'Enhance your page with visuals or other media to illustrate concepts and make your content more engaging.',
        },
        {
          title: 'Publish and Gather Feedback',
          description:
            'Once ready, publish your page and invite feedback. Use this to refine future iterations.',
        },
      ],
    },
    {
      title: '🔎 Review and Reflect',
      description:
        'This chapter provides space to reflect on the tutorial, note improvements, and explore additional resources for ongoing learning.',
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
    '📖 This tutorial guides you through using the main project features in a structured format, preparing you for flexible, real spaces. Explore, document, and refine your ideas as you navigate from ideation to public sharing.',
};
