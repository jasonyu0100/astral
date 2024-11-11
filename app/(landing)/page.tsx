'use client';
import { LandingBackground } from '@/(portal)/common/background/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';
import { AstralChatIndicatorIcon } from '@/icons/chat/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';

import { AstralCalendarIcon } from '@/icons/calendar/main';
import { ctwn } from '@/utils/cn';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@radix-ui/react-accordion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ScrollableCardList from './horizontal-scroll/main';

const Header = () => (
  <header className='flex w-full flex-col items-center justify-between space-y-4 p-4 sm:flex-row sm:space-y-0 sm:p-0'>
    <div className='flex items-center space-x-4 sm:space-x-[5rem]'>
      <img
        src={'/brand/logo-astral-light.png'}
        className='h-[2rem] sm:h-[3rem]'
        alt='Brand Logo'
      />
      <nav className='flex space-x-2 sm:space-x-[3rem]'>
        <Link
          href='/'
          className='text-sm font-bold uppercase text-white sm:text-lg'
        >
          HOME
        </Link>
        <Link
          href='https://www.youtube.com/@astral-fun'
          target='_blank'
          className='text-sm font-bold uppercase text-white sm:text-lg'
        >
          LEARN
        </Link>
        <Link
          href='/pricing'
          className='text-sm font-bold uppercase text-white sm:text-lg'
        >
          PRICING
        </Link>
      </nav>
    </div>
    <div className='flex items-center space-x-2 sm:space-x-[3rem]'>
      <Link
        href='/register'
        className='text-sm font-bold text-white sm:text-lg'
      >
        Signup
      </Link>
      <Link
        href='/login'
        className='rounded-full bg-blue-500 p-2 px-4 font-bold text-slate-300 sm:p-[1rem] sm:px-[2rem]'
      >
        Login
      </Link>
    </div>
  </header>
);

const HeroSection = () => {
  return (
    <section className='grid grid-cols-1 items-center gap-[5rem] p-[1rem] sm:grid-cols-2'>
      <div className='flex flex-col space-y-4 sm:space-y-[3rem]'>
        <h1 className='text-center font-extraBold text-2xl text-slate-300 sm:text-left sm:text-8xl'>
          Your Creative Journey, Streamlined
        </h1>
        <p className='text-center text-lg font-light text-slate-400 sm:text-left sm:text-2xl'>
          Astral is your creative studio. Designed with creatives, artists, and
          managers in mind, Astral is creative work management on another level.
          Connect, collaborate, and let open-ended creativity turn inspiration
          into reality.
        </p>
        <div className='flex flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-x-[3rem] sm:space-y-0'>
          <Link
            href='/register'
            className='flex h-[4rem] min-w-[200px] max-w-[400px] flex-grow animate-pulse-slow items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-violet-500 px-4 sm:h-[6rem] sm:px-[1rem]'
          >
            <span className='font-extraBold text-2xl text-slate-300'>
              Start now
            </span>
          </Link>
          <Link
            href='mailto:jason@astral.fun'
            className='min-w-[100px] rounded-full p-2 text-2xl font-bold text-slate-300 sm:p-[2rem]'
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className='w-full px-0 sm:px-[2rem]'>
        <img
          src='/landing/hero/2.png'
          className='w-full rounded-[1rem] object-contain shadow-glow'
          alt='Hero Image'
        />
      </div>
    </section>
  );
};

const Question = () => (
  <p className='w-full animate-pulse-slow text-center text-3xl font-bold text-slate-400 sm:text-5xl'>
    "What does creativity look like in
    <br /> an age of AI?"
  </p>
);

