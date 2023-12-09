export default function PillarsMuseumMedia({ src }: { src: string }) {
  return (
    <div className="bg-white w-[200px] p-[20px] border-slate-950 border-[10px] flex justify-center items-center">
      <img src={src} />
    </div>
  );
}
