import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
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
    title: 'Product Launch',
    description:
      'A structured template for planning and executing a successful product launch.',
  },
  {
    title: 'Startup Plan',
    description:
      'A comprehensive template for developing a strategic startup plan.',
  },
  {
    title: 'Marketing Campaign',
    description:
      'A template for planning and executing an effective marketing campaign.',
  },
  {
    title: 'Video Shoot',
    description:
      'A structured template for planning and executing a video shoot project.',
  },
  {
    title: 'Blog Post',
    description: 'A template for planning, writing, and promoting a blog post.',
  },
  {
    title: 'Social Media Strategy',
    description: 'A guide for creating an impactful social media strategy.',
  },
  {
    title: 'Event Planning',
    description: 'A comprehensive template for planning successful events.',
  },
  {
    title: 'Design Sprint',
    description: 'A guide to running an efficient design sprint.',
  },
  {
    title: 'Pitch Deck',
    description: 'A template for creating an effective pitch deck.',
  },
  {
    title: 'User Research',
    description: 'A guide to conducting effective user research.',
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