const CallToAction = () => {
  return (
    <section className='flex w-full flex-col items-center px-4 text-center'>
      <p className='w-full animate-pulse text-center font-extraBold text-lg text-slate-400 sm:text-5xl'>
        Transforming your ideas into visual moments
      </p>
      <div className='h-[3rem] sm:h-[5rem]' />
      {/* <video
        src='https://cosmos-creative-storage.s3.ap-southeast-2.amazonaws.com/demo.mov'
        className='w-[3/4] rounded-[3rem] shadow-glow sm:w-3/4'
        autoPlay
        muted
        controls
        loop
      /> */}
      <iframe
        src='https://www.youtube.com/embed/3m51tfnCrWk'
        className='aspect-video w-[3/4] flex-shrink-0 rounded-[1rem] shadow-glow sm:w-3/4'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='YouTube video'
      />
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      text: 'Create collaborative spaces with built-in tools to track progress and goals.',
      number: 1,
      image: '/landing/hero/1.png',
    },
    {
      text: 'Map out ideas visually for a deeper understanding and alignment.',
      number: 2,
      image: '/landing/hero/3.png',
    },
    {
      text: 'Engage in focused chats that drive creativity and connection.',
      number: 3,
      image: '/landing/hero/4.png',
    },
    {
      text: 'Gather valuable public feedback on your spaces to refine and grow.',
      number: 4,
      image: '/landing/hero/5.png',
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
                activeFeature === idx ? 'text-slate-300' : 'text-slate-400'
              }`}
            >
              {feature.text}
            </p>
          </div>
        ))}
      </div>
      <img
        src={features[activeFeature].image} // Dynamically set the image based on activeFeature
        className='w-full rounded-[1rem] shadow-glow'
        alt='Feature Image'
      />
    </section>
  );
};

const Map = () => {
  return (
    <div
      className=' hidden h-[700px] w-full flex-col items-center justify-center py-[100px] lg:flex '
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
    <Link
      href='/register'
      className='flex h-[3rem] items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-500 px-6 sm:h-[5rem] sm:space-x-[1rem] sm:px-[2rem]'
    >
      <p className='text-lg font-bold text-slate-300 sm:text-2xl'>
        Start your creative journey today
      </p>
      <AstralArrowForwardIcon />
    </Link>
  </footer>
);

function MembershipSection() {
  const [activeTab, setActiveTab] = useState('yearly');
  const ready = false;

  return (
    <section className={ctwn('py-12', { hidden: ready })}>
      <div className='container mx-auto'>
        <h2 className='mb-6 text-center text-3xl font-bold text-slate-300'>
          Member Plans
        </h2>
        <br />
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
          <br />
          <div className='mt-8'>
            {activeTab === 'yearly' && (
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                <MemberPricingCard
                  title='Community'
                  price='Free'
                  description='Ideal for solo creatives looking to get started with basic project management.'
                  imageSrc='/portal/personality-f.png'
                />
                {/* <MemberPricingCard
                  title='Standard'
                  price='$100 / year'
                  description='Best for individual creators looking to organize and execute their ideas.'
                  imageSrc='/portal/producer-f.png'
                />
                <MemberPricingCard
                  title='Pro'
                  price='$250 / year'
                  description='Perfect for growing teams that need seamless collaboration and creative workflow management.'
                  imageSrc='/portal/producer-m.png'
                /> */}
                <MemberPricingCard
                  title='Enterprise Scale'
                  price='Custom Pricing'
                  description='Tailored for large organizations with advanced needs. Includes dedicated support, AI-powered insights, and enhanced security.'
                  imageSrc='/portal/personality-m.png'
                />
              </div>
            )}
            {activeTab === 'monthly' && (
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                <MemberPricingCard
                  title='Community'
                  price='Free'
                  description='Ideal for solo creatives looking to get started with basic project management.'
                  imageSrc='/portal/personality-f.png'
                />
                {/* <MemberPricingCard
                  title='Standard'
                  price='$10 / month'
                  description='Ideal for solo creatives to streamline projects and bring ideas to life.'
                  imageSrc='/portal/performer-m.png'
                />
                <MemberPricingCard
                  title='Pro'
                  price='$25 / month'
                  description='Built for teams that require advanced collaboration tools and real-time project insights.'
                  imageSrc='/portal/performer-f.png'
                /> */}
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
      className='flex aspect-[11/13] w-full cursor-pointer flex-col bg-white p-6 shadow-md'
      onClick={handleToggle}
    >
      {!showDescription ? (
        <div className='flex w-full flex-col'>
          <img
            src={imageSrc}
            className='mb-4 aspect-square w-full bg-black'
            alt={title}
          />
          <p className='text-3xl font-extrabold'>{title}</p>
          <p className='text-xl font-bold'>{price}</p>
        </div>
      ) : (
        <div className='flex h-full w-full items-center justify-center text-center'>
          <p className='text-2xl font-semibold italic'>"{description}"</p>
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
        'Astral is an AI-powered creative workflow platform that serves as a conversational co-pilot for creatives, product managers, and startup founders, transforming their ideas into collaborative, actionable plans.',
    },
    {
      question: 'How does Astral assist with my creative projects?',
      answer:
        'Astral acts as your conversational co-pilot, capturing ideas from discussions, converting them into tasks, generating timelines, and providing a supportive feedback loop. This ensures that everyone in your team stays aligned on shared project goals.',
    },
    {
      question: 'Who is Astral designed for?',
      answer:
        'Astral is ideal for anyone seeking a collaborative platform—creatives, product managers, startup founders, and teams looking to develop and grow ideas together through engaging conversations in an integrated environment.',
    },
    {
      question:
        'How does Astral differ from other project management tools like Miro or Slack?',
      answer:
        'Unlike traditional project management tools, Astral emphasizes collaboration through idea aggregation and visual mapping, leveraging conversational inputs to turn discussions into real-time insights and actionable collective actions.',
    },
    {
      question: 'Is Astral suitable for teams or individual users?',
      answer:
        'Astral is designed for both solo creatives and teams. As a solo user, you can leverage Astral as your personal co-pilot to organize and develop your ideas, and when ready, easily invite collaborators to join your journey.',
    },
    {
      question: 'What is the cost of using Astral?',
      answer:
        'Astral is available for $15 per month, providing a comprehensive solution that includes the conversational co-pilot feature for enhanced collaborative creativity and workflow management.',
    },
    {
      question: 'Can I try Astral for free?',
      answer:
        'Yes! Astral offers a 14-day free trial, allowing you and your team to experience the power of its conversational co-pilot features and collaborative tools without any commitment.',
    },
    {
      question: 'How does Astral facilitate collaboration?',
      answer:
        'Astral enhances collaboration by acting as a conversational co-pilot, transforming discussions into visual maps and actionable insights. This empowers teams to work together in real-time, ensuring that everyone remains aligned while creativity flows naturally.',
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
              className='border-b border-slate-500 border-opacity-30 p-[1rem]'
            >
              <AccordionTrigger className='text-decoration-none px-[1rem] text-start text-lg  font-bold text-slate-400 hover:no-underline focus:no-underline'>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className='p-[1rem] text-start text-sm font-light text-slate-400'>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function ChatWithAstralCTA() {
  return (
    <Link
      href={'/chat'}
      className='flex h-[3rem] items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 px-6 sm:h-[5rem] sm:space-x-[1rem] sm:px-[2rem]'
    >
      <p className='text-lg font-bold text-slate-300 sm:text-2xl'>
        chat with astral
      </p>
      <AstralChatIndicatorIcon />
    </Link>
  );
}

function SocialFooter() {
  return (
    <footer className='flex items-center justify-center space-x-6 text-slate-300'>
      <Link
        href='https://linkedin.com/company/astral-fun'
        target='_blank'
        rel='noopener noreferrer'
        className='hover:text-slate-100'
      >
        <FaLinkedin size={24} />
      </Link>
      <Link
        href='https://www.youtube.com/@astral-fun'
        target='_blank'
        rel='noopener noreferrer'
        className='hover:text-slate-100'
      >
        <FaYoutube size={24} />
      </Link>
    </footer>
  );
}

function SocialProof() {
  return (
    <div className='flex w-full flex-col space-y-[1rem] px-[3rem] py-[1rem]'>
      <p className='font-bold text-slate-300'>As featured on...</p>
      <div className='flex w-full flex-row items-center space-x-[2rem]'>
        <Link
          href='https://www.producthunt.com/products/astral-5'
          target='_blank'
        >
          <img src='/landing/product-hunt.png' className='w-[100px]' />
        </Link>
        <Link
          href='https://www.smh.com.au/technology/from-side-hustle-to-buzzy-ai-start-up-build-club-raises-1-8-million-20241010-p5khd6.html'
          target='_blank'
        >
          <img src='/landing/build-club.png' className='w-[200px]' />
        </Link>
        {/* <img src='/landing/ofa.jpg' className='w-[100px] rounded-full' /> */}
      </div>
    </div>
  );
}

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Content Creator',
      text: 'Astral has transformed the way I organize my creative projects. The visual mapping and AI chat make brainstorming so much smoother!',
      image: '/landing/stock/male-1.png',
    },
    {
      name: 'Sam Patel',
      role: 'Creative',
      text: 'Astral helped me map my ideas visually, which was incredibly helpful for aligning my project goals and keeping track of progress.',
      image: '/landing/stock/male-2.png',
    },
    {
      name: 'Maria Wodobo',
      role: 'Founder',
      text: 'Using Astral feels like having an entire creative team at my fingertips. The tools are intuitive, and the workflow management is a game-changer!',
      image: '/landing/stock/female-2.png',
    },
  ];

  return (
    <section className='px-4 py-16'>
      <h2 className='mb-10 text-center text-4xl font-bold text-slate-300'>
        What Our Users Say
      </h2>
      <div className='flex flex-row flex-wrap items-center justify-center gap-8 px-4'>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className='flex aspect-video h-[250px] w-[320px] flex-col justify-between rounded-lg border border-slate-300 border-opacity-30 bg-slate-400 bg-opacity-30 p-6 shadow-lg'
          >
            <p className='mb-4 animate-pulse-slow text-lg font-light text-slate-400 '>
              "{testimonial.text}"
            </p>
            <div className='flex items-center space-x-4'>
              <img
                className='h-12 w-12 rounded-full'
                src={testimonial.image}
                alt={`${testimonial.name}'s profile`}
              />
              <p className='text-md text-slate-400'>
                {testimonial.name}, {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

function ScheduleBooking() {
  return (
    <div className='flex flex-row space-x-[1rem]'>
      <Link
        href={'https://calendly.com/jasonyu0100/30min'}
        target='_blank'
        className='flex h-[3rem] items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500 px-6 sm:h-[5rem] sm:space-x-[1rem] sm:px-[2rem]'
      >
        <p className='text-lg font-bold text-slate-300 sm:text-2xl'>
          schedule a booking
        </p>
        <AstralCalendarIcon />
      </Link>
    </div>
  );
}

function Page() {
  return (
    <LandingBackground>
      <Header />
      <div className='h-[2rem] sm:h-[5rem]' />
      <HeroSection />
      <SocialProof />
      <div className='h-[2rem] sm:h-[5rem]' />
      <HorizontalDivider />
      <div className='h-[2rem] sm:h-[5rem]' />
      <Question />
      <div className='h-[2rem] sm:h-[5rem]' />
      <Map />
      <div className='h-[3rem] sm:h-[5rem]' />
      <CallToAction />
      <div className='h-[2rem] sm:h-[5rem]' />
      <Testimonials />
      <div className='h-[2rem] sm:h-[5rem]' />
      {/* <ScheduleBooking />
      <div className='h-[2rem] sm:h-[5rem]' /> */}
      <HorizontalDivider />
      <div className='h-[2rem] sm:h-[5rem]' />
      <FeaturesSection />
      <div className='h-[2rem] sm:h-[5rem]' />
      <HorizontalDivider />
      <div className='h-[2rem] sm:h-[5rem]' />
      <ScrollableCardList />
      <div className='h-[2rem] sm:h-[5rem]' />
      <HorizontalDivider />
      <div className='h-[2rem] sm:h-[5rem]' />
      <FAQSection />
      <div className='h-[2rem] sm:h-[5rem]' />
      <HorizontalDivider />
      <div className='h-[2rem] sm:h-[5rem]' />
      <MembershipSection />
      <div className='h-[2rem] sm:h-[5rem]' />
      <HorizontalDivider />
      <div className='h-[2rem] sm:h-[5rem]' />
      <FooterCTA />
      <div className='h-[2rem] sm:h-[5rem]' />
      <SocialFooter />
    </LandingBackground>
  );
}

export default Page;
