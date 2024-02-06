export function StormChatInputRight({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex h-[50px] w-[150px] flex-shrink-0 flex-row items-center justify-evenly'>
      {children}
    </div>
  );
}
