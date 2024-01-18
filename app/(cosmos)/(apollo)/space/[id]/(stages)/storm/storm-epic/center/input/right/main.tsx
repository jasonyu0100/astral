export function StormChatInputRight({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='w-[150px] h-[50px] flex flex-row justify-evenly items-center flex-shrink-0'>
      {children}
    </div>
  );
}
