import { useContext } from 'react';
import { PartContext } from '@/(types)/model/map/part/main';
import { cn } from '@/(utils)/cn';
import { PartsHandlerContext } from '@/(types)/handler/parts/main';

export function PartListEntry({ index }: { index: number }) {
  const partsHandler =
    useContext(PartsHandlerContext);
  const part = useContext(PartContext);
  const active = part.id == partsHandler.partId;

  return (
    <div
      onClick={() => partsHandler.partActions.updatePart(part)}
      className='w-full flex cursor-pointer'
    >
      <p
        className={cn(`text-md font-bold`, {
          'text-slate-400': active,
          'text-slate-500': !active,
        })}
      >
        {index+1}. {part.title}
      </p>
    </div>
  );
}
