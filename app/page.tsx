'use client';
import { useMediaQuery } from 'react-responsive';
import ScrollableCardList from './(landing)/horizontal-scroll/main';
import { PortalBackground } from './(portal)/common/background/main';
import { borderFx, glassFx, roundedFx } from './style/data';
import { GlassWindowContents } from './ui/glass/window/contents/main';
import { GlassWindowFrame } from './ui/glass/window/main';
import { GlassWindowPane } from './ui/glass/window/pane/main';
import { HorizontalDivider } from './ui/indicator/divider/horizontal/main';

const Header = () => (
  <header className='flex w-full flex-col items-center justify-between space-y-4 p-4 sm:flex-row sm:space-y-0 sm:p-0'>
    <div className='flex items-center space-x-4 sm:space-x-[5rem]'>
      <img
        src={
          process.env.VERSES_MODE === 'false'
            ? '/brand/logo-astral-light.png'
            : '/brand/logo-verses-light.png'
        }
        className='h-[2rem] sm:h-[3rem]'
        alt='Brand Logo'
      />
      <nav className='flex space-x-2 sm:space-x-[3rem]'>
        <a href='/' className='text-sm font-bold text-white sm:text-lg'>
          Home
        </a>
        <a href='/search' className='text-sm font-bold text-white sm:text-lg'>
          Search
        </a>
        <a href='/pricing' className='text-sm font-bold text-white sm:text-lg'>
          Pricing
        </a>
      </nav>
    </div>
    <div className='flex items-center space-x-2 sm:space-x-[3rem]'>
      <a href='/register' className='text-sm font-bold text-white sm:text-lg'>
        Signup
      </a>
      <a
        href='/login'
        className='rounded-full bg-violet-500 p-2 px-4 font-bold text-slate-300 sm:p-[1rem] sm:px-[2rem]'
      >
        Login
      </a>
    </div>
  </header>
);

const HeroSection = () => (
  <section className='grid grid-cols-1 items-center gap-[5rem] px-4 py-[3rem] sm:grid-cols-2'>
    <div className='flex flex-col space-y-4 sm:space-y-[3rem]'>
      <h1 className='text-center font-permanentMarker text-4xl font-bold text-slate-300 sm:text-left sm:text-8xl'>
        Creative spaces that flow
      </h1>
      <p className='text-center text-lg font-light text-slate-400 sm:text-left sm:text-2xl'>
        Astral is the creative collaborative platform that grows with you.
        Whether you're a creative visionary, a product manager, or a startup
        founder, Astral provides you with the tools to transform your ideas into
        reality.
      </p>
      <div className='flex flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-x-[3rem] sm:space-y-0'>
        <a
          href='/register'
          className='flex h-[3rem] min-w-[200px] max-w-[400px] flex-grow items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-sky-500 px-4 sm:h-[5rem] sm:px-[1rem]'
        >
          <span className='text-xl font-bold text-slate-300'>Start now</span>
        </a>
        <a
          href='mailto:business@ouros.media'
          className='min-w-[100px] rounded-full p-2 text-xl font-bold text-slate-300 sm:p-[2rem]'
        >
          Contact Us
        </a>
      </div>
    </div>
    <div className='w-full px-0 sm:px-[2rem]'>
      <img
        src='/landing/hero.png'
        className='w-full rounded-[1rem] object-contain shadow-glow'
        alt='Hero Image'
      />
    </div>
  </section>
);

const CallToAction = () => (
  <section className='flex w-full flex-col items-center px-4 text-center'>
    <p className='animate-pulse-slow text-2xl font-bold text-slate-400 sm:text-5xl'>
      "What does creativity look like in an age of AI?"
    </p>
    <div className='h-[5rem] sm:h-[10rem]' />
    <video
      src='https://cosmos-creative-storage.s3.ap-southeast-2.amazonaws.com/conversation-to-map.mp4'
      className='w-full rounded-[3rem] shadow-glow sm:w-3/4'
      autoPlay
      muted
      loop
    />
    <div className='h-[5rem] sm:h-[10rem]' />
    <a
      href='/search'
      className='flex h-[3rem] items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500 px-6 sm:h-[5rem] sm:space-x-[1rem] sm:px-[2rem]'
    >
      <p className='text-lg font-bold text-slate-300 sm:text-2xl'>
        try mapping...
      </p>
    </a>
  </section>
);

const FeaturesSection = () => (
  <section className='grid grid-cols-1 items-center justify-items-center gap-[3rem] p-4 sm:grid-cols-2 sm:p-[3rem]'>
    <div className='flex flex-col space-y-4 sm:space-y-[2rem]'>
      {[
        {
          text: 'Transform conversations into visual maps for easy idea development.',
          number: 1,
        },
        {
          text: 'Aggregate and synthesize concepts into actionable steps.',
          number: 2,
        },
        {
          text: 'Manage workflow effortlessly with tracking and deadlines.',
          number: 3,
        },
      ].map((feature, idx) => (
        <div
          key={idx}
          className='flex items-center space-x-4 sm:space-x-[3rem]'
        >
          <div
            className={`flex h-[3rem] w-[3rem] flex-shrink-0 items-center justify-center rounded-full sm:h-[5rem] sm:w-[5rem] bg-${feature.number === 1 ? 'sky-400' : 'blue-500'}`}
          >
            <span className='text-lg font-bold text-white sm:text-3xl'>
              {feature.number}
            </span>
          </div>
          <p
            className={`text-lg font-bold sm:text-3xl ${feature.number === 1 ? 'text-slate-300' : 'text-slate-500'}`}
          >
            {feature.text}
          </p>
        </div>
      ))}
    </div>
    <div className='aspect-[13/9] h-[250px] w-full bg-white p-4 shadow-glow sm:h-[500px] sm:w-[400px]'>
      <img
        src='portal/architect-f.png'
        className='aspect-square w-full'
        alt='Feature Image'
      />
    </div>
  </section>
);

