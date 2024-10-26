export function ElementImage({ src }: { src: string }) {
  return (
    <img src={src} className='w-full flex-shrink-0 object-contain shadow-md' />
  );
}
