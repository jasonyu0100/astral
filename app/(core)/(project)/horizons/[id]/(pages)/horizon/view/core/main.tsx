import { borderFx, glassFx, roundedFx } from '@/style/data';
import { ImageBackground } from '@/ui/background/img/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { AbsoluteHolder } from '@/ui/holder/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { KarmaState } from '../sidebar/item/header/main';
import { HorizonsHorizonListPost } from './list/item/main';

export function HorizonsHorizonMain() {
  return (
    <div
      style={{
        height: 'calc(100% - 8rem)',
      }}
      className='relative flex w-full flex-col overflow-auto'
    >
      <ImageBackground />
      <AbsoluteHolder>
        <div className='h-full w-full p-[2rem]'>
          <div className='h-full w-full overflow-auto p-[2rem]'>
            <div className='flex w-full flex-col space-y-[4rem]'>
              <div className='flex w-full flex-col space-y-[1rem]'>
                <div className='flex w-full flex-row justify-between'>
                  <p className='font-light text-slate-300'>30 minutes ago</p>
                  <p className='font-light text-slate-300'>
                    {KarmaState.Full} 363
                  </p>
                </div>
                <HorizontalDivider />
              </div>
              <HorizonsHorizonListPost />
              <GlassWindowFrame
                className='w-full p-[2rem]'
                borderFx={borderFx['border-around']}
                roundedFx={roundedFx['rounded']}
              >
                <GlassWindowContents className='flex flex-col items-center space-y-[1rem]'>
                  <div className='flex w-full flex-row space-x-[2rem] overflow-auto pb-[2rem]'>
                    <div className='flex h-[250px] w-[200px] flex-shrink-0 flex-col items-center space-y-[1rem] bg-white p-[1rem] shadow-glow'>
                      <img
                        src='/stock/passion.png'
                        className='aspect-square w-full'
                      />
                      <p className='font-permanentMarker'>123</p>
                    </div>
                    <div className='flex h-[250px] w-[200px] flex-shrink-0 flex-col items-center space-y-[1rem] bg-white p-[1rem] shadow-glow'>
                      <img
                        src='/stock/passion.png'
                        className='aspect-square w-full'
                      />
                      <p className='font-permanentMarker'>123</p>
                    </div>
                    <div className='flex h-[250px] w-[200px] flex-shrink-0 flex-col items-center space-y-[1rem] bg-white p-[1rem] shadow-glow'>
                      <img
                        src='/stock/passion.png'
                        className='aspect-square w-full'
                      />
                      <p className='font-permanentMarker'>123</p>
                    </div>
                    <div className='flex h-[250px] w-[200px] flex-shrink-0 flex-col items-center space-y-[1rem] bg-white p-[1rem] shadow-glow'>
                      <img
                        src='/stock/passion.png'
                        className='aspect-square w-full'
                      />
                      <p className='font-permanentMarker'>123</p>
                    </div>
                    <div className='flex h-[250px] w-[200px] flex-shrink-0 flex-col items-center space-y-[1rem] bg-white p-[1rem] shadow-glow'>
                      <img
                        src='/stock/passion.png'
                        className='aspect-square w-full'
                      />
                      <p className='font-permanentMarker'>123</p>
                    </div>
                    <div className='flex h-[250px] w-[200px] flex-shrink-0 flex-col items-center space-y-[1rem] bg-white p-[1rem] shadow-glow'>
                      <img
                        src='/stock/passion.png'
                        className='aspect-square w-full'
                      />
                      <p className='font-permanentMarker'>123</p>
                    </div>
                  </div>
                </GlassWindowContents>
                <GlassWindowPane glassFx={glassFx['glass-20']} />
              </GlassWindowFrame>
              <div className='flex w-full flex-col space-y-[1rem]'>
                <div className='flex w-full flex-row justify-between'>
                  <p className='font-light text-slate-300'>30 minutes ago</p>
                  <p className='font-light text-slate-300'>
                    {KarmaState.Full} 363
                  </p>
                </div>
                <HorizontalDivider />
              </div>
              <HorizonsHorizonListPost />
              <GlassWindowFrame
                className='w-full p-[2rem]'
                borderFx={borderFx['border-around']}
                roundedFx={roundedFx['rounded']}
              >
                <GlassWindowContents className='flex flex-col space-y-[1rem]'>
                  <div className='flex w-full flex-row space-x-[2rem] overflow-auto pb-[2rem]'>
                    <div className='flex h-[250px] w-[200px] flex-shrink-0 flex-col items-center space-y-[1rem] bg-white p-[1rem] shadow-glow'>
                      <img
                        src='/stock/passion.png'
                        className='aspect-square w-full'
                      />
                      <p className='font-permanentMarker'>123</p>
                    </div>
                    <div className='flex h-[250px] w-[200px] flex-shrink-0 flex-col items-center space-y-[1rem] bg-white p-[1rem] shadow-glow'>
                      <img
                        src='/stock/passion.png'
                        className='aspect-square w-full'
                      />
                      <p className='font-permanentMarker'>123</p>
                    </div>
                    <div className='flex h-[250px] w-[200px] flex-shrink-0 flex-col items-center space-y-[1rem] bg-white p-[1rem] shadow-glow'>
                      <img
                        src='/stock/passion.png'
                        className='aspect-square w-full'
                      />
                      <p className='font-permanentMarker'>123</p>
                    </div>
                  </div>
                </GlassWindowContents>
                <GlassWindowPane glassFx={glassFx['glass-20']} />
              </GlassWindowFrame>
            </div>
          </div>
        </div>
      </AbsoluteHolder>
    </div>
  );
}
