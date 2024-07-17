import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { borderFx, roundedFx } from '@/(style)/data';
import { getFormattedDate } from '@/(utils)/dateFormat';
import { SpaceMapHeader } from './header/main';

export function SpaceMapBodyCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceMapBodyCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col`}
      >
        <SpaceMapHeader />
        <div
          className='flex w-full flex-row'
          style={{ height: 'calc(100% - 4rem)' }}
        >
          <div className='h-full w-1/2 overflow-auto'>
            <GlassWindowFrame roundedFx={roundedFx.rounded}>
              <GlassWindowContents className='flex flex-col space-y-[2rem] overflow-auto p-[2rem] text-white'>
                <GlassWindowFrame className='p-[1rem]'>
                  <p className='font-bold text-white '>Introduction (intro)</p>
                  <p className='text-sm font-light text-white '>
                    {getFormattedDate(new Date())}
                  </p>
                  <br />
                  <p className='font-bold text-white '>Content Idea</p>
                  <p className='font-light text-white '>
                    title: the feline flyers opening shot of a peaceful town
                    with a mischievous cat named whiskers. whiskers discovers a
                    magical potion that gives him the ability to fly. as word
                    spreads, cats from all over the town come to join whiskers,
                    forming a team of flying felines. when a crisis strikes the
                    town, it's up to the feline flyers to use their newfound
                    skills to save the day and prove that even the smallest
                    creatures can make a big difference.
                  </p>
                  <br />
                  <p className='font-bold text-white '>Your Progress</p>
                  <p className='font-light text-white '>
                    You've made decent progress on your idea.
                  </p>
                </GlassWindowFrame>
                <HorizontalDivider />
                <p className='font-bold text-white '>Suggested Flows</p>
                <GlassWindowFrame
                  roundedFx={roundedFx.rounded}
                  borderFx={borderFx['border-around']}
                  className='p-[1rem]'
                >
                  <GlassWindowContents className='flex flex-row items-center justify-between'>
                    <p className='font-bold'>Concept Development</p>
                    <br />
                    <p>This could really help</p>
                    <br />
                    <div className='flex flex-row space-x-[0.5rem]'>
                      <div className='h-[1rem] w-[1rem] rounded-full bg-green-400' />
                      <div className='h-[1rem] w-[1rem] rounded-full bg-green-400' />
                      <div className='h-[1rem] w-[1rem] rounded-full bg-green-400' />
                    </div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='24px'
                      viewBox='0 -960 960 960'
                      width='24px'
                      fill='#e8eaed'
                    >
                      <path d='M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z' />
                    </svg>
                  </GlassWindowContents>
                </GlassWindowFrame>
                <GlassWindowFrame
                  roundedFx={roundedFx.rounded}
                  borderFx={borderFx['border-around']}
                  className='p-[1rem]'
                >
                  <GlassWindowContents className='flex flex-row items-center justify-between'>
                    <p className='font-bold'>Visual FX</p>
                    <br />
                    <p>This could really help</p>
                    <br />
                    <div className='flex flex-row space-x-[0.5rem]'>
                      <div className='h-[1rem] w-[1rem] rounded-full bg-green-400' />
                      <div className='h-[1rem] w-[1rem] rounded-full bg-green-400' />
                    </div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='24px'
                      viewBox='0 -960 960 960'
                      width='24px'
                      fill='#e8eaed'
                    >
                      <path d='M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z' />
                    </svg>
                  </GlassWindowContents>
                </GlassWindowFrame>
                <GlassWindowFrame
                  roundedFx={roundedFx.rounded}
                  borderFx={borderFx['border-around']}
                  className='p-[1rem]'
                >
                  <p className='font-bold'>Visual Effects</p>
                  <br />
                  <p>This could really help</p>
                  <br />
                  <div className='flex flex-row space-x-[0.5rem]'>
                    <div className='h-[1rem] w-[1rem] rounded-full bg-green-400' />
                    <div className='h-[1rem] w-[1rem] rounded-full bg-green-400' />
                  </div>
                </GlassWindowFrame>
                <GlassWindowFrame
                  roundedFx={roundedFx.rounded}
                  borderFx={borderFx['border-around']}
                  className='p-[1rem]'
                >
                  <p className='font-bold'>Audio</p>
                  <br />
                  <div className='flex flex-row space-x-[0.5rem]'>
                    <div className='h-[1rem] w-[1rem] rounded-full bg-orange-400' />
                  </div>
                </GlassWindowFrame>
                <GlassWindowFrame
                  roundedFx={roundedFx.rounded}
                  borderFx={borderFx['border-around']}
                  className='p-[1rem]'
                >
                  <p className='font-bold'>Casting and Crew</p>
                  <br />
                  <div className='flex flex-row space-x-[0.5rem]'>
                    <div className='h-[1rem] w-[1rem] rounded-full bg-red-400' />
                  </div>
                </GlassWindowFrame>
                <GlassWindowFrame
                  roundedFx={roundedFx.rounded}
                  borderFx={borderFx['border-around']}
                  className='p-[1rem]'
                >
                  <p className='font-bold'>Filming</p>
                  <br />
                  <div className='flex flex-row space-x-[0.5rem]'>
                    <div className='h-[1rem] w-[1rem] rounded-full bg-orange-400' />
                  </div>
                </GlassWindowFrame>
              </GlassWindowContents>
            </GlassWindowFrame>
          </div>
          <div className='h-full w-1/2 overflow-auto'>
            <GlassWindowFrame
              className='flex w-full p-[2rem]'
              borderFx={borderFx['border-l']}
            >
              <GlassWindowContents className='flex w-full flex-col space-y-[1rem] overflow-auto'>
                <GlassWindowFrame
                  roundedFx={roundedFx.rounded}
                  borderFx={borderFx['border-around']}
                  className='p-[1rem]'
                >
                  <GlassWindowContents className='flex flex-col space-y-[1rem]'>
                    <div className='w-full text-xl font-bold text-white'>
                      <p>Concept Development</p>
                    </div>
                    <p className='text-white'>
                      We want to figure out where this is going
                    </p>
                    <br />
                    <GlassWindowFrame borderFx={borderFx['border-b']}>
                      <p className='text-lg font-bold text-white'>
                        1. What do you think about this?
                      </p>
                    </GlassWindowFrame>
                    <p className='text-white'>
                      I think it's a really cool idea but it'll take some work.
                    </p>
                    <br />
                    <GlassWindowFrame borderFx={borderFx['border-b']}>
                      <p className='text-lg font-bold text-white'>
                        2. Do you see this going anywhere?
                      </p>
                    </GlassWindowFrame>
                    <p className='text-white'>Not sure I hope so</p>
                    <br />
                    <GlassWindowFrame borderFx={borderFx['border-b']}>
                      <p className='text-lg font-bold text-white'>
                        3. What are your visual inspirations?
                      </p>
                    </GlassWindowFrame>
                    <br />
                    <div className='grid w-full grid-cols-3 gap-[2rem]'>
                      <div className='col-span-1 row-span-1'>
                        <img
                          src='https://images.unsplash.com/photo-1720733786851-33d4b66ade06?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                          className='aspect-[4/3] w-full'
                        />
                      </div>
                      <div className='col-span-1 row-span-1'>
                        <img
                          src='https://images.unsplash.com/photo-1721069210030-4e60fa75e70d?q=80&w=2700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                          className='aspect-[3/2] w-full'
                        />
                      </div>
                      <div className='col-span-1 row-span-1'>
                        <img
                          src='https://images.unsplash.com/photo-1721073769260-60623455f428?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                          className='aspect-[2/3] w-full'
                        />
                      </div>
                      <div className='col-span-1'>
                        <img
                          src='https://images.unsplash.com/photo-1603459968105-59733476a069?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                          className='aspect-square w-full'
                        />
                      </div>
                    </div>
                    <GlassWindowFrame borderFx={borderFx['border-b']}>
                      <p className='text-lg font-bold text-white'>
                        4. What are your favourite YouTube Video?
                      </p>
                    </GlassWindowFrame>
                    <iframe
                      width='560'
                      height='315'
                      src='https://www.youtube.com/embed/yH6oT1O43hQ?si=wggobc0F3q580n1P'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      referrerpolicy='strict-origin-when-cross-origin'
                      allowfullscreen
                    ></iframe>
                  </GlassWindowContents>
                </GlassWindowFrame>
                <br />
                <p className='text-xl font-bold text-white'>Related Flows</p>
                <HorizontalDivider />
                <div className='grid w-full grid-cols-3 gap-[1rem]'>
                  <GlassWindowFrame
                    roundedFx={roundedFx.rounded}
                    borderFx={borderFx['border-around']}
                    className='p-[1rem]'
                  >
                    <div className='flex w-full flex-col space-y-[1rem] text-white'>
                      <p className='font-bold'>Visual Effects</p>
                      <p>This could assist with the help here or there</p>
                    </div>
                  </GlassWindowFrame>
                  <GlassWindowFrame
                    roundedFx={roundedFx.rounded}
                    borderFx={borderFx['border-around']}
                    className='p-[1rem]'
                  >
                    <div className='flex w-full flex-col space-y-[1rem] text-white'>
                      <p className='font-bold'>Visual Effects</p>
                      <p>This could assist with the help here or there</p>
                    </div>
                  </GlassWindowFrame>
                  <GlassWindowFrame
                    roundedFx={roundedFx.rounded}
                    borderFx={borderFx['border-around']}
                    className='p-[1rem]'
                  >
                    <div className='flex w-full flex-col space-y-[1rem] text-white'>
                      <p className='font-bold '>Visual Effects</p>
                      <p>This could assist with the help here or there</p>
                    </div>
                  </GlassWindowFrame>
                </div>
              </GlassWindowContents>
            </GlassWindowFrame>
          </div>
        </div>
        {/* <SpaceMapCoreContents /> */}
      </GlassAreaContainer>
    </div>
  );
}
