import { ContextForCollectionResourceList } from '@/(server)/controller/gallery/collection/resource/list';
import { FileElemVariant } from '@/(server)/model/elements/file/main';
import { ElementVariant } from '@/(server)/model/elements/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/ui/(glass)/window/main';
import { GlassWindowPane } from '@/ui/(glass)/window/pane/main';
import { useContext } from 'react';

export function JournalRecordFeed() {
  const resourceListController = useContext(ContextForCollectionResourceList);

  return (
    <div className='flex w-full flex-row flex-wrap items-center justify-center gap-[2rem]'>
      {resourceListController.state.objs.length === 0 && (
        <p className='text-lg text-slate-500'>No Entries</p>
      )}
      {resourceListController.state.objs.map((resource, index) => (
        <div className='flex flex-col items-center space-y-[1rem]'>
          <GlassWindowFrame
            borderFx={borderFx['border-around']}
            roundedFx={roundedFx.rounded}
          >
            <GlassWindowContents className='flex flex-col items-center'>
              {resource.variant === ElementVariant.FILE && (
                <>
                  {resource.fileElem?.variant === FileElemVariant.IMAGE && (
                    <>
                      <img
                        className='h-[200px] object-contain'
                        src={resource.fileElem.src}
                        alt={resource.title}
                      />
                    </>
                  )}
                </>
              )}
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
          <div className='flex flex-row items-center space-x-[1rem]'>
            <div className='flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-blue-500 font-bold text-white'>
              {index + 1}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
