export default function GalleryMuseumMedia({ src }: { src: string }) {
  return (
    <div className="bg-white h-[300px] p-[2rem] border-slate-950 border-[1rem] flex justify-center items-center">
      <img src={src} className="h-[240px]"/>
    </div>
  );
}
