import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';

export default function Results() {
  return (
    <div
      className='h-w-full flex flex-col items-center justify-evenly'
      style={{ height: 'calc(100% - 4rem)' }}
    >
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
                src='/portal/dj-m.png'
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
      <div className='h-[2rem]' />
      <div className='flex flex-col items-center'>
        <a
          href='/register'
          className=' flex animate-pulse-slow rounded-full bg-gradient-to-r from-violet-600 to-purple-500  px-[3rem] py-[2rem] text-2xl font-bold text-white'
        >
          Get started for free
        </a>
      </div>
    </div>
  );
}
