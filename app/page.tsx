'use client';
import { AccordionItem } from '@radix-ui/react-accordion';
import { SetStateAction, useEffect, useState } from 'react';
import ScrollableCardList from './(landing)/horizontal-scroll/main';
import { PortalBackground } from './(portal)/common/background/main';
import { borderFx, glassFx, roundedFx } from './style/data';
import { GlassWindowContents } from './ui/glass/window/contents/main';
import { GlassWindowFrame } from './ui/glass/window/main';
import { GlassWindowPane } from './ui/glass/window/pane/main';
import { HorizontalDivider } from './ui/indicator/divider/horizontal/main';
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from './ui/radix/accordion/main';
import { ctwn } from './utils/cn';

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
          HOME
        </a>
        <a href='/learn' className='text-sm font-bold text-white sm:text-lg'>
          LEARN
        </a>
        <a href='/pricing' className='text-sm font-bold text-white sm:text-lg'>
          PRICING
        </a>
      </nav>
    </div>
    <div className='flex items-center space-x-2 sm:space-x-[3rem]'>
      <a href='/register' className='text-sm font-bold text-white sm:text-lg'>
        Signup
      </a>
      <a
        href='/login'
        className='rounded-full bg-blue-500 p-2 px-4 font-bold text-slate-300 sm:p-[1rem] sm:px-[2rem]'
      >
        Login
      </a>
    </div>
  </header>
);

const HeroSection = () => (
  <section className='grid grid-cols-1 items-center gap-[5rem] px-4 py-[3rem] sm:grid-cols-2'>
    <div className='flex flex-col space-y-4 sm:space-y-[3rem]'>
      <h1 className='text-center font-permanentMarker text-2xl font-bold text-slate-300 sm:text-left sm:text-8xl'>
        Creative spaces that flow
      </h1>
      <p className='text-center text-lg font-light text-slate-400 sm:text-left sm:text-2xl'>
        Astral is the creative mapping platform that grows with you. Whether
        you're a creative visionary, content creator, or startup founder, Astral
        empowers you with the tools to transform ideas into reality, fostering
        insight every step of the way.
      </p>
      <div className='flex flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-x-[3rem] sm:space-y-0'>
        <a
          href='/register'
          className='flex h-[3rem] min-w-[200px] max-w-[400px] flex-grow items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-violet-500 px-4 sm:h-[5rem] sm:px-[1rem]'
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
  <p className='w-full animate-pulse-slow text-center text-3xl font-bold text-slate-400 sm:text-5xl'>
    "What does creativity look like in
    <br /> an age of AI?"
  </p>
);

const CallToAction = () => {
  return (
    <section className='flex w-full flex-col items-center px-4 text-center'>
      <video
        src='https://cosmos-creative-storage.s3.ap-southeast-2.amazonaws.com/demo.mov'
        className='w-[3/4] rounded-[3rem] shadow-glow sm:w-3/4'
        autoPlay
        muted
        controls
        loop
      />
      <div className='h-[3rem] sm:h-[5rem]' />
      <p className='w-full animate-pulse text-center font-extraBold text-lg text-slate-400 sm:text-5xl'>
        Your chats now flow into visual insights
      </p>
      <div className='h-[5rem] sm:h-[10rem]' />
      <a
        href={'/learn'}
        className='flex h-[3rem] items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500 px-6 sm:h-[5rem] sm:space-x-[1rem] sm:px-[2rem]'
      >
        <p className='text-lg font-bold text-slate-300 sm:text-2xl'>
          schedule a look...
        </p>
      </a>
    </section>
  );
};

const Answer = () => (
  <p className='w-full animate-pulse-slow text-center text-xl font-light text-slate-300 sm:text-5xl'>
    Conversations flowing into meaningful insights
  </p>
);

const FeaturesSection = () => {
  const features = [
    {
      text: 'Engage in chats around defined clear objectives',
      number: 1,
    },
    {
      text: 'Visually expand upon your conversations and ideas.',
      number: 2,
    },
    {
      text: 'Work with engaging visual maps in a notebook style experience.',
      number: 3,
    },
  ];

  const [activeFeature, setActiveFeature] = useState(0);

  // Automatically switch features every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  const handleFeatureClick = (index: SetStateAction<number>) => {
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
              conversations
            </p>
          </div>

          <div className='absolute left-[550px] top-[450px] h-[200px] w-[300px]'>
            <p className='animate-pulse-slow text-center text-3xl font-bold text-slate-300'>
              linked ideas
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
        Start your creative journey today
      </p>
    </a>
  </footer>
);

