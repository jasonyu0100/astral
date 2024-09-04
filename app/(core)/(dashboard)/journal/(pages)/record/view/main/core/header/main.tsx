import { vaultMap } from '@/(core)/(dashboard)/vault/map';
import { ContextForGalleryCollectionList } from '@/(server)/controller/gallery/collection/list';
import { AstralListIcon } from '@/icons/list/main';
import { useGlobalUser } from '@/logic/store/user/main';
import { glassFx } from '@/style/data';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';

export function JournalRecordHeader() {
  const user = useGlobalUser((state) => state.user);
  const collectionListController = useContext(ContextForGalleryCollectionList);

  return (
    <GlassWindowFrame className='flex h-[7rem] w-full flex-col items-center px-[2rem]'>
      <div className='grid h-full w-full grid-cols-3 items-center'>
        <div className='flex flex-row space-x-[1rem] justify-self-start'>
          <AstralListIcon
            onClick={() => {
              window.location.href = vaultMap.vault.explorer.gallery.id.link(
                user.journalId,
              );
            }}
          />
          {/* <AstralListIcon onClick={() => {}} /> */}
        </div>
        <div className='flex flex-col items-center justify-self-center'>
          <p className='text-xl font-bold text-white'>
            {getFormattedDate(
              new Date(
                collectionListController.state?.currentObj?.created || '',
              ),
            )}
          </p>
          <p className='text-md font-light text-white'>
            {collectionListController.state.currentObj?.title}
          </p>
        </div>
        <div className='justify-self-end'></div>
      </div>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
