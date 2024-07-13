import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
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
          style={{ width: '100%', height: '100%' }}
          className='flex flex-col'
        >
          <div
            className='flex w-full flex-row'
            style={{ height: 'calc(100% - 80px - 4rem)' }}
          >
            <div className='flex w-2/5 flex-col justify-center space-y-[1rem] p-[2rem] text-white'>
              <p className='font-bold text-white '>Content IDEA</p>
              <p className='font-bold text-white '>
                title: the feline flyers opening shot of a peaceful town with a
                mischievous cat named whiskers. whiskers discovers a magical
                potion that gives him the ability to fly. as word spreads, cats
                from all over the town come to join whiskers, forming a team of
                flying felines. when a crisis strikes the town, it's up to the
                feline flyers to use their newfound skills to save the day and
                prove that even the smallest creatures can make a big
                difference.
              </p>
              <br />
              <p>
                Step 1. develop a script outlining the storyline and characters,
                including the mischievous cat named whiskers and the team of
                flying felines.{' '}
              </p>
              <p>
                Step 2. gather a production team including writers, animators,
                and voice actors to bring the story to life.
              </p>
              <p>
                Step 3. create storyboards and concept art to visualize scenes
                and characters.{' '}
              </p>
              <p>
                Step 4. record voiceovers and sound effects to add depth and
                dimension to the video
              </p>
              <p>
                Step 5. edit and finalize the video, ensuring it flows smoothly
                and effectively communicates the story of the feline flyers
              </p>
            </div>
            <div className='w-3/5 overflow-auto p-[2rem]'>
              <GlassWindowFrame
                className='w-full p-[2rem]'
                roundedFx={roundedFx.rounded}
                borderFx={borderFx['border-around']}
              >
                <GlassWindowContents className='grid h-full w-full grid-cols-3 gap-[2rem]'>
                  <GlassWindowFrame
                    className='col-span-1 row-span-2'
                    borderFx={borderFx['border-around']}
                  >
                    <GlassWindowContents>
                      <div className='h-full w-full bg-white p-[1rem]'>
                        <div
                          className='w-full bg-black'
                          style={{ height: '80%' }}
                        >
                          <img
                            className='h-full w-full object-cover'
                            src='https://images.unsplash.com/photo-1720709734276-cd14a216bcad?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                          ></img>
                        </div>
                      </div>
                    </GlassWindowContents>
                    <GlassWindowPane glassFx={glassFx['glass-5']} />
                  </GlassWindowFrame>{' '}
                  <GlassWindowFrame
                    className='col-span-1 row-span-2'
                    borderFx={borderFx['border-around']}
                  >
                    <GlassWindowContents>
                      <div className='h-full w-full bg-white p-[1rem]'>
                        <div
                          className='w-full bg-black'
                          style={{ height: '80%' }}
                        >
                          <img
                            className='h-full w-full object-cover'
                            src='https://images.unsplash.com/photo-1720709734276-cd14a216bcad?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                          ></img>
                        </div>
                      </div>
                    </GlassWindowContents>
                  </GlassWindowFrame>{' '}
                  <GlassWindowFrame
                    className='col-span-1 row-span-2'
                    borderFx={borderFx['border-around']}
                  >
                    <GlassWindowContents>
                      <div className='h-full w-full bg-white p-[1rem]'>
                        <div
                          className='w-full bg-black'
                          style={{ height: '80%' }}
                        >
                          <img
                            className='h-full w-full object-cover'
                            src='https://images.unsplash.com/photo-1720709734276-cd14a216bcad?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                          ></img>
                        </div>
                      </div>
                    </GlassWindowContents>
                    <GlassWindowPane glassFx={glassFx['glass-5']} />
                  </GlassWindowFrame>{' '}
                  <GlassWindowFrame
                    className='col-span-2 row-span-2'
                    roundedFx={roundedFx.rounded}
                    borderFx={borderFx['border-around']}
                  >
                    <GlassWindowContents>
                      <iframe
                        src='https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b?utm_source=generator'
                        style={{ height: '100%', width: '100%' }}
                        frameBorder='0'
                        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                        loading='lazy'
                      ></iframe>
                    </GlassWindowContents>
                    <GlassWindowPane glassFx={glassFx['glass-5']} />
                  </GlassWindowFrame>
                  <GlassWindowFrame
                    className='col-span-1 row-span-2'
                    roundedFx={roundedFx.rounded}
                    borderFx={borderFx['border-around']}
                  >
                    <GlassWindowContents>
                      <iframe
                        style={{ height: '100%', width: '100%' }}
                        src='https://www.youtube.com/embed/eBVlVfAMtWc?si=YdgwuV4JYKfQjQ4q'
                        title='YouTube video player'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        referrerpolicy='strict-origin-when-cross-origin'
                        allowfullscreen
                      ></iframe>
                    </GlassWindowContents>
                    <GlassWindowPane glassFx={glassFx['glass-5']} />
                  </GlassWindowFrame>{' '}
                  <GlassWindowFrame
                    className='col-span-1 row-span-1'
                    roundedFx={roundedFx.rounded}
                    borderFx={borderFx['border-around']}
                  >
                    <GlassWindowContents>
                      <iframe
                        style={{ height: '100%', width: '100%' }}
                        src='https://www.youtube.com/embed/eBVlVfAMtWc?si=YdgwuV4JYKfQjQ4q'
                        title='YouTube video player'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        referrerpolicy='strict-origin-when-cross-origin'
                        allowfullscreen
                      ></iframe>
                    </GlassWindowContents>
                    <GlassWindowPane glassFx={glassFx['glass-5']} />
                  </GlassWindowFrame>
                  <GlassWindowFrame
                    className='col-span-1 row-span-1'
                    roundedFx={roundedFx.rounded}
                    borderFx={borderFx['border-around']}
                  >
                    <GlassWindowContents>
                      <img
                        className='h-full w-full object-cover'
                        src='https://images.unsplash.com/photo-1707766876855-ce956314e0a3?q=80&w=3419&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      ></img>
                    </GlassWindowContents>
                    <GlassWindowPane glassFx={glassFx['glass-5']} />
                  </GlassWindowFrame>
                  <GlassWindowFrame className='col-span-1 row-span-1'>
                    <GlassWindowContents className='flex h-full w-full items-center justify-center bg-yellow-500'>
                      <p className='font-bold text-slate-300'>ABCD</p>
                    </GlassWindowContents>
                    <GlassWindowPane glassFx={glassFx['glass-5']} />
                  </GlassWindowFrame>
                  <GlassWindowFrame
                    className='col-span-1 row-span-1'
                    roundedFx={roundedFx.rounded}
                    borderFx={borderFx['border-around']}
                  >
                    <GlassWindowContents>
                      <img
                        className='h-full w-full object-cover'
                        src='https://images.unsplash.com/photo-1720712738661-9c0dcb92f06d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      ></img>
                    </GlassWindowContents>
                    <GlassWindowPane glassFx={glassFx['glass-5']} />
                  </GlassWindowFrame>
                  <GlassWindowFrame
                    className='col-span-1 row-span-1'
                    roundedFx={roundedFx.rounded}
                    borderFx={borderFx['border-around']}
                  >
                    <GlassWindowContents>
                      <img
                        className='h-full w-full object-cover'
                        src='https://images.unsplash.com/photo-1720712738661-9c0dcb92f06d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      ></img>
                    </GlassWindowContents>
                    <GlassWindowPane glassFx={glassFx['glass-5']} />
                  </GlassWindowFrame>
                  <GlassWindowFrame
                    className='col-span-1 row-span-2'
                    borderFx={borderFx['border-around']}
                  >
                    <GlassWindowContents className='h-full w-full'>
                      <div className='h-full w-full bg-white p-[1rem]'>
                        <div
                          className='w-full bg-black'
                          style={{ height: '80%' }}
                        >
                          <img
                            className='h-full w-full object-cover'
                            src='https://images.unsplash.com/photo-1720709734276-cd14a216bcad?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                          ></img>
                        </div>
                      </div>
                    </GlassWindowContents>
                    <GlassWindowPane glassFx={glassFx['glass-5']} />
                  </GlassWindowFrame>{' '}
                  <GlassWindowFrame
                    className='col-span-2 row-span-3'
                    borderFx={borderFx['border-around']}
                  >
                    <GlassWindowContents className='h-full w-full'>
                      <div className='h-full w-full bg-white p-[1rem]'>
                        <div
                          className='w-full bg-black'
                          style={{ height: '80%' }}
                        >
                          <img
                            className='h-full w-full bg-black object-cover'
                            src='https://images.unsplash.com/photo-1720766595377-b413ce3a6478?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                          ></img>
                        </div>
                      </div>
                    </GlassWindowContents>
                    <GlassWindowPane glassFx={glassFx['glass-5']} />
                  </GlassWindowFrame>
                  <GlassWindowFrame
                    className='col-span-2 row-span-2'
                    roundedFx={roundedFx.rounded}
                    borderFx={borderFx['border-around']}
                  >
                    <GlassWindowContents className='flex items-center justify-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-1/2 w-1/2 cursor-pointer'
                        viewBox='0 0 24 24'
                        fill='none'
                      >
                        <mask
                          id='mask0_3261_5797'
                          maskUnits='userSpaceOnUse'
                          x='0'
                          y='0'
                          width='24'
                          height='24'
                        >
                          <rect width='24' height='24' fill='#D9D9D9' />
                        </mask>
                        <g mask='url(#mask0_3261_5797)'>
                          <path
                            d='M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z'
                            fill='#CBD5E1'
                          />
                        </g>
                      </svg>
                    </GlassWindowContents>
                    <GlassWindowPane glassFx={glassFx['glass-5']} />
                  </GlassWindowFrame>
                </GlassWindowContents>
                <GlassWindowPane glassFx={glassFx['glass-5']} />
              </GlassWindowFrame>
            </div>
          </div>
          <GlassWindowFrame className='h-[80px] w-full'>
            <GlassWindowContents className='flex h-full w-full items-center justify-center'>
              <div className='flex w-2/5 flex-row'>
                <div className='h-[2rem] rounded-full bg-blue-500 px-[2rem]'>
                  <p className='font-bold text-white'>hello world</p>
                </div>
                <div className='h-[2rem] rounded-full bg-blue-500 px-[2rem]'>
                  <p className='font-bold text-white'>hello world</p>
                </div>
                <div className='h-[2rem] rounded-full bg-blue-500 px-[2rem]'>
                  <p className='font-bold text-white'>hello world</p>
                </div>
              </div>
              <div className='flex w-3/5 flex-row text-white'>
                <div className='w-1/3'>
                  <div className='text-lg font-bold text-white'></div>
                </div>
                <div className='w-1/3'>
                  <div className='text-lg font-bold text-white'>Media</div>
                </div>
                <div className='w-1/3'>
                  <div className='text-lg font-bold text-white'>Media</div>
                </div>
              </div>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          </GlassWindowFrame>
        </div>
        {/* <SpaceMapCoreContents /> */}
      </GlassAreaContainer>
    </div>
  );
}
