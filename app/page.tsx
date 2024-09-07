'use client';
import ScrollableCardList from './(landing)/horizontal-scroll/main';
import { PortalBackground } from './(portal)/common/background/main';
import { AstralSearchIcon } from './icons/search/main';
import { borderFx, glassFx, roundedFx } from './style/data';
import { GlassWindowContents } from './ui/glass/window/contents/main';
import { GlassWindowFrame } from './ui/glass/window/main';
import { GlassWindowPane } from './ui/glass/window/pane/main';
import { HorizontalDivider } from './ui/indicator/divider/horizontal/main';

export default function Page() {
  return (
    <PortalBackground>
      <div className='flex w-full flex-row items-center justify-between'>
        <div className='flex flex-row items-center space-x-[5rem]'>
          <img src='/brand/logo.png' className='h-[3rem]'></img>
          <div className='flex flex-row space-x-[3rem]'>
            <a href='/' className='text-lg font-bold text-white'>
              Home
            </a>
            <a href='/search' className='text-lg font-bold text-white'>
              Search
            </a>
            <a href='/pricing' className='text-lg font-bold text-white'>
              Pricing
            </a>
          </div>
        </div>
        <div className='flex flex-row items-center space-x-[3rem]'>
          <a
            href='/register'
            className='text-bold text-lg font-bold text-white'
          >
            Signup
          </a>
          <a
            href='/login'
            className='rounded-full bg-violet-500 p-[1rem] px-[2rem] font-bold text-slate-300'
          >
            Login
          </a>
        </div>
      </div>
      <div className='h-[5rem]' />
      <div className='grid grid-cols-2 items-center gap-[5rem]'>
        <div className='flex flex-col space-y-[3rem] py-[3rem]'>
          <div className='font-permanentMarker text-8xl font-bold text-slate-300'>
            Creative spaces that flow
          </div>
          <div className='text-2xl font-light text-slate-400'>
            Astral is the creative collaborative platform that grows with you.
            Whether you're a creative visionary, a product manager, or a startup
            founder, Astral provides you with the tools to transform your ideas
            into reality.
          </div>
          <div className='grid w-full grid-cols-2 items-center space-x-[3rem]'>
            <a
              href='/register'
              className='flex h-[5rem] flex-row items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-sky-500 px-[1rem]'
            >
              <p className='text-xl font-bold text-slate-300'>Start now</p>
            </a>
            <a
              href='mailto:business@ouros.media'
              className='flex flex-row rounded-full p-[2rem] text-xl font-bold text-slate-300'
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className='w-full px-[2rem]'>
          <img
            src={'/landing/hero.png'}
            className='w-full rounded-[1rem] object-contain shadow-glow'
          />
        </div>
      </div>
      <div className='h-[5rem]' />
      <HorizontalDivider />
      <div className='h-[7rem]' />
      <div className='flex h-[5rem] w-full flex-row justify-center'>
        <p className='animate-pulse-slow text-center text-5xl font-bold text-slate-400'>
          "What does creativity look like
          <br /> in an age of AI?"
        </p>
      </div>
      <div className='h-[15rem]' />
      <div className='flex h-1/2 w-full flex-col items-center'>
        <div className='relative h-full w-[1500px]'>
          <div className='absolute z-50 h-full w-full'>
            <div className='absolute left-[0px] top-[100px] h-[200px] w-[200px] bg-yellow-500 p-[1rem] shadow-glow'>
              <p className='font-bold'>- visual</p>
              <p className='font-bold'>- conversational</p>
              <p className='font-bold'>- connected</p>
            </div>
            <div className='absolute left-[1200px] top-[200px] h-[200px] w-[300px]'>
              <GlassWindowFrame
                className='h-full w-full overflow-hidden'
                roundedFx={roundedFx.rounded}
                borderFx={borderFx['border-around']}
              >
                <GlassWindowContents className='flex h-full w-full animate-pulse-slow flex-col overflow-hidden rounded-[1rem] bg-slate-950 bg-opacity-50 p-[1rem] text-lg font-light text-slate-300'>
                  "It’s the iteration of ideas with a goal in mind, that moves a
                  project forward."
                </GlassWindowContents>
                <GlassWindowPane glassFx={glassFx['glass-10']} />
              </GlassWindowFrame>
            </div>
            <div className='absolute left-[400px] top-[150px] h-[150px] w-[150px]'>
              <img
                src='portal/dj-m.png'
                className='aspect-square w-full rounded-[1rem] shadow-glow'
              />
            </div>
            <div className='absolute left-[300px] top-[0px] h-[200px] w-[300px]'>
              <p className='animate-pulse-slow text-center text-4xl font-bold text-slate-300'>
                conversational search
              </p>
            </div>
            <div className='absolute left-[550px] top-[450px] h-[200px] w-[300px]'>
              <p className='animate-pulse-slow text-center text-3xl font-bold text-slate-300'>
                scalable ideas
              </p>
            </div>
            <div className='absolute left-[1200px] top-[75px] h-[200px] w-[300px]'>
              <p className='animate-pulse-slow text-3xl font-bold text-slate-300'>
                creative co-pilot
              </p>
            </div>
            <div className='absolute left-[250px] top-[400px] h-[100px] w-[100px]'>
              <img
                src='/portal/artist-m.png'
                className='h-full w-full rounded-full'
              />
            </div>
            <div className='absolute left-[1000px] top-[400px] h-[150px] w-[150px]'>
              <img
                src='/portal/designer-f.png'
                className='h-full w-full rounded-full'
              />
            </div>
            <div className='absolute left-[700px] top-[0px] aspect-[16/9] w-[400px] bg-black'>
              <div className='absolute right-[-1.5rem] top-[-0.5rem] h-[2rem] w-[2rem] rounded-full bg-red-500' />
              <img
                src='/portal/producer-m.png'
                className='h-full w-full rounded-[1rem] object-cover shadow-glow'
              />
            </div>
          </div>
          <svg className='absolute h-full w-full opacity-50'>
            <line
              x1='150'
              y1='250'
              x2='300'
              y2='450'
              className='animate-pulse stroke-slate-300 opacity-30'
              strokeWidth={4}
            />
            <line
              x1='150'
              y1='250'
              x2='1075'
              y2='475'
              className='animate-pulse stroke-slate-300 opacity-30'
              strokeWidth={6}
            />
            <line
              x1='350'
              y1='450'
              x2='900'
              y2='200'
              className='animate-pulse stroke-slate-300 opacity-30'
              strokeWidth={2}
            />
            <line
              x1='150'
              y1='250'
              x2='900'
              y2='200'
              className='animate-pulse stroke-slate-300 opacity-30'
              strokeWidth={2}
            />
            <line
              x1='900'
              y1='200'
              x2='1300'
              y2='300'
              className='animate-pulse stroke-slate-300 opacity-30'
              strokeWidth={2}
            />
            <line
              x1='1075'
              y1='475'
              x2='1300'
              y2='300'
              className='animate-pulse stroke-slate-300 opacity-30'
              strokeWidth={2}
            />
          </svg>
        </div>
      </div>
      <div className='h-[15rem]' />
      <div className='flex h-[10rem] w-full flex-row justify-center'>
        <p className='animate-pulse-slow text-center text-4xl font-bold text-slate-400'>
          ...and how does Astral help?
        </p>
      </div>
      <div className='flex w-full items-center justify-center'>
        <video
          src='/landing/video/conversation-to-map.mov'
          className='w-3/4 rounded-[3rem] shadow-glow'
          autoPlay={true}
          muted={true}
          loop={true}
          controls={false}
        />
      </div>
      <div className='h-[10rem]' />
      <div className='flex h-[10rem] w-full flex-row justify-center'>
        <a
          href='/search'
          className='flex h-[5rem] flex-row items-center justify-center space-x-[1rem] rounded-full bg-gradient-to-r from-blue-500 to-sky-500 px-[2rem]'
        >
          <p className='text-2xl font-bold text-slate-300'>try mapping</p>
          <AstralSearchIcon className='h-[2rem] w-[2rem]' />
        </a>
      </div>
      <div className='h-[5rem]' />
      <HorizontalDivider />
      <div className='h-[10rem]' />
      <div className='grid w-full grid-cols-2 items-center justify-items-center gap-[3rem] p-[3rem]'>
        <div className='flex flex-col space-y-[2rem]'>
          <div className='flex flex-row items-center space-x-[3rem]'>
            <div className='flex h-[5rem] w-[5rem] flex-shrink-0  items-center justify-center rounded-full bg-sky-400'>
              <p className='text-3xl font-bold text-white'>1</p>
            </div>
            <p className='text-3xl font-bold text-slate-300'>
              Transform conversations into visual maps for easy idea
              development.
            </p>
          </div>
          <div className='flex flex-row items-center space-x-[3rem]'>
            <div className='flex h-[5rem] w-[5rem] flex-shrink-0  items-center justify-center rounded-full bg-blue-500'>
              <p className='text-3xl font-bold text-white'>2</p>
            </div>
            <p className='text-3xl font-bold text-slate-500'>
              Aggregate and synthesize concepts into actionable steps.
            </p>
          </div>
          <div className='flex flex-row items-center space-x-[3rem]'>
            <div className='flex h-[5rem] w-[5rem] flex-shrink-0  items-center justify-center rounded-full bg-blue-500'>
              <p className='text-3xl font-bold text-white'>3</p>
            </div>
            <p className='text-3xl font-bold text-slate-500'>
              Manage workflow effortlessly with tracking and deadlines.
            </p>
          </div>
        </div>
        <div className='aspect-[13/9] h-[500px] w-[400px] bg-white p-[1rem] shadow-glow'>
          <img src='portal/architect-f.png' className='aspect-square w-full' />
        </div>
      </div>
      <div className='h-[10rem]' />
      <HorizontalDivider />
      <div className='h-[5rem]' />
      <ScrollableCardList />
      <div className='h-[5rem]' />
      <HorizontalDivider />
      <div className='h-[5rem]' />
      <div className='flex h-[5rem] w-full flex-row items-center justify-center'>
        <p className='animate-pulse-slow text-center text-5xl font-bold text-slate-400'>
          Ready to use Astral?
        </p>
      </div>
      <div className='h-[2rem]' />
      <div className='flex flex-col items-center'>
        <a
          href='/register'
          className=' flex animate-pulse-slow rounded-full bg-gradient-to-r from-violet-600 to-purple-500  px-[3rem] py-[2rem] text-2xl font-bold text-white'
        >
          Get started for free
        </a>
      </div>
      <div className='h-[5rem]' />
    </PortalBackground>
  );
}
