export function UploadedFile({ children } : { children: React.ReactNode}) {
    return  <div className='flex flex-row w-full space-x-[2rem] items-center justify-between pr-[2rem] bg-slate-50 border-b border-black'>
      {children}
    </div>
}