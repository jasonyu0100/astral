export function SpaceProgressAgentChatMessage({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <p className='mr-auto max-w-[350px] rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 p-3 lowercase text-white'>
      {children}
    </p>
  );
}
