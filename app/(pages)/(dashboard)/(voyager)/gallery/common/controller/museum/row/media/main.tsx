export default function GalleryMuseumMedia({ src }: { src: string }) {
  return (
    <div className="bg-white h-[300px] p-[20px] border-slate-950 border-[10px] flex justify-center items-center">
      <img src={src} className="h-[240px]"/>
    </div>
  );
}
