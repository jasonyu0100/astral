import Layer from "@/(pages)/(dashboard)/(common)/layer/main";

export default function SeaPoint({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={SeaPoint.name}
      sizeStyle="w-[300px] h-[150px]"
      backgroundStyle="bg-gradient-to-r from-slate-100 to-slate-500 opacity-10"
      borderStyle=""
    >
      <div className="absolute top-0 w-full h-full p-[20px] text-white">
        {children}
      </div>
    </Layer>
  );
}
