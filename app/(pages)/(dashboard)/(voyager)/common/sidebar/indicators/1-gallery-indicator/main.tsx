export default function SidebarIndicatorGallery() {
  return (
    <a
      href="/gallery/now"
      className="self-stretch justify-start items-center gap-[1rem] inline-flex h-[3rem]"
    >
      <div className="w-[2.5rem] h-[2.5rem] bg-gradient-to-br from-cyan-500 to-violet-500 rounded-full" />
      <div className="text-center text-white text-2xl font-bold leading-9">
        Works
      </div>
    </a>
  );
}