function MembershipSection() {
  const [activeTab, setActiveTab] = useState('yearly');
  const ready = false;

  return (
    <section className={ctwn('py-12', { hidden: ready })}>
      <div className='container mx-auto text-center'>
        <h2 className='mb-6 text-3xl font-bold text-slate-300'>Member Plans</h2>
        <div className='flex w-full flex-col items-center'>
          <div
            role='tablist'
            aria-orientation='horizontal'
            className='h-[80px] w-full max-w-[500px] rounded bg-slate-700 p-[5px]'
            tabIndex={0}
            style={{ outline: 'none' }}
          >
            <button
              type='button'
              role='tab'
              aria-selected={activeTab === 'yearly'}
              className={`h-full w-1/2 rounded font-bold text-slate-300 ${
                activeTab === 'yearly' ? 'bg-slate-950' : ''
              }`}
              tabIndex={0}
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
              tabIndex={0}
              onClick={() => setActiveTab('monthly')}
            >
              Monthly
            </button>
          </div>
          <div className='mt-8'>
            {activeTab === 'yearly' && (
              <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                <MemberPricingCard
                  title='Creator'
                  price='$250 / year'
                  description='Best for individual creators looking to organize and execute their ideas.'
                  imageSrc='/portal/producer-f.png'
                />
                <MemberPricingCard
                  title='Team Pro'
                  price='$100 seat / year'
                  description='Perfect for growing teams that need seamless collaboration and creative workflow management.'
                  imageSrc='/portal/producer-m.png'
                />
                <MemberPricingCard
                  title='Enterprise Scale'
                  price='Custom Pricing'
                  description='Tailored for large organizations with advanced needs. Includes dedicated support, AI-powered insights, and enhanced security.'
                  imageSrc='/portal/personality-m.png'
                />
              </div>
            )}
            {activeTab === 'monthly' && (
              <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                <MemberPricingCard
                  title='Creator'
                  price='$50 / month'
                  description='Ideal for solo creatives to streamline projects and bring ideas to life.'
                  imageSrc='/portal/performer-m.png'
                />
                <MemberPricingCard
                  title='Team Pro'
                  price='$20 seat / month'
                  description='Built for teams that require advanced collaboration tools and real-time project insights.'
                  imageSrc='/portal/performer-f.png'
                />
                <MemberPricingCard
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

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  imageSrc: string;
}

function MemberPricingCard({
  title,
  price,
  description,
  imageSrc,
}: PricingCardProps) {
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
        'Astral is an AI-powered creative workflow platform designed to empower creatives, product managers, and startup founders by turning their ideas into collaborative, actionable plans.',
    },
    {
      question: 'How does Astral help me with my creative projects?',
      answer:
        'Astral helps you and your team by capturing ideas from conversations, turning them into tasks, generating timelines, and providing a supportive feedback loop to align everyone on shared project goals.',
    },
    {
      question: 'Who is Astral for?',
      answer:
        'Astral is built for anyone seeking a collaborative platform—creatives, product managers, startup founders, and teams looking to grow ideas together in an all-in-one environment.',
    },
    {
      question:
        'How does Astral differ from other project management tools like Miro or Slack?',
      answer:
        'Unlike other platforms, Astral focuses on fostering collaboration through idea aggregation and visual mapping, turning conversation-first workflows into real-time insights and collective actions.',
    },
    {
      question: 'Is Astral suitable for teams or solo users?',
      answer:
        'Astral is designed to support both solo creatives and teams. As a solo user, you can organize and build out your ideas, and when ready, easily invite collaborators to join the journey.',
    },
    {
      question: 'How much does Astral cost?',
      answer:
        'Astral is available for $15 per month, providing a comprehensive solution for collaborative creativity and workflow management.',
    },
    {
      question: 'Can I try Astral for free?',
      answer:
        'Yes, Astral offers a 14-day free trial, allowing you and your team to experience its collaborative features and workflow tools.',
    },
    {
      question: 'How does Astral support collaboration?',
      answer:
        'Astral makes collaboration seamless by turning conversations into visual maps and actionable insights. This helps teams work together in real-time, ensuring everyone stays aligned and creative efforts flow naturally.',
    },
  ];

  return (
    <section className='flex w-full flex-col items-center py-12 text-slate-300'>
      <div className='container w-full p-[1rem]'>
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
              <AccordionTrigger className='px-[1rem] text-start text-lg font-bold  text-slate-500'>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className='px-[1rem] text-start text-sm font-light text-slate-500'>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
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
      <div className='h-[5rem] sm:h-[10rem]' />
      <Question />
      <div className='h-[5rem] sm:h-[10rem]' />
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
      {/* <MembershipSection /> */}
      <div className='h-[2rem] sm:h-[5rem]' />
      <HorizontalDivider />
      <div className='h-[2rem] sm:h-[5rem]' />
      <FooterCTA />
      <div className='h-[2rem] sm:h-[5rem]' />
    </PortalBackground>
  );
}
