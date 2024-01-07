export function PortalFormAltAction({children}: {children: React.ReactNode}) {
  return (
    <div className="w-full border-slate-950 flex flex-col justify-center items-center mt-auto">
      <div className="text-center text-black text-xl font leading-9">
        {children}
      </div>
    </div>
  );
}
