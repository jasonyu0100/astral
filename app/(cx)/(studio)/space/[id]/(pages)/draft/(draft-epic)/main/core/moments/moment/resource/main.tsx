import { borderFx } from '@/(fx)/data';
import { ResourceVariant } from '@/(types)/model/resource/main';
import { cn } from '@/(lgx)/utils/cn';
import { useContext } from 'react';
import { DraftMomentContext } from '../../main';

export function MomentResource() {
  const moment = useContext(DraftMomentContext);
  
  return (
    <div className='flex aspect-[13/16] h-[600px] flex-shrink-0 flex-col items-center bg-white p-[30px]'>
      {moment.variant === ResourceVariant.LOG && <div></div>}
      {moment.variant === ResourceVariant.FILE && <div></div>}
      {moment.variant === ResourceVariant.NOTE && <div></div>}
      {moment.variant === ResourceVariant.FILE && (
        <>
        <img
          className={cn(
            'aspect-square w-full flex-shrink-0 bg-black object-cover',
            borderFx['border-all'],
          )}
          src={moment?.file?.src}
        />
        <div className='flex h-full w-full flex-col items-center justify-center'>
          <div className='w-full text-center font-permanentMarker text-[64px] font-normal capitalize leading-9 text-black'>
            {moment.title}
          </div>
        </div>
        </>
      )}
    </div>
  );
}
