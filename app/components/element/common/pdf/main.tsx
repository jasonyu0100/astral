export function ElementPdf({ src }: { src: string }) {
  return (
    <div className='relative h-[400px] w-full'>
      <iframe
        src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${encodeURIComponent(src)}`}
        height='100%'
        width='100%'
        className='rounded-md border-2 border-gray-300'
        title='PDF Preview'
      />
    </div>
  );
}
