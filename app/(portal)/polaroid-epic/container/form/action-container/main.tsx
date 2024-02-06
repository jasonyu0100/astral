export function PortalFormActionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='mt-auto flex w-full flex-col space-y-[1rem]'>
      {children}
    </div>
  );
}
