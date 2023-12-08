function SeaPointBackground() {
  return (
    <div className="bg-gradient-to-r from-slate-100 to-slate-500 opacity-10 w-full h-full rounded-[10px] flex-shrink-0 border border-slate-200 border-opacity-30"></div>
  );
}

function SeaPointBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute top-0 w-full h-full p-[20px] text-white">
      {children}
    </div>
  );
}

export default function SeaPoint({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[300px] h-[150px] flex-shrink-0">
      <SeaPointBackground />
      <SeaPointBody>{children}</SeaPointBody>
    </div>
  );
}
