import { ContextForGalleryCollectionList } from '@/(server)/controller/gallery/collection/list';
import { borderFx, glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { getFormattedAMPM } from '@/utils/dateFormat';
import { useContext } from 'react';

export function JournalRecordSidebar() {
  const collectionListController = useContext(ContextForGalleryCollectionList);

  return (
    <>
      <GlassAreaContainer
        name={JournalRecordSidebar.name}
        sizeFx='w-[360px] h-full overflow-hidden'
        className={`flex flex-col`}
        glassFx={glassFx['glass-10']}
      >
        <div className='h-[4rem] w-full flex-shrink-0 shadow-glow'></div>
        <div
          className='flex flex-col overflow-auto'
          style={{ height: 'calc(100% - 4rem)' }}
        >
          <div className='flex w-full flex-col space-y-[1rem] p-[1rem] text-slate-300'>
            {collectionListController.state.objs.map((collection) => (
              <GlassWindowFrame
                className='w-full'
                borderFx={borderFx['border-b']}
              >
                <GlassWindowContents
                  className='h-full w-full cursor-pointer'
                  onClick={() =>
                    collectionListController.actions.stateActions.select(
                      collection,
                    )
                  }
                >
                  <p className='text-bold whitespace-nowrap p-[1rem] text-xl text-slate-300'>
                    {getFormattedAMPM(new Date(collection.created))} {' - '}
                    {collection.title || 'untitled'}{' '}
                    {/* {getFormattedDate(new Date(collection.created))} */}
                  </p>
                </GlassWindowContents>
                {/* <GlassWindowPane glassFx={glassFx['glass-10']} /> */}
              </GlassWindowFrame>
            ))}
          </div>
        </div>
      </GlassAreaContainer>
    </>
  );
}
