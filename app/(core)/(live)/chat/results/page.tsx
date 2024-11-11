import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralCalendarIcon } from '@/icons/calendar/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import Link from 'next/link';

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

export default function Results() {
  return (
    <div
      className='h-w-full flex flex-col items-center justify-evenly'
      style={{ height: 'calc(100% - 4rem)' }}
    >
      <Map />
      <div className='h-[2rem]' />
      <div className='flex flex-col items-center'>
        <Link
          href='https://calendly.com/jasonyu0100/15min'
          target='_blank'
          className=' flex animate-pulse-slow space-x-[1rem] rounded-full bg-gradient-to-r from-blue-500 to-cyan-500  px-[3rem] py-[2rem]'
        >
          <AstralCalendarIcon className='h-[2rem] w-[2rem] fill-white' />
          <p className='text-2xl  font-bold text-white'>Book a meeting</p>
        </Link>
      </div>
    </div>
  );
}
