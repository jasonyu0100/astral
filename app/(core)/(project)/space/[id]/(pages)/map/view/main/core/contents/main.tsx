import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { SpaceMapContentsScene } from './scene/main';
import { SpaceMapContentsTools } from './tools/main';

export function SpaceMapCoreContents() {
  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className='relative p-[2rem]'
    >
      <div className='absolute left-0 top-0 flex h-[5rem] w-full items-center justify-center'>
        <p className='w-[500px] text-center font-bold text-slate-300'>
          Producer: A music producer oversees the creation of a song using
          software tools, shaping its sound and structure.
        </p>
      </div>
      <div className='absolute left-0 top-0 h-full w-full overflow-auto px-[6rem] pt-[5rem]'>
        <GlassWindowFrame
          className='w-full p-[2rem]'
          borderFx={borderFx['border-around']}
        >
          <GlassWindowContents className='grid h-full w-full grid-cols-6 gap-[2rem]'>
            <GlassWindowFrame
              className='col-span-1 row-span-2'
              borderFx={borderFx['border-around']}
            >
              <GlassWindowContents>
                <div className='h-full w-full bg-white p-[1rem]'>
                  <div className='w-full bg-black' style={{ height: '80%' }}>
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
                  <div className='w-full bg-black' style={{ height: '80%' }}>
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
                  <div className='w-full bg-black' style={{ height: '80%' }}>
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
            <GlassWindowFrame
              className='col-span-1 row-span-2'
              roundedFx={roundedFx.rounded}
              borderFx={borderFx['border-around']}
            >
              <GlassWindowContents className='flex h-full w-full items-center justify-center'>
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
                  <div className='w-full bg-black' style={{ height: '80%' }}>
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
                  <div className='w-full bg-black' style={{ height: '80%' }}>
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
      <SpaceMapContentsScene />
      <SpaceMapContentsTools />
    </div>
  );
}
