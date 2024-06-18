import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';
import { borderFx, glassFx } from '@/(style)/data';
import { useContext } from 'react';

export function SpaceDraftResourcesResults() {
  const resourceListController = useContext(ContextForCollectionResourceList);

  return (
    <div
      className='flex w-full flex-col overflow-auto px-[1rem]'
      style={{ height: 'calc(100% - 4rem - 80px)' }}
    >
      <div className='flex w-full flex-row flex-wrap gap-[1rem]'>
        {resourceListController.state.objs.map((resource) => (
          <>
            <p className='w-full text-lg font-bold text-slate-300'>
              {resource.title}
            </p>
            <GlassWindowFrame
              className='h-[10rem] w-full flex-shrink-0'
              borderFx={borderFx['border-around']}
            >
              <GlassWindowContents className='flex w-full cursor-pointer flex-row space-x-[1rem] p-[1rem]'></GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>
          </>
        ))}
      </div>
    </div>
  );
}
