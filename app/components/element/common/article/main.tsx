export function ElementArticle({ text }: { text: string }) {
  return (
    <div className='aspect-[7/5] w-full flex-shrink-0 rounded-[1rem] bg-slate-800 bg-opacity-30 p-[2rem] font-light text-slate-300 shadow-md'>
      {text}
    </div>
  );
}
