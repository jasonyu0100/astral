export function ElementPage({ text }: { text: string }) {
  return (
    <div className='aspect-[5/7] w-full flex-shrink-0 bg-slate-300 bg-opacity-30 p-[1rem] font-light text-slate-300'>
      {text}
    </div>
  );
}
