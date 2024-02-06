import { CollectionObj } from '@/tables/gallery/collection/main';

export function GalleryCollectionInfo({
  collection,
}: {
  collection: CollectionObj;
}) {
  return (
    <div className='flex h-full flex-grow flex-col items-center justify-center space-y-[1rem] p-[1rem]'>
      <p className='font-extraBold text-slate-400'>{collection.name}</p>
    </div>
  );
}
