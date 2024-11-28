import { useEffect, useState } from 'react';

export function ElementImage({ src }: { src: string }) {
  const [aspectRatio, setAspectRatio] = useState<
    'portrait' | 'landscape' | 'square'
  >('square');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const ratio = img.width / img.height;
      if (ratio > 12 / 9) {
        setAspectRatio('landscape');
      } else if (ratio < 1) {
        setAspectRatio('portrait');
      } else {
        setAspectRatio('portrait');
      }
    };
  }, [src]);

  const aspectClass =
    aspectRatio === 'portrait'
      ? 'aspect-[11/13] p-[0.5rem]'
      : aspectRatio === 'landscape'
        ? 'aspect-[13/11] p-[0.25rem]'
        : 'aspect-square';

  return (
    <div
      className={`flex-shrink-0 bg-slate-100 p-[0.5rem] shadow-md ${aspectClass}`}
    >
      {aspectRatio === 'portrait' && (
        <div className='flex aspect-square w-full items-center justify-center bg-black'>
          <img
            src={src}
            className='w-full flex-shrink-0 bg-black object-contain shadow-md'
            alt='Polaroid frame styled image'
          />
        </div>
      )}
      {aspectRatio === 'landscape' && (
        <img
          src={src}
          className='w-full flex-shrink-0 bg-black object-contain shadow-md'
          alt='Polaroid frame styled image'
        />
      )}
    </div>
  );
}
