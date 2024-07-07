export function UploadFileLabel({ children }: { children?: React.ReactNode }) {
  return (
    <label
      htmlFor='fileInput'
      className='mb-1 w-full text-xs font-bold text-slate-700'
    >
      {children}
    </label>
  );
}
