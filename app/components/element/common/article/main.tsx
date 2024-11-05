export function ElementArticle({ text }: { text: string }) {
  return (
    <div className='text-md aspect-[10/14] w-full flex-shrink-0 bg-slate-200 p-[2rem] font-light text-black shadow-md'>
      {text}
    </div>
  );
}
