import { TemplateSpaceObj } from '../../main';

export const blogPostTemplate: TemplateSpaceObj = {
  title: 'Blog Post',
  description:
    'A structured template for planning, writing, and promoting a blog post.',
  summary: 'Guide your blog post from concept to publication and beyond.',
  category: 'Content Creation',
  chapters: [
    {
      title: 'Content Planning',
      summary: 'Define the topic, audience, and goals of the blog post.',
      description:
        'Start by outlining the purpose and focus of your blog post.',
      sceneTemplates: [
        {
          title: 'Topic Selection',
          summary: 'Choose a topic that is relevant and engaging.',
          objective:
            'Identify a topic that aligns with your audience’s interests and your blog’s goals.',
        },
        {
          title: 'Target Audience',
          summary: 'Determine who the blog post is intended for.',
          objective:
            'Ensure the content resonates with the specific audience you want to reach.',
        },
        {
          title: 'Key Message',
          summary: 'Define the core message or takeaway of the post.',
          objective:
            'Craft a clear and concise message that will be communicated through the blog post.',
        },
        {
          title: 'SEO Research',
          summary: 'Conduct keyword research to optimize the post.',
          objective:
            'Identify relevant keywords and phrases to improve the post’s search engine visibility.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective: 'Lay a solid foundation by planning the content effectively.',
    },
    {
      title: 'Research',
      summary: 'Gather information and sources for the blog post.',
      description:
        'Conduct research to support the content and enhance credibility.',
      sceneTemplates: [
        {
          title: 'Source Gathering',
          summary: 'Collect reliable sources and data.',
          objective:
            'Ensure the blog post is well-researched and backed by credible information.',
        },
        {
          title: 'Competitive Analysis',
          summary: 'Review similar content from competitors.',
          objective:
            'Understand what’s already out there and find ways to differentiate your post.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective: 'Gather all necessary information to support the blog post.',
    },
    {
      title: 'Outline',
      summary: 'Structure the blog post into sections.',
      description: 'Create an outline that organizes the content logically.',
      sceneTemplates: [
        {
          title: 'Introduction',
          summary: 'Plan the opening of the blog post.',
          objective:
            'Hook the reader with a compelling introduction that sets the stage for the content.',
        },
        {
          title: 'Body',
          summary: 'Break down the main content into sections.',
          objective:
            'Organize the content into clear, digestible sections or headings.',
        },
        {
          title: 'Conclusion',
          summary: 'Plan the closing of the blog post.',
          objective:
            'Wrap up the post with a strong conclusion that reinforces the key message.',
        },
        {
          title: 'Call to Action',
          summary: 'Decide on the action you want readers to take.',
          objective:
            'Encourage readers to engage further, whether it’s sharing, commenting, or clicking a link.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Ensure the blog post is well-organized and flows smoothly from start to finish.',
    },
    {
      title: 'Writing',
      summary: 'Draft the content of the blog post.',
      description:
        'Write the blog post, following the outline and incorporating research.',
      sceneTemplates: [
        {
          title: 'Drafting',
          summary: 'Write the first draft of the blog post.',
          objective:
            'Get all ideas down in writing without worrying about perfection.',
        },
        {
          title: 'Revisions',
          summary: 'Refine and improve the draft.',
          objective:
            'Polish the content, focusing on clarity, readability, and tone.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Create a well-crafted blog post that effectively communicates your message.',
    },
    {
      title: 'Editing and Proofreading',
      summary: 'Ensure the blog post is error-free and polished.',
      description:
        'Review the content for grammar, spelling, and overall quality.',
      sceneTemplates: [
        {
          title: 'Editing',
          summary: 'Make substantive changes to improve the content.',
          objective:
            'Enhance the structure, flow, and clarity of the blog post.',
        },
        {
          title: 'Proofreading',
          summary: 'Check for spelling and grammar errors.',
          objective: 'Ensure the blog post is free of typos and mistakes.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Finalize the blog post to ensure it is ready for publication.',
    },
    {
      title: 'SEO Optimization',
      summary: 'Optimize the blog post for search engines.',
      description: 'Apply SEO best practices to improve the post’s visibility.',
      sceneTemplates: [
        {
          title: 'Keyword Integration',
          summary: 'Incorporate relevant keywords throughout the post.',
          objective:
            'Improve search engine rankings by strategically placing keywords in the content.',
        },
        {
          title: 'Meta Descriptions and Tags',
          summary: 'Write meta descriptions and add tags.',
          objective:
            'Enhance the post’s SEO with well-crafted meta descriptions and relevant tags.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Increase the likelihood of the blog post being discovered by search engines.',
    },
    {
      title: 'Promotion',
      summary: 'Plan how to share and promote the blog post.',
      description:
        'Develop a strategy to maximize the reach and impact of the post.',
      sceneTemplates: [
        {
          title: 'Social Media Sharing',
          summary: 'Plan how and where to share the post on social media.',
          objective:
            'Increase the post’s visibility by sharing it across various social media platforms.',
        },
        {
          title: 'Email Newsletter',
          summary: 'Include the blog post in an email newsletter.',
          objective:
            'Engage your audience by featuring the post in your email marketing.',
        },
        {
          title: 'Content Syndication',
          summary: 'Republish the blog post on other platforms.',
          objective:
            'Expand the post’s reach by sharing it on relevant websites or blogs.',
        },
      ],
      spotlightTemplates: [],
      logTemplates: [],
      objective:
        'Ensure the blog post reaches a wide audience and achieves its objectives.',
    },
  ],
};
