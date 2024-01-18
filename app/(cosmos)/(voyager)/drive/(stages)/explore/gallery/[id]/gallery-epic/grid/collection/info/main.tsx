import { CollectionObj } from '@/tables/gallery/collection/main';

export function CollectionInfo({ collection }: { collection: CollectionObj }) {
  return (
    <div className='flex flex-col space-y-[1rem] flex-grow h-full p-[1rem] items-center justify-center'>
      <div className='text-slate-400 text-xl font-bold'>{collection.name}</div>
    </div>
  );
}
