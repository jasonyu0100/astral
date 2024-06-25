export function UploadedFileEntry({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='flex w-full flex-row items-center justify-between space-x-[2rem] bg-slate-50 pr-[2rem]'>
      {children}
    </div>
  );
}
