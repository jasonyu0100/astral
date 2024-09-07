import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';

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

export default function ScrollableCardList() {
  return (
    <div style={containerStyle}>
      <style>{keyframes}</style>
      <div style={scrollAnimation}>
        <div style={itemStyle}>
          <GlassWindowFrame
            className='h-[200px] w-[300px]'
            borderFx={borderFx['border-around']}
            roundedFx={roundedFx.rounded}
          >
            <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
              <p className='text-xl font-bold text-slate-300'>Product Launch</p>
              <p className='text-sm font-light text-slate-500'>
                A structured template for planning and executing a successful
                product launch.
              </p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          </GlassWindowFrame>
        </div>

        <div style={itemStyle}>
          <GlassWindowFrame
            className='h-[200px] w-[300px]'
            borderFx={borderFx['border-around']}
            roundedFx={roundedFx.rounded}
          >
            <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
              <p className='text-xl font-bold text-slate-300'>Startup Plan</p>
              <p className='text-sm font-light text-slate-500'>
                A comprehensive template for developing a strategic startup
                plan.
              </p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          </GlassWindowFrame>
        </div>

        <div style={itemStyle}>
          <GlassWindowFrame
            className='h-[200px] w-[300px]'
            borderFx={borderFx['border-around']}
            roundedFx={roundedFx.rounded}
          >
            <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
              <p className='text-xl font-bold text-slate-300'>
                Marketing Campaign
              </p>
              <p className='text-sm font-light text-slate-500'>
                A template for planning and executing an effective marketing
                campaign.
              </p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          </GlassWindowFrame>
        </div>

        <div style={itemStyle}>
          <GlassWindowFrame
            className='h-[200px] w-[300px]'
            borderFx={borderFx['border-around']}
            roundedFx={roundedFx.rounded}
          >
            <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
              <p className='text-xl font-bold text-slate-300'>Video Shoot</p>
              <p className='text-sm font-light text-slate-500'>
                A structured template for planning and executing a video shoot
                project.
              </p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          </GlassWindowFrame>
        </div>

        <div style={itemStyle}>
          <GlassWindowFrame
            className='h-[200px] w-[300px]'
            borderFx={borderFx['border-around']}
            roundedFx={roundedFx.rounded}
          >
            <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
              <p className='text-xl font-bold text-slate-300'>Blog Post</p>
              <p className='text-sm font-light text-slate-500'>
                A template for planning, writing, and promoting a blog post.
              </p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          </GlassWindowFrame>
        </div>

        <div style={itemStyle}>
          <GlassWindowFrame
            className='h-[200px] w-[300px]'
            borderFx={borderFx['border-around']}
            roundedFx={roundedFx.rounded}
          >
            <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
              <p className='text-xl font-bold text-slate-300'>
                Social Media Strategy
              </p>
              <p className='text-sm font-light text-slate-500'>
                A guide for creating an impactful social media strategy.
              </p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          </GlassWindowFrame>
        </div>

        <div style={itemStyle}>
          <GlassWindowFrame
            className='h-[200px] w-[300px]'
            borderFx={borderFx['border-around']}
            roundedFx={roundedFx.rounded}
          >
            <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
              <p className='text-xl font-bold text-slate-300'>Event Planning</p>
              <p className='text-sm font-light text-slate-500'>
                A comprehensive template for planning successful events.
              </p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          </GlassWindowFrame>
        </div>

        <div style={itemStyle}>
          <GlassWindowFrame
            className='h-[200px] w-[300px]'
            borderFx={borderFx['border-around']}
            roundedFx={roundedFx.rounded}
          >
            <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
              <p className='text-xl font-bold text-slate-300'>Design Sprint</p>
              <p className='text-sm font-light text-slate-500'>
                A guide to running an efficient design sprint.
              </p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          </GlassWindowFrame>
        </div>

        <div style={itemStyle}>
          <GlassWindowFrame
            className='h-[200px] w-[300px]'
            borderFx={borderFx['border-around']}
            roundedFx={roundedFx.rounded}
          >
            <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
              <p className='text-xl font-bold text-slate-300'>Pitch Deck</p>
              <p className='text-sm font-light text-slate-500'>
                A template for creating an effective pitch deck.
              </p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          </GlassWindowFrame>
        </div>

        <div style={itemStyle}>
          <GlassWindowFrame
            className='h-[200px] w-[300px]'
            borderFx={borderFx['border-around']}
            roundedFx={roundedFx.rounded}
          >
            <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
              <p className='text-xl font-bold text-slate-300'>User Research</p>
              <p className='text-sm font-light text-slate-500'>
                A guide to conducting effective user research.
              </p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          </GlassWindowFrame>
        </div>
      </div>
    </div>
  );
}
