export function PortalFormAltAction({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='mt-auto flex w-full flex-col items-center justify-center'>
      <div className='font text-center text-xl leading-9 text-black'>
        {children}
      </div>
    </div>
  );
}
