export function ElementImage({ src }: { src: string }) {
  return (
    <div className='aspect-[11/13] bg-slate-100 p-[1rem]'>
      <img
        src={src}
        className='aspect-square w-full flex-shrink-0 bg-black object-contain shadow-md'
      />
    </div>
  );
}
