import { ContextForCollectionResourceList } from '@/(server)/controller/gallery/collection/resource/list';
import { FileElemVariant } from '@/(server)/model/elements/file/main';
import { ElementVariant } from '@/(server)/model/elements/main';
import { borderFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';

export function JournalRecordFeed() {
  const resourceListController = useContext(ContextForCollectionResourceList);

  return (
    <div
      style={{ height: '100%', width: '100%' }}
      className='overflow-auto p-[2rem]'
    >
      <GlassWindowFrame borderFx={borderFx['border-b']} className='w-full'>
        <div className='grid w-full grid-cols-7 justify-items-center gap-[3rem] py-[1rem]'>
          <div className='font-bold text-slate-500'>#</div>
          <div className='col-span-3 font-bold text-slate-500 '>summary</div>
          <div className='font-bold text-slate-500'>date</div>
          <div className='col-span-2 font-bold text-slate-500'>entry</div>
        </div>
      </GlassWindowFrame>
      <div className='flex w-full flex-col'>
        {resourceListController.state.objs.map((resource, index) => (
          <div className='grid  w-full grid-cols-7 flex-row items-center justify-items-center gap-[3rem] space-y-[3rem]'>
            <div>
              <div className='flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-blue-500'>
                <p className='text-lg font-bold text-slate-300'>{index + 1}</p>
              </div>
            </div>
            <div className='col-span-3 p-[1rem]'>
              <GlassWindowFrame
                className='w-full p-[1rem]'
                roundedFx={roundedFx.rounded}
              >
                <GlassWindowContents className='h-full w-full p-[1rem] text-center font-light text-slate-300'>
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam quod, quae, quos, quibusdam quia quidem quae, quos,
                  quibusdam quia quidem quae, quos, quibusdam quia quidem quae,
                  quos, quibusdam quia
                </GlassWindowContents>
              </GlassWindowFrame>
            </div>
            <div className='text-center text-lg font-bold text-slate-500'>
              {getFormattedDate(new Date(resource.created))}
            </div>
            <div className='col-span-2 flex flex-row justify-items-start'>
              <GlassWindowFrame className='h-full'>
                <GlassWindowContents className='flex flex-col'>
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
              </GlassWindowFrame>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
