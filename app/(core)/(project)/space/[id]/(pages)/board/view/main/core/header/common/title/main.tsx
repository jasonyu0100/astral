export default function BoardHeaderTitle({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <div className='text-xl font-extraBold text-slate-300'>{children}</div>;
}
