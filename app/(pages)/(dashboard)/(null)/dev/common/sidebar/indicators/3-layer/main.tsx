export default function SidebarIndicatorLayer() {
  return (
    <a
      href="/dev/layer"
      className="self-stretch justify-start items-center gap-[1rem] inline-flex h-[3rem]"
    >
      <div className="w-[2.5rem] h-[2.5rem] bg-gradient-to-br from-amber-300 to-emerald-400 rounded-full" />
      <div className="text-center text-white text-2xl font-bold leading-9">
        Layer
      </div>
    </a>
  );
}
