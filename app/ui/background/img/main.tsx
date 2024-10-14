export function ImageBackground({
  src,
  active,
}: {
  src?: string;
  active?: boolean;
}) {
  return (
    <div className='relative h-full w-full'>
      <div className='absolute inset-0 h-full w-full'>
        {active && src && (
          <>
            <img
              src={src}
              className='absolute inset-0 h-full w-full object-cover'
            />
            <div className='absolute inset-0 bg-slate-800 bg-opacity-20'></div>
          </>
        )}
      </div>
    </div>
  );
}
