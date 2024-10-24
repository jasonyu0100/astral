import { TemplateSpaceObj } from '../main';

export const designSprintTemplate: TemplateSpaceObj = {
  title: 'Design Sprint',
  description:
    'A fast-paced, structured process for solving problems and testing ideas through design, prototyping, and user testing within a week.',
  summary:
    'Accelerate innovation and decision-making with a focused five-day sprint that covers understanding, ideation, prototyping, and testing.',
  category: 'Design',
  chapters: [
    {
      title: 'Day 1: Understand and Define',
      summary: 'Understand the problem and define the goals.',
      description:
        'Kick off the sprint by mapping out the problem, defining the challenge, and understanding the context. Gather insights from stakeholders and experts. Set a clear goal for what you want to achieve by the end of the sprint.',
      objective:
        'Gain a deep understanding of the problem and establish a clear goal for the sprint.',
    },
    {
      title: 'Day 2: Ideate and Sketch',
      summary: 'Generate and sketch potential solutions.',
      description:
        'Brainstorm a wide range of ideas and solutions. Use sketching techniques to visualize and explore different concepts. Review existing solutions and identify opportunities for innovation. Narrow down ideas to the most promising ones.',
      objective:
        'Explore various solutions and refine ideas to identify the best approach for prototyping.',
    },
    {
      title: 'Day 3: Decide and Storyboard',
      summary: 'Choose the best ideas and create a storyboard.',
      description:
        'Review and critique the ideas from Day 2. Decide on the most viable concept to prototype. Create a detailed storyboard that outlines the user flow and key interactions for the prototype. Plan the prototype’s features and design.',
      objective:
        'Select the most promising solution and plan out the prototype in detail.',
    },
    {
      title: 'Day 4: Prototype',
      summary: 'Build a high-fidelity prototype.',
      description:
        'Develop a realistic, high-fidelity prototype based on the storyboard. Focus on creating a functional and visually appealing model that represents the core features and user interactions. Prepare for user testing by ensuring the prototype is ready for feedback.',
      objective:
        'Create a prototype that effectively represents the solution and is ready for user testing.',
    },
    {
      title: 'Day 5: Test and Learn',
      summary: 'Test the prototype with users and gather feedback.',
      description:
        'Conduct user testing sessions to observe how users interact with the prototype. Collect feedback and insights on usability, functionality, and overall experience. Analyze the results to determine if the solution meets the goals and identify areas for improvement.',
      objective:
        'Evaluate the prototype’s effectiveness and gather actionable insights for refinement.',
    },
  ],
  objective:
    'Accelerate problem-solving and innovation with a structured five-day sprint process that includes understanding the problem, ideating solutions, creating a prototype, and testing with users.',
};