const Map = () => (
  <div className='flex h-[600px] w-full flex-col items-center justify-center'>
    <div className='relative h-full w-[1500px]'>
      <div className='absolute z-50 h-full w-full'>
        {/* Visual - Conversational - Connected Box */}
        <div className='absolute left-0 top-[100px] h-[200px] w-[200px] bg-yellow-500 p-4 shadow-glow'>
          {['visual', 'conversational', 'connected'].map((item) => (
            <p key={item} className='font-bold'>
              - {item}
            </p>
          ))}
        </div>

        {/* Glass Window with Quote */}
        <div className='absolute left-[1200px] top-[200px] h-[200px] w-[300px]'>
          <GlassWindowFrame
            className='h-full w-full overflow-hidden'
            roundedFx={roundedFx.rounded}
            borderFx={borderFx['border-around']}
          >
            <GlassWindowContents className='flex h-full w-full animate-pulse-slow flex-col overflow-hidden rounded-lg bg-slate-950 bg-opacity-50 p-4 text-lg font-light text-slate-300'>
              "It’s the iteration of ideas with a goal in mind, that moves a
              project forward."
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          </GlassWindowFrame>
        </div>

        {/* Image Elements */}
        <div className='absolute left-[400px] top-[150px] h-[150px] w-[150px]'>
          <img
            src='/portal/dj-m.png'
            alt='DJ'
            className='aspect-square w-full rounded-lg shadow-glow'
          />
        </div>

        <div className='absolute left-[250px] top-[400px] h-[100px] w-[100px]'>
          <img
            src='/portal/artist-m.png'
            alt='Artist'
            className='h-full w-full rounded-full'
          />
        </div>

        <div className='absolute left-[1000px] top-[400px] h-[150px] w-[150px]'>
          <img
            src='/portal/designer-f.png'
            alt='Designer'
            className='h-full w-full rounded-full'
          />
        </div>

        <div className='absolute left-[700px] top-0 aspect-[16/9] w-[400px] bg-black'>
          <div className='absolute right-[-1.5rem] top-[-0.5rem] h-8 w-8 rounded-full bg-red-500' />
          <img
            src='/portal/producer-m.png'
            alt='Producer'
            className='h-full w-full rounded-lg object-cover shadow-glow'
          />
        </div>

        {/* Text Elements */}
        <div className='absolute left-[300px] top-0 h-[200px] w-[300px]'>
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
      </div>

      {/* SVG Lines */}
      <svg className='absolute h-full w-full opacity-50'>
        {[
          { x1: 150, y1: 250, x2: 300, y2: 450, strokeWidth: 4 },
          { x1: 150, y1: 250, x2: 1075, y2: 475, strokeWidth: 6 },
          { x1: 350, y1: 450, x2: 900, y2: 200, strokeWidth: 2 },
          { x1: 150, y1: 250, x2: 900, y2: 200, strokeWidth: 2 },
          { x1: 900, y1: 200, x2: 1300, y2: 300, strokeWidth: 2 },
          { x1: 1075, y1: 475, x2: 1300, y2: 300, strokeWidth: 2 },
        ].map((line, index) => (
          <line
            key={index}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            className='animate-pulse stroke-slate-300 opacity-30'
            strokeWidth={line.strokeWidth}
          />
        ))}
      </svg>
    </div>
  </div>
);

const Footer = () => (
  <footer className='flex w-full items-center justify-center px-4'>
    <a
      href='/register'
      className='flex animate-pulse-slow rounded-full bg-gradient-to-r from-violet-600 to-purple-500 px-6 py-2 text-lg font-bold text-white sm:px-[3rem] sm:py-[2rem] sm:text-2xl'
    >
      Get started for free
    </a>
  </footer>
);

export default function Page() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <PortalBackground>
      <Header />
      <div className='h-[2rem] sm:h-[5rem]' />
      <HeroSection />
      <div className='h-[2rem] sm:h-[5rem]' />
      <HorizontalDivider />
      <div className='h-[3rem] sm:h-[7rem]' />
      {isDesktop && <Map />}
      <div className='h-[3rem] sm:h-[7rem]' />
      <CallToAction />
      <div className='h-[5rem] sm:h-[10rem]' />
      <HorizontalDivider />
      <div className='h-[5rem] sm:h-[10rem]' />
      <FeaturesSection />
      <div className='h-[2rem] sm:h-[5rem]' />
      <ScrollableCardList />
      <div className='h-[2rem] sm:h-[5rem]' />
      <HorizontalDivider />
      <div className='h-[2rem] sm:h-[5rem]' />
      <Footer />
    </PortalBackground>
  );
}
