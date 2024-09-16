'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useEffect, useState } from 'react';
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
        <a
          href='/conversational/search'
          className='text-sm font-bold text-white sm:text-lg'
        >
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
        className='w-full rounded-[2rem] object-contain shadow-glow'
        alt='Hero Image'
      />
    </div>
  </section>
);

const Question = () => (
  <p className='w-full animate-pulse-slow text-center text-2xl font-bold text-slate-400 sm:text-5xl'>
    "What does creativity look like in an age of AI?"
  </p>
);
const CallToAction = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <section className='flex w-full flex-col items-center px-4 text-center'>
      <video
        src='https://cosmos-creative-storage.s3.ap-southeast-2.amazonaws.com/conversation-to-map.mp4'
        className='w-[3/4] rounded-[3rem] shadow-glow sm:w-3/4'
        autoPlay
        muted
        loop
      />
      <div className='h-[5rem] sm:h-[10rem]' />
      {!isDesktop ? (
        <a
          href={'https://calendly.com/jasonyu0100/15min'}
          target='_blank'
          className='flex h-[3rem] items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500 px-6 sm:h-[5rem] sm:space-x-[1rem] sm:px-[2rem]'
        >
          <p className='text-lg font-bold text-slate-300 sm:text-2xl'>
            schedule a demo...
          </p>
        </a>
      ) : (
        <a
          href={'/conversational/search'}
          className='flex h-[3rem] items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500 px-6 sm:h-[5rem] sm:space-x-[1rem] sm:px-[2rem]'
        >
          <p className='text-lg font-bold text-slate-300 sm:text-2xl'>
            schedule a demo...
          </p>
        </a>
      )}
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
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
  ];

  const [activeFeature, setActiveFeature] = useState(0);

  // Automatically switch features every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

  const handleFeatureClick = (index) => {
    setActiveFeature(index);
  };

  return (
    <section className='grid grid-cols-1 items-center justify-items-center gap-[3rem] p-4 sm:grid-cols-2 sm:p-[3rem]'>
      <div className='flex flex-col space-y-4 sm:space-y-[2rem]'>
        {features.map((feature, idx) => (
          <div
            key={idx}
            className='flex cursor-pointer items-center space-x-4 sm:space-x-[3rem]'
            onClick={() => handleFeatureClick(idx)}
          >
            <div
              className={`flex h-[3rem] w-[3rem] flex-shrink-0 items-center justify-center rounded-full sm:h-[5rem] sm:w-[5rem] ${
                activeFeature === idx ? 'bg-sky-400' : 'bg-blue-500'
              }`}
            >
              <span className='text-lg font-bold text-white sm:text-3xl'>
                {feature.number}
              </span>
            </div>
            <p
              className={`text-lg font-bold sm:text-3xl ${
                activeFeature === idx ? 'text-slate-300' : 'text-slate-500'
              }`}
            >
              {feature.text}
            </p>
          </div>
        ))}
      </div>
      <div className='aspect-[13/9] w-full bg-white p-4 shadow-glow sm:h-[500px] sm:w-[400px]'>
        <img
          src={`portal/architect-f.png`} // You can modify this to change images dynamically if needed
          className='aspect-square w-full'
          alt='Feature Image'
        />
      </div>
    </section>
  );
};

