'use client';

import isVerseAuth from '@/(utils)/isAuth';
import { MapView } from './view/view';
import { MapSidebar } from './view/sidebar/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { HorizontalSeperator } from '@/(components)/(line)/seperator/main';

function MapSpace() {
  return (
    <div className='flex flex-col items-center'>
      <GlassWindowFrame
        className='h-[5rem] w-[5rem]'
        borderFx={borderFx['border-around']}
        roundedFx={roundedFx['rounded-full']}
      >
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
      <p className='text-bold text-slate-500'>Creative</p>
    </div>
  );
}

function ContributionMap() {
  return (
    <div className='flex flex-col items-center'>
      <GlassWindowFrame
        className='h-[5rem] w-[5rem]'
        borderFx={borderFx['border-around']}
        roundedFx={roundedFx['rounded-full']}
      >
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
      <p className='text-bold text-slate-500'>Space</p>
    </div>
  );
}

function Page() {
  return (
    <>
      <MapView>
        <div className='flex h-full w-full flex-col'>
          <div className='h-full flex-grow overflow-auto p-[3rem]'>
            <GlassWindowFrame
              className='p-[3rem]'
              borderFx={borderFx['border-around']}
              roundedFx={roundedFx['rounded']}
            >
              <GlassWindowContents className='flex flex-row flex-wrap space-x-[3rem]'>
                <GlassWindowFrame
                  className='max-w-[20rem] p-[3rem]'
                  borderFx={borderFx['border-around']}
                  roundedFx={roundedFx['rounded']}
                >
                  <GlassWindowContents className='flex flex-row flex-wrap'>
                    <div className='flex flex-col'>
                      <p className='text-bold text-slate-500'>Division 123</p>
                      <p className='text-bold text-slate-500'>
                        Formation Open Circle
                      </p>
                      <p className='text-bold text-slate-500'>
                        Space Diagram Circle
                      </p>
                    </div>
                    <MapSpace />
                    <MapSpace />
                    <MapSpace />
                    <MapSpace />
                    <MapSpace />
                    <MapSpace />
                    <MapSpace />
                  </GlassWindowContents>
                  <GlassWindowPane glassFx={glassFx['glass-5']} />
                </GlassWindowFrame>
                <GlassWindowFrame
                  className='max-w-[20rem] p-[3rem]'
                  borderFx={borderFx['border-around']}
                  roundedFx={roundedFx['rounded']}
                >
                  <GlassWindowContents className='flex flex-row flex-wrap'>
                    <div className='flex flex-col'>
                      <p className='text-bold text-slate-500'>Division 123</p>
                      <p className='text-bold text-slate-500'>
                        Formation 3 Layer
                      </p>
                    </div>
                    <div className='flex flex-row'>
                      <div className='flex flex-col'>
                        <p className='text-slate-500 font-bold'>
                          Formation Map
                        </p>
                        <MapSpace />
                        <MapSpace />
                        <MapSpace />
                        <MapSpace />
                      </div>
                      <HorizontalSeperator />
                      <div className='flex flex-col'>
                        <p className='text-slate-500 font-bold'>
                          Contribution Map
                        </p>
                        <ContributionMap />
                        <ContributionMap />
                        <ContributionMap />
                        <ContributionMap />
                      </div>
                    </div>
                  </GlassWindowContents>
                  <GlassWindowPane glassFx={glassFx['glass-5']} />
                </GlassWindowFrame>
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>{' '}
          </div>
        </div>
        <MapSidebar />
      </MapView>
    </>
  );
}

export default isVerseAuth(Page);
