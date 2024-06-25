import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';
import { FileElemVariant } from '@/(server)/(model)/elements/file/main';
import { ElementVariant } from '@/(server)/(model)/elements/main';
import { borderFx, glassFx } from '@/(style)/data';
import { useContext } from 'react';

export function JournalRecordFeed() {
  const resourceListController = useContext(ContextForCollectionResourceList);

  return (
    <div className='flex w-full flex-row flex-wrap items-center gap-[2rem]'>
      {resourceListController.state.objs.map((resource) => (
        <div className='flex flex-col items-center space-y-[1rem]'>
          <GlassWindowFrame borderFx={borderFx['border-around']}>
            <GlassWindowContents className='flex flex-col items-center p-[2rem]'>
              {resource.variant === ElementVariant.FILE && (
                <>
                  {resource.fileElem?.variant === FileElemVariant.IMAGE && (
                    <>
                      <img
                        className='aspect-square h-[200px] object-contain'
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
          <div className='text-lg font-bold text-slate-300'>
            {resource.title}
          </div>
        </div>
      ))}
    </div>
  );
}
