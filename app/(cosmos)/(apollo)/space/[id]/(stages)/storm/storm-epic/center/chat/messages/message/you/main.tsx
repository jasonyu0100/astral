export function StormYouChatMessage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className='ml-auto max-w-[350px] rounded-[2rem] bg-gradient-to-br from-blue-600 to-cyan-400 p-3 font-regular text-white'>
      {children}
    </p>
  );
}
