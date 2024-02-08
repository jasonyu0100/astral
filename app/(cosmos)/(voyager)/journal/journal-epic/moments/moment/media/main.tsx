import { borderStyles } from '@/(common)/styles/data';
import { MomentObj } from '@/tables/flow/moment/main';
import { ResourceVariant } from '@/tables/resource/main';
import { cn } from '@/utils/cn';
import { oembed } from '@loomhq/loom-embed';
import { useEffect, useState } from 'react';

export function PostMedia({ moment }: { moment: MomentObj }) {
  const [videoHTML, setVideoHTML] = useState('');

  useEffect(() => {
    if (moment.variant == ResourceVariant.LOG) {
      embedLoom();
    }
  }, []);

  const embedLoom = async () => {
    const sharedUrl = moment?.loom?.sharedUrl || '';
    const { html } = await oembed(sharedUrl, { width: 427.5 });
    setVideoHTML(html);
  };

  return (
    <div className='flex aspect-[13/16] h-[600px] flex-shrink-0 flex-col items-center bg-white p-[30px]'>
      {moment.variant === ResourceVariant.FILE && (
        <img
          className={cn(
            'aspect-square w-full flex-shrink-0 bg-black object-contain',
            borderStyles['border-all'],
          )}
          src={moment?.file?.src}
        />
      )}
      {moment.variant === ResourceVariant.LOG && (
        <div
          className='flex aspect-square w-full flex-shrink-0 flex-col items-center justify-center bg-black'
          dangerouslySetInnerHTML={{ __html: videoHTML }}
        ></div>
      )}
      <div className='flex h-full w-full flex-col items-center justify-center'>
        <div className='w-full text-center font-permanentMarker text-[64px] font-normal capitalize leading-9 text-black'>
          {moment.title}
        </div>
      </div>
    </div>
  );
}
