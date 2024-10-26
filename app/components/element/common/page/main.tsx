export function ElementPage({ text }: { text: string }) {
  return (
    <div className='aspect-[5/7] w-full flex-shrink-0 bg-purple-500 p-[1rem] text-white'>
      {text}
    </div>
  );
}
