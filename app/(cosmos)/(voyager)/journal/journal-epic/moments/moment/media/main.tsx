import { borderStyles } from '@/(common)/styles/data';
import { MomentObj } from '@/tables/flow/moment/main';
import { ResourceVariant } from '@/tables/resource/main';
import { oembed } from '@loomhq/loom-embed';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export function PostMedia({ moment }: { moment: MomentObj }) {
  const [videoHTML, setVideoHTML] = useState('');

  useEffect(() => {
    if (moment.variant == ResourceVariant.LOOM) {
      embedLoom();
    }
  }, []);

  const embedLoom = async () => {
    const sharedUrl = moment?.loom?.sharedUrl || ""
    const { html } = await oembed(sharedUrl, { width: 427.5 });
    setVideoHTML(html);
  };

  return (
    <div className='h-[600px] p-[30px] aspect-[13/16] bg-white flex-shrink-0 flex flex-col items-center'>
      {moment.variant === ResourceVariant.FILE && (
        <img
          className={clsx(
            'w-full aspect-square flex-shrink-0 object-contain bg-black',
            borderStyles['border-all'],
          )}
          src={moment?.file?.src}
        />
      )}
      {moment.variant === ResourceVariant.LOOM && (
        <div
          className='w-full aspect-square flex-shrink-0 flex flex-col items-center justify-center bg-black'
          dangerouslySetInnerHTML={{ __html: videoHTML }}
        ></div>
      )}
      <div className='h-full w-full flex flex-col items-center justify-center'>
        <div className='text-center w-full text-black text-[64px] font-normal font-permanentMarker leading-9 capitalize'>
          {moment.title}
        </div>
      </div>
    </div>
  );
}


