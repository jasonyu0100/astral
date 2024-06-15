import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx } from '@/(style)/data';
import { SpaceDraftSceneOverlay } from './overlay/main';
import { SpaceDraftScene } from './scene/main';
import { SpaceDraftTools } from './tools/main';

export function SpaceDraftCoreContents() {
  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className='relative flex flex-row'
    >
      <div style={{ width: '100%', height: '100%' }} className='absolute'>
        <SpaceDraftSceneOverlay />
      </div>
      <div style={{ width: '100%', height: '100%' }} className='absolute'>
        <SpaceDraftScene />
      </div>
      <div
        style={{ width: '100%', height: '100%' }}
        className='absolute flex justify-end'
      >
        <SpaceDraftTools />
      </div>
      <div
        style={{ width: '100%', height: '100%' }}
        className='absolute flex items-end p-[1rem]'
      >
        <GlassWindowFrame className='h-[10rem] w-full'>
          <GlassWindowContents className='flex w-full flex-row space-x-[1rem] p-[1rem]'>
            <div className='aspect-square h-full bg-white' />
            <div className='aspect-square h-full bg-white' />
            <div className='aspect-square h-full bg-white' />
            <div className='aspect-square h-full bg-white' />
            <div className='aspect-square h-full bg-white' />
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      </div>
    </div>
  );
}