const Map = () => {
  return (
    <div
      className=' hidden h-[800px] w-full flex-col items-center justify-center py-[100px] lg:flex '
      style={{ zoom: 1 }}
    >
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
};

const FooterCTA = () => (
  <footer className='flex w-full items-center justify-center py-8'>
    <a
      href='/register'
      className='flex h-[3rem] items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 px-6 sm:h-[5rem] sm:space-x-[1rem] sm:px-[2rem]'
    >
      <p className='text-lg font-bold text-slate-300 sm:text-2xl'>
        Start your journey today
      </p>
    </a>
  </footer>
);

function PricingSection() {
  const [activeTab, setActiveTab] = useState('yearly');

  return (
    <section className='py-12'>
      <div className='container mx-auto text-center'>
        <h2 className='mb-6 text-3xl font-bold'>Pricing Plans</h2>
        {/* Tab Switcher */}
        <div className='flex w-full flex-col items-center'>
          <div
            role='tablist'
            aria-orientation='horizontal'
            className='h-[80px] w-full max-w-[500px] rounded bg-slate-700 p-[5px]'
            tabIndex='0'
            style={{ outline: 'none' }}
          >
            <button
              type='button'
              role='tab'
              aria-selected={activeTab === 'yearly'}
              className={`h-full w-1/2 rounded font-bold text-slate-300 ${
                activeTab === 'yearly' ? 'bg-slate-950' : ''
              }`}
              tabIndex='0'
              onClick={() => setActiveTab('yearly')}
            >
              Yearly
            </button>
            <button
              type='button'
              role='tab'
              aria-selected={activeTab === 'monthly'}
              className={`h-full w-1/2 rounded font-bold text-slate-300 ${
                activeTab === 'monthly' ? 'bg-slate-950' : ''
              }`}
              tabIndex='-1'
              onClick={() => setActiveTab('monthly')}
            >
              Monthly
            </button>
          </div>

          {/* Pricing Content */}
          <div className='mt-8'>
            {activeTab === 'yearly' && (
              <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                <PricingCard
                  title='Creator'
                  price='$149 / year'
                  description='Best for individual creators looking to organize and execute their ideas.'
                  imageSrc='/portal/producer-f.png'
                />
                <PricingCard
                  title='Team Pro'
                  price='$499 / year'
                  description='Perfect for growing teams that need seamless collaboration and creative workflow management.'
                  imageSrc='/portal/producer-m.png'
                />
                <PricingCard
                  title='Enterprise Scale'
                  price='Custom Pricing'
                  description='Tailored for large organizations with advanced needs. Includes dedicated support, AI-powered insights, and enhanced security.'
                  imageSrc='/portal/personality-m.png'
                />
              </div>
            )}
            {activeTab === 'monthly' && (
              <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                <PricingCard
                  title='Creator'
                  price='$15 / month'
                  description='Ideal for solo creatives to streamline projects and bring ideas to life.'
                  imageSrc='/portal/performer-m.png'
                />
                <PricingCard
                  title='Team Pro'
                  price='$50 / month'
                  description='Built for teams that require advanced collaboration tools and real-time project insights.'
                  imageSrc='/portal/performer-f.png'
                />
                <PricingCard
                  title='Enterprise Scale'
                  price='Custom Pricing'
                  description='Custom solutions with enterprise-grade features and full creative workflow integration.'
                  imageSrc='/portal/personality-m.png'
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ title, price, description, imageSrc }) {
  const [showDescription, setShowDescription] = useState(false);

  const handleToggle = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div
      className='flex-start flex aspect-[11/13] w-full cursor-pointer flex-col bg-white p-6 shadow-md'
      onClick={handleToggle}
    >
      {!showDescription ? (
        // Front view (showing price)
        <>
          <img
            src={imageSrc}
            className='mb-4 aspect-square w-full bg-black'
            alt={title}
          />
          <div className='w-full space-y-1'>
            <p className='text-2xl font-bold'>{title}</p>
            <p className='text-lg font-light'>{price}</p>
          </div>
        </>
      ) : (
        // Back view (showing description)
        <div className='w-full text-center'>
          <p className='text-lg font-semibold italic'>"{description}"</p>
        </div>
      )}
    </div>
  );
}

function FAQSection() {
  const faqData = [
    {
      question: 'What is Astral?',
      answer:
        'Astral is an AI-powered creative workflow platform designed to help creatives, product managers, and startup founders turn their ideas into actionable plans.',
    },
    {
      question: 'How does Astral help me with my creative projects?',
      answer:
        'Astral aggregates ideas from conversations, converts them into tasks, generates timelines, and provides a feedback loop, making it easier to align your team on project goals.',
    },
    {
      question: 'Who is Astral for?',
      answer:
        'Astral is built for creatives, product managers, and startup founders looking for a collaborative platform that grows with their ideas, ideal for generalists who need an all-in-one solution.',
    },
    {
      question:
        'How does Astral differ from other project management tools like Miro or Slack?',
      answer:
        'Unlike other platforms, Astral emphasizes idea aggregation and visual mapping. It takes conversation-first workflows and converts them into real-time insights and actionable tasks.',
    },
    {
      question: 'Is Astral suitable for teams or solo users?',
      answer:
        'Astral is perfect for both solo users and teams. Solo users can organize their ideas and invite others as their projects grow.',
    },
    {
      question: 'How much does Astral cost?',
      answer:
        'Astral is priced at $15 per month, offering an end-to-end solution for creative collaboration.',
    },
    {
      question: 'Can I try Astral for free?',
      answer:
        'Yes, Astral offers a 14-day free trial for you to explore its features.',
    },
    {
      question: 'How does Astral support collaboration?',
      answer:
        'Astral facilitates collaboration by turning conversations into visual maps and actionable insights, allowing teams to work together in real-time.',
    },
  ];

  return (
    <section className='py-12 text-slate-300'>
      <GlassWindowFrame>
        <GlassWindowContents className='container w-full p-[1rem]'>
          <h2 className='mb-6 text-center text-3xl font-bold text-slate-300'>
            Frequently Asked Questions
          </h2>
          <Accordion type='multiple' className='mx-auto max-w-3xl'>
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className='border-b border-slate-300 border-opacity-30'
              >
                <AccordionTrigger className='text-start text-lg font-bold text-slate-500'>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className='text-start text-sm font-light text-slate-500'>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </GlassWindowContents>
      </GlassWindowFrame>
    </section>
  );
}

export default function Page() {
  return (
    <PortalBackground>
      <Header />
      <div className='h-[2rem] sm:h-[5rem]' />
      <HeroSection />
      <div className='h-[2rem] sm:h-[5rem]' />
      <HorizontalDivider />
      <div className='h-[3rem] sm:h-[7rem]' />
      <Question />
      <div className='h-[3rem] sm:h-[7rem]' />
      <Map />
      <CallToAction />
      <div className='h-[5rem] sm:h-[10rem]' />
      <HorizontalDivider />
      <div className='h-[5rem] sm:h-[10rem]' />
      <FeaturesSection />
      <div className='h-[2rem] sm:h-[5rem]' />
      <HorizontalDivider />
      <div className='h-[2rem] sm:h-[5rem]' />
      <ScrollableCardList />
      <div className='h-[2rem] sm:h-[5rem]' />
      <HorizontalDivider />
      <div className='h-[2rem] sm:h-[5rem]' />
      <FAQSection />
      <PricingSection />
      <div className='h-[2rem] sm:h-[5rem]' />
      <HorizontalDivider />
      <div className='h-[2rem] sm:h-[5rem]' />
      <FooterCTA />
      <div className='h-[2rem] sm:h-[5rem]' />
    </PortalBackground>
  );
}
