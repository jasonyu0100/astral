'use client';
import { PortalBackground } from './(portal)/common/background/main';
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
            Astral is the AI-powered creative workflow platform that grows with
            you. Whether you're a creative visionary, a product manager, or a
            startup founder, Astral provides the tools you need to transform
            your ideas into reality.
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
      <div className='flex w-full flex-col space-y-[1rem]'>
        <p className='text-xl font-bold text-slate-700'>
          Supported and powered by
        </p>
        <svg
          className='w-[20px] w-[20px] xl:w-[70px]'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 59 56'
        >
          <g filter='url(#a)'>
            <rect
              width='54.882'
              height='52'
              x='2'
              fill='#fff'
              rx='14.07'
            ></rect>
            <rect
              width='54.435'
              height='51.552'
              x='2.224'
              y='.224'
              stroke='url(#b)'
              stroke-width='.448'
              rx='13.846'
            ></rect>
          </g>
          <path
            fill='#353535'
            d='M46.92 32.445h-4.3c-.055 0-.082-.027-.082-.082V20.735c0-.054.027-.081.082-.081h4.3c1.718.01 3.03.561 3.934 1.651.905 1.09 1.352 2.546 1.341 4.367 0 1.82-.444 3.238-1.333 4.252-.9 1.014-2.213 1.521-3.941 1.521Zm-2.289-1.84h2.29c1.014 0 1.799-.34 2.355-1.022.55-.687.826-1.662.826-2.927 0-1.265-.281-2.273-.842-3.026-.562-.752-1.342-1.131-2.34-1.136h-2.305c-.044 0-.066.024-.066.073v7.948c0 .06.028.09.082.09Z'
          ></path>
          <path
            fill='#353535'
            d='M40.853 32.445h-7.686c-.055 0-.082-.027-.082-.082V20.735c0-.054.027-.081.082-.081h1.84c.054 0 .081.027.081.081v9.805c0 .044.025.065.074.065h5.691c.055 0 .082.028.082.082v1.676c0 .055-.027.082-.082.082Z'
          ></path>
          <path
            fill='#353535'
            d='M30.624 32.445h-1.84c-.055 0-.082-.027-.082-.082V20.735c0-.054.027-.081.082-.081h1.84c.054 0 .082.027.082.081v11.628c0 .055-.028.082-.082.082Z'
          ></path>
          <path
            fill='#353535'
            d='M26.445 20.735v7.622c0 1.183-.417 2.188-1.251 3.017-.84.823-1.848 1.235-3.025 1.235-1.178 0-2.184-.415-3.018-1.243-.834-.829-1.251-1.832-1.251-3.01v-7.62c0-.055.03-.082.09-.082h1.84c.054 0 .082.027.082.081v7.622c0 .616.22 1.144.662 1.586.441.442.976.662 1.603.662s1.158-.22 1.594-.662c.436-.442.657-.97.662-1.586v-7.622c0-.054.028-.081.082-.081h1.848c.055 0 .082.027.082.081Z'
          ></path>
          <path
            fill='#353535'
            d='M13.32 25.102c.306-.273.459-.616.459-1.03 0-.415-.123-.78-.368-1.096-.246-.316-.578-.477-.998-.482H8.995c-.044 0-.065.024-.065.073v2.895c0 .054.021.082.065.082h3.295a1.656 1.656 0 0 0 1.03-.442Zm-4.309 5.503h3.28c.446-.005.85-.171 1.21-.498.36-.328.537-.698.531-1.113 0-.414-.16-.785-.482-1.112-.322-.327-.7-.49-1.137-.49H8.995c-.044 0-.065.027-.065.082v3.041c0 .06.027.09.081.09Zm7.033-1.61c0 1.024-.322 1.856-.965 2.493-.644.638-1.478.957-2.502.957H7c-.055 0-.082-.027-.082-.082V20.735c0-.054.027-.081.082-.081h5.577c.926 0 1.69.335 2.29 1.006.599.67.896 1.485.89 2.445 0 .457-.128.91-.384 1.357-.256.447-.564.76-.924.94-.043.011-.065.038-.065.082 0 .044.022.07.065.082.436.212.812.542 1.129.99a2.4 2.4 0 0 1 .466 1.438Z'
          ></path>
          <path
            fill='#1E78FF'
            fill-rule='evenodd'
            d='M15.19 17.165a6.28 6.28 0 1 0 0-12.56 6.28 6.28 0 0 0 0 12.56Zm-4.187-7.327h3.14v-3.14h2.094v3.14h3.14v2.093h-3.14v3.14h-2.094v-3.14h-3.14V9.838Z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='#FF4E27'
            fill-rule='evenodd'
            d='M33.568 17.165H25.84l-3.114-6.28 3.114-6.28h7.728l3.114 6.28-3.114 6.28Zm-3.864-3.14c1.72 0 3.114-1.406 3.114-3.14 0-1.735-1.394-3.14-3.114-3.14s-3.114 1.405-3.114 3.14c0 1.734 1.394 3.14 3.114 3.14Z'
            clip-rule='evenodd'
          ></path>
          <path
            fill='#B265FF'
            d='M47.857 5.765a6.282 6.282 0 0 0-8.759 8.759l8.759-8.759Z'
          ></path>
          <path
            fill='#B265FF'
            d='M40.578 16.004a6.282 6.282 0 0 0 8.759-8.759l-8.759 8.759Z'
          ></path>
          <path
            fill='#353535'
            d='M45.27 38.945c.304-.273.457-.616.457-1.03 0-.415-.123-.78-.368-1.096-.245-.316-.578-.477-.998-.483h-3.418c-.043 0-.065.025-.065.074v2.895c0 .054.022.081.065.081h3.296a1.656 1.656 0 0 0 1.03-.441Zm-4.31 5.503h3.279c.447-.005.85-.172 1.21-.499s.537-.697.532-1.112c0-.414-.161-.785-.483-1.112-.322-.327-.7-.49-1.137-.49h-3.418c-.043 0-.065.027-.065.081v3.042c0 .06.027.09.082.09Zm7.032-1.61c0 1.024-.322 1.855-.965 2.493-.643.638-1.477.957-2.502.957h-5.577c-.054 0-.082-.027-.082-.082V34.578c0-.054.028-.081.082-.081h5.577c.927 0 1.69.335 2.29 1.005.6.67.896 1.486.89 2.445 0 .458-.127.91-.383 1.358-.257.447-.565.76-.925.94-.043.011-.065.038-.065.082 0 .044.022.07.066.082.436.212.812.542 1.128.99a2.4 2.4 0 0 1 .466 1.438Z'
          ></path>
          <path
            fill='#353535'
            d='M36.528 34.578V42.2c0 1.183-.417 2.19-1.252 3.018-.839.823-1.848 1.235-3.025 1.235-1.178 0-2.183-.415-3.017-1.243-.835-.829-1.252-1.832-1.252-3.01v-7.62c0-.055.03-.082.09-.082h1.84c.055 0 .082.027.082.081V42.2c0 .617.22 1.145.662 1.587.442.441.976.662 1.603.662s1.159-.22 1.595-.662c.436-.442.657-.97.662-1.587v-7.62c0-.055.027-.082.082-.082h1.848c.054 0 .082.027.082.081Z'
          ></path>
          <path
            fill='#353535'
            d='M26.731 46.288h-7.686c-.055 0-.082-.027-.082-.082V34.578c0-.054.027-.081.082-.081h1.84c.054 0 .081.027.081.081v9.805c0 .043.025.065.074.065h5.691c.055 0 .082.027.082.082v1.676c0 .055-.027.082-.082.082Z'
          ></path>
          <path
            fill='#353535'
            d='M12.192 44.595c.49 0 .93-.087 1.317-.261.387-.175.717-.445.99-.81.272-.365.463-.728.572-1.087.021-.055.054-.082.098-.082h1.913c.055.005.082.068.082.188 0 .42-.21.965-.63 1.635-.24.393-.534.755-.883 1.088-.349.333-.828.613-1.439.842-.6.23-1.273.344-2.02.344-1.717 0-3.025-.535-3.925-1.603-.9-1.069-1.349-2.519-1.349-4.35 0-1.843.452-3.331 1.357-4.465s2.211-1.701 3.917-1.701c.704 0 1.352.106 1.946.319 1.009.36 1.791.973 2.347 1.84.453.687.679 1.305.679 1.856 0 .055-.027.082-.082.082h-1.93c-.043 0-.076-.027-.098-.082-.48-1.44-1.434-2.159-2.862-2.159-.986 0-1.763.395-2.33 1.186-.567.785-.85 1.82-.85 3.107 0 1.287.277 2.295.833 3.026.562.725 1.344 1.087 2.347 1.087Z'
          ></path>
          <path
            fill='#353535'
            d='M49.483 36.047a.95.95 0 0 1 .132-.494.998.998 0 0 1 .355-.355.95.95 0 0 1 .494-.133.94.94 0 0 1 .763.377.84.84 0 0 1 .162.393h-.4a.434.434 0 0 0-.183-.277.568.568 0 0 0-.342-.11c-.11 0-.21.028-.3.082a.616.616 0 0 0-.217.216.575.575 0 0 0-.08.3c0 .11.026.211.08.301.054.09.126.163.216.217.09.054.191.08.301.08a.497.497 0 0 0 .324-.107.47.47 0 0 0 .168-.279h.4a.879.879 0 0 1-.892.77.95.95 0 0 1-.494-.132.998.998 0 0 1-.355-.355.951.951 0 0 1-.132-.494Zm.965 1.744c-.24 0-.466-.045-.678-.135a1.778 1.778 0 0 1-.933-.932 1.677 1.677 0 0 1-.134-.677 1.719 1.719 0 0 1 .514-1.233c.16-.16.345-.286.555-.376.21-.09.436-.136.676-.136a1.72 1.72 0 0 1 1.232.512c.16.16.285.345.375.555.09.21.136.437.137.678.001.24-.043.467-.134.677a1.754 1.754 0 0 1-.932.932 1.71 1.71 0 0 1-.678.135Zm0-.383a1.367 1.367 0 0 0 1.257-.83c.07-.166.105-.342.104-.53a1.359 1.359 0 0 0-.4-.964 1.374 1.374 0 0 0-.433-.293 1.325 1.325 0 0 0-.528-.105 1.32 1.32 0 0 0-.527.105 1.39 1.39 0 0 0-.727.728c-.07.165-.107.341-.108.53 0 .185.034.361.105.526a1.372 1.372 0 0 0 1.257.833Z'
          ></path>
          <defs>
            <linearGradient
              id='b'
              x1='29.441'
              x2='29.441'
              y1='0'
              y2='52'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='.55' stop-color='#F8F8F8'></stop>
              <stop offset='1' stop-color='#F8F8F8' stop-opacity='.38'></stop>
              <stop offset='1' stop-color='#F8F8F8' stop-opacity='.4'></stop>
            </linearGradient>
            <filter
              id='a'
              width='58.464'
              height='55.581'
              x='.209'
              y='0'
              color-interpolation-filters='sRGB'
              filterUnits='userSpaceOnUse'
            >
              <feFlood flood-opacity='0' result='BackgroundImageFix'></feFlood>
              <feColorMatrix
                in='SourceAlpha'
                result='hardAlpha'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              ></feColorMatrix>
              <feOffset dy='1.791'></feOffset>
              <feGaussianBlur stdDeviation='.895'></feGaussianBlur>
              <feComposite in2='hardAlpha' operator='out'></feComposite>
              <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0'></feColorMatrix>
              <feBlend
                in2='BackgroundImageFix'
                result='effect1_dropShadow_412_2'
              ></feBlend>
              <feBlend
                in='SourceGraphic'
                in2='effect1_dropShadow_412_2'
                result='shape'
              ></feBlend>
            </filter>
          </defs>
        </svg>
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
      <div className='h-[10rem]' />
      <div className='flex h-1/2 w-full flex-col items-center'>
        <div className='relative h-full w-[1500px]'>
          <div className='absolute z-50 h-full w-full'>
            <div className='absolute left-[0px] top-[100px] h-[200px] w-[200px] bg-yellow-500 p-[1rem] shadow-glow'>
              <p className='font-bold'>- visual</p>
              <p className='font-bold'>- conversational</p>
              <p className='font-bold'>- connected</p>
            </div>
            <div className='absolute left-[1200px] top-[200px] h-[200px] w-[300px] bg-green-400 p-[1rem] shadow-glow'>
              <p className='font-bold'>1. Free-flow</p>
              <p className='font-bold'>2. Insightful</p>
              <p className='font-bold'>3. Learning</p>
            </div>
            <div className='absolute left-[400px] top-[150px] h-[150px] w-[150px]'>
              <img
                src='portal/dj-m.png'
                className='aspect-square w-full rounded-[1rem] shadow-glow'
              />
            </div>
            <div className='absolute left-[550px] top-[450px] h-[200px] w-[300px]'>
              <p className='animate-pulse-slow text-center text-3xl font-bold text-slate-300'>
                non-linear
              </p>
            </div>
            <div className='absolute left-[1250px] top-[50px] h-[200px] w-[200px]'>
              <p className='animate-pulse-slow text-center text-2xl font-bold text-slate-300'>
                evolving media base
              </p>
            </div>
            <div className='absolute left-[300px] top-[0px] h-[200px] w-[300px]'>
              <p className='animate-pulse-slow text-4xl font-bold text-slate-300'>
                scalable ideas
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
              x2='1400'
              y2='300'
              className='animate-pulse stroke-slate-300 opacity-30'
              strokeWidth={2}
            />
          </svg>
        </div>
      </div>
      <div className='h-[5rem]' /> <HorizontalDivider />
      <div className='h-[5rem]' />{' '}
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
      </div>{' '}
      <HorizontalDivider />
      <div className='h-[5rem]' />{' '}
      <div className='flex flex-row space-x-[50px]'>
        <GlassWindowFrame
          className='h-[200px] w-[300px]'
          borderFx={borderFx['border-around']}
          roundedFx={roundedFx.rounded}
        >
          <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
            <p className='text-xl font-bold text-slate-300'>Product Launch</p>
            <p className='text-md font-light text-slate-300'>5 days</p>
            <p className='text-sm font-light text-slate-500'>
              A structured template for planning and executing a successful
              product launch.
            </p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
        <GlassWindowFrame
          className='h-[200px] w-[300px]'
          borderFx={borderFx['border-around']}
          roundedFx={roundedFx.rounded}
        >
          <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
            <p className='text-xl font-bold text-slate-300'>Video Shoot</p>
            <p className='text-md font-light text-slate-300'>24 hours</p>
            <p className='text-sm font-light text-slate-500'>
              A structured template for planning and executing a video project.
            </p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
        <GlassWindowFrame
          className='h-[200px] w-[300px]'
          borderFx={borderFx['border-around']}
          roundedFx={roundedFx.rounded}
        >
          <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
            <p className='text-xl font-bold text-slate-300'>
              Marketing Campaign
            </p>
            <p className='text-md font-light text-slate-300'>12 hours</p>
            <p className='text-sm font-light text-slate-500'>
              A structured template for planning, creating, and executing an
              effective marketing campaign.
            </p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
        <GlassWindowFrame
          className='h-[200px] w-[300px]'
          borderFx={borderFx['border-around']}
          roundedFx={roundedFx.rounded}
        >
          <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
            <p className='text-xl font-bold text-slate-300'>Blog Post</p>
            <p className='text-md font-light text-slate-300'>15 minutes</p>
            <p className='text-sm font-light text-slate-500'>
              A structured template for planning, writing, and promoting a blog
              post.
            </p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
        <GlassWindowFrame
          className='h-[200px] w-[300px]'
          borderFx={borderFx['border-around']}
          roundedFx={roundedFx.rounded}
        >
          <GlassWindowContents className='flex h-full w-full flex-col space-y-[1rem] p-[1rem]'>
            <p className='text-xl font-bold text-slate-300'>Startup</p>
            <p className='text-md font-light text-slate-300'>7 days</p>
            <p className='text-sm font-light text-slate-500'>
              A comprehensive template for developing a strategic startup plan.
            </p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      </div>
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
          className=' flex rounded-full bg-gradient-to-r from-violet-600 to-purple-500 p-[2rem]  text-xl font-bold text-slate-300'
        >
          Get started for free
        </a>
      </div>
      <div className='h-[5rem]' />
    </PortalBackground>
  );
}
