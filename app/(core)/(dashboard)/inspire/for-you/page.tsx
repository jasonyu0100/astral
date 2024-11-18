'use client';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { AstralBookSparkIcon } from '@/icons/book-spark/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import PrivateAstralPage from '@/utils/private-astral-page';
import { useContext } from 'react';
import { TikTokEmbed } from 'react-social-media-embed';
import {
  ContextForInspireModals,
  InspireModals,
} from '../modal/controller/main';
import {
  ContextForHomeCreateCreateSpace,
  useControllerForHomeCreateCreateSpace,
} from '../modal/create-space/controller/main';

function Page() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const createSpaceController = useControllerForHomeCreateCreateSpace();

  return (
    <>
      <ContextForHomeCreateCreateSpace.Provider value={createSpaceController}>
        <InspireModals>
          <InspireView />
        </InspireModals>
      </ContextForHomeCreateCreateSpace.Provider>
    </>
  );
}

function InspireView() {
  const exploreModalsController = useContext(ContextForInspireModals);
  return (
    <div style={{ height: '100%' }}>
      <GlassWindowFrame
        roundedFx={roundedFx['rounded-container']}
        className='w-full overflow-auto'
      >
        <GlassWindowContents className='flex flex-col overflow-auto'>
          <div className='flex flex-row items-center justify-between space-x-[1rem] px-[2rem] py-[1rem] shadow-glow'>
            <p className='text-3xl font-bold text-slate-300'>
              "A Productive Morning as a Chief of Staff: From Coffee to OKRs and
              Presentation Prep"
            </p>
            <div
              className='flex h-[50px] flex-shrink-0 cursor-pointer flex-row items-center justify-between space-x-[1rem] rounded-full bg-gradient-to-br from-purple-500 to-violet-500 p-[2rem]'
              onClick={() => {
                exploreModalsController.createSpaceController.open();
              }}
            >
              <p className='text-xl font-bold text-slate-300'>
                Create from template
              </p>
              <AstralBookSparkIcon className='h-[2rem] w-[2rem]' />
            </div>
          </div>

          <div className='flex flex-row items-center space-x-[3rem] p-[2rem]'>
            <div className='w-[500px] flex-shrink-0'>
              <TikTokEmbed
                width={500}
                url='https://www.tiktok.com/@renee.zhang/video/7430677496221256978?is_from_webapp=1&sender_device=pc&web_id=7398884792417617415'
              />
            </div>
            <GlassWindowFrame
              className='h-full w-full flex-grow p-[2rem]'
              borderFx={borderFx['border-around']}
              roundedFx={roundedFx['rounded']}
            >
              <GlassWindowContents className='flex flex-col space-y-[1rem]'>
                <p className='font-extraBold text-xl text-slate-300'>
                  Recommendation
                </p>
                <p className='font-light text-slate-300'>
                  This type of content not only appeals to a professional
                  audience seeking practical tips and industry insights but also
                  personalizes your brand, making it approachable and authentic.
                  By leveraging storytelling and showcasing behind-the-scenes
                  moments, you can position your brand as an authority in your
                  niche, foster a loyal community, and ultimately drive growth
                  through increased visibility and audience retention.
                </p>

                <p className='font-extraBold text-xl text-slate-300'>Time</p>
                <p className='font-light text-slate-300'>
                  We estimate that for a duration of 1 minute, you can expect
                  production to take 2 - 3hrs to produce.
                </p>
                <p className='font-extraBold text-xl text-slate-300'>Outcome</p>
                <p className='font-light text-slate-300'>
                  You can expect to receive 300 - 1000 views using this format
                </p>

                <TagList />
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-10']} />
            </GlassWindowFrame>
          </div>
          <HorizontalDivider />
          <div className='p-[2rem]'>
            <p className='text-3xl font-bold text-slate-300'>Transcript</p>
            <Transcript />
          </div>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-20']} />
      </GlassWindowFrame>
    </div>
  );
}

const Transcript = () => {
  const transcriptData = [
    {
      timeRange: '00:00:00 - 00:00:03',
      text: 'Day in my life as a Chief of Staff at a Tech Startup',
    },
    {
      timeRange: '00:00:03 - 00:00:05',
      text: 'This morning I started with a coffee, of course.',
    },
    {
      timeRange: '00:00:05 - 00:00:07',
      text: 'I work at this beautiful co-working space.',
    },
    {
      timeRange: '00:00:07 - 00:00:10',
      text: "And it's just crazy what a difference your environment makes.",
    },
    {
      timeRange: '00:00:10 - 00:00:11',
      text: 'This morning...',
    },
    {
      timeRange: '00:00:11 - 00:00:15',
      text: 'I had to finalize our OKRs to present our company strategy offsite this week.',
    },
    {
      timeRange: '00:00:15 - 00:00:20',
      text: "Who doesn't love OKRs? Grabbed a goji berry tea and quickly cleaned my screen because it was absolutely filthy.",
    },
    {
      timeRange: '00:00:20 - 00:00:22',
      text: 'Then properly got down to business.',
    },
    {
      timeRange: '00:00:22 - 00:00:24',
      text: 'I need this to finalize my presentation for the off-site.',
    },
    {
      timeRange: '00:00:24 - 00:00:27',
      text: "I've been using this tool called Chronicle for my presentations and love it.",
    },
    {
      timeRange: '00:00:27 - 00:00:31',
      text: "If you're like me and would rather spend the time planning out high quality content and storytelling rather than aligning little boxes in PowerPoint...",
    },
    {
      timeRange: '00:00:31 - 00:00:38',
      text: "...then this is for you. This literally took me 5 minutes. It's really changed my game.",
    },
    {
      timeRange: '00:00:38 - 00:00:42',
      text: "Here's me just going through the slides one more time to make sure they're perfect.",
    },
    {
      timeRange: '00:00:42 - 00:00:49',
      text: "And that's how I spent my morning. Thanks for watching 🤭",
    },
  ];
  return (
    <div>
      {transcriptData.map((section, index) => (
        <TranscriptSection
          key={index}
          timeRange={section.timeRange}
          text={section.text}
        />
      ))}
    </div>
  );
};

const TranscriptSection = ({ timeRange, text }) => {
  return (
    <div className='mb-6'>
      <p className='text-sm font-bold text-slate-400'>{timeRange}</p>
      <p className='text-lg text-slate-300'>{text}</p>
    </div>
  );
};

// Sample list of tags

const TagList = () => {
  const tags = [
    'Chief of Staff',
    'Tech Startup',
    'Day in the Life',
    'OKRs',
    'Company Strategy',
    'Co-working Space',
    'Productivity Tips',
  ];
  return (
    <div className='mt-4 flex flex-wrap'>
      {tags.map((tag, index) => (
        <Tag key={index} text={tag} />
      ))}
    </div>
  );
};

const Tag = ({ text }) => {
  return (
    <span className='mb-2 mr-2 inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-medium text-slate-300'>
      {text}
    </span>
  );
};
export default PrivateAstralPage(Page);
