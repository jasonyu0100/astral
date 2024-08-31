import { TemplateSpaceObj } from '../../main';

export const startupTemplate: TemplateSpaceObj = {
  title: 'Startup Space',
  description: 'A streamlined template for startups.',
  summary: 'Focus on essential areas to kickstart your startup.',
  category: 'Startup',
  chapters: [
    {
      title: 'Vision and Mission',
      summary: 'Define the purpose and long-term goals of the startup.',
      description:
        'Set the direction for your startup with clear vision and mission statements.',
      sceneTemplates: [
        {
          title: 'Vision Statement',
          summary: 'Define the long-term goal and impact of the startup.',
          objective:
            'Create a vision that inspires and guides the startup’s future.',
        },
        {
          title: 'Mission Statement',
          summary:
            'Outline the startup’s purpose and how it will achieve its vision.',
          objective:
            'Set a strategic approach for achieving the startup’s goals.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective: 'Establish a strong foundation for the startup’s direction.',
    },
    {
      title: 'Product Development',
      summary: 'Develop and refine the startup’s product or service.',
      description:
        'Focus on creating a product or service that meets the market’s needs.',
      sceneTemplates: [
        {
          title: 'Product/Service Design',
          summary:
            'Design a product or service tailored to your target market.',
          objective:
            'Ensure your offering is compelling and meets customer needs.',
        },
        {
          title: 'Prototyping and Testing',
          summary: 'Build and test prototypes with real users.',
          objective:
            'Refine the product/service based on user feedback to ensure market fit.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective: 'Develop a product that resonates with your target market.',
    },
    {
      title: 'Market Research',
      summary: 'Understand the market and your potential customers.',
      description:
        'Conduct essential research to inform product development and marketing strategies.',
      sceneTemplates: [
        {
          title: 'Target Audience',
          summary: 'Identify and understand your ideal customers.',
          objective:
            'Ensure the startup’s offering aligns with the needs and wants of the target audience.',
        },
        {
          title: 'Competitive Analysis',
          summary: 'Analyze the competitive landscape.',
          objective:
            'Identify key competitors and position your startup to stand out.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective: 'Use market insights to guide strategic decisions.',
    },
    {
      title: 'Branding and Marketing',
      summary: 'Build a recognizable brand and reach your target audience.',
      description:
        'Create a brand identity and marketing plan that resonates with customers.',
      sceneTemplates: [
        {
          title: 'Brand Identity',
          summary: 'Develop a consistent brand image and message.',
          objective:
            'Create a strong and memorable brand that reflects the startup’s values.',
        },
        {
          title: 'Marketing Strategy',
          summary: 'Plan how to reach and engage your target audience.',
          objective:
            'Use effective marketing channels to attract and retain customers.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Establish a brand that stands out and connects with the audience.',
    },
    {
      title: 'Funding and Financial Planning',
      summary: 'Secure funding and manage the startup’s finances.',
      description: 'Focus on financial sustainability and growth.',
      sceneTemplates: [
        {
          title: 'Funding',
          summary: 'Explore and secure funding options.',
          objective:
            'Raise capital to support the startup’s growth and operations.',
        },
        {
          title: 'Budgeting',
          summary: 'Create and manage a budget for the startup.',
          objective:
            'Ensure efficient use of resources to maintain financial stability.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective: 'Ensure the startup’s financial health and ability to grow.',
    },
  ],
};
