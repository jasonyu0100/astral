export default function BoardHeaderTitle({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='font-extraBold text-xl text-slate-300'>{children}</div>
  );
}
