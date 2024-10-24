import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useEffect } from 'react';

const scrollAnimation = {
  display: 'flex',
  animation: 'scroll 30s linear infinite',
};

const containerStyle = {
  display: 'flex',
  overflowX: 'hidden',
  width: '100%',
};

const itemStyle = {
  flex: '0 0 auto',
  marginRight: '50px',
};

const keyframes = `
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}`;

const cardData = [
  {
    title: 'Collaborative Product Launch',
    description:
      'A conversation-driven template for planning and executing a successful product launch, ensuring team alignment and idea aggregation.',
  },
  {
    title: 'Startup Ideation Session',
    description:
      'A dynamic template for brainstorming and developing a strategic startup plan through collaborative discussions.',
  },
  {
    title: 'Engaging Marketing Campaign',
    description:
      'A template for brainstorming, planning, and executing an impactful marketing campaign, leveraging team conversations for creative ideas.',
  },
  {
    title: 'Video Shoot Planning',
    description:
      'A structured template for collaboratively planning and executing a video shoot, incorporating input from all stakeholders.',
  },
  {
    title: 'Blog Post Creation',
    description:
      'A conversation-centric template for planning, writing, and promoting a blog post with team insights.',
  },
  {
    title: 'Social Media Engagement Strategy',
    description:
      'A guide for collaboratively creating an impactful social media strategy based on team discussions.',
  },
  {
    title: 'Event Brainstorming & Planning',
    description:
      'A comprehensive template for collaboratively planning successful events through engaging conversations.',
  },
  {
    title: 'Design Sprint Collaboration',
    description:
      'A guide to running an efficient design sprint, focused on collective brainstorming and feedback.',
  },
  {
    title: 'Pitch Deck Development',
    description:
      'A collaborative template for creating an effective pitch deck, utilizing team insights and conversation.',
  },
  {
    title: 'User Research Insights',
    description:
      'A guide to conducting effective user research, encouraging collaborative discussions to uncover insights.',
  },
];

// React component
export default function ScrollableCardList() {
  useEffect(() => {
    // Dynamically insert the keyframe animation into the document's stylesheet
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }, []);

  return (
    <div style={containerStyle}>
      <div style={scrollAnimation}>
        {/* Duplicate the card list for infinite scroll effect */}
        {cardData.concat(cardData).map((card, index) => (
          <div key={index} style={itemStyle}>
            <GlassWindowFrame
              className='h-[200px] w-[300px]'
              borderFx={borderFx['border-around']}
              roundedFx={roundedFx.rounded}
            >
              <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
                <p className='text-xl font-bold text-slate-300'>{card.title}</p>
                <p className='text-sm font-light text-slate-500'>
                  {card.description}
                </p>
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-10']} />
            </GlassWindowFrame>
          </div>
        ))}
      </div>
    </div>
  );
}
