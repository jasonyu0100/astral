export function ElementSticky({ text }: { text: string }) {
  return (
    <div className='aspect-square w-full flex-shrink-0 rounded-lg bg-yellow-500 p-[1rem] text-black'>
      {text}
    </div>
  );
}
