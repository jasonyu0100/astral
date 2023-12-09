export default function SidebarIndicatorUnits() {
  return (
    <a
      href="/dev/units"
      className="self-stretch justify-start items-center gap-[1rem] inline-flex h-[3rem]"
    >
      <div className="w-[2.5rem] h-[2.5rem] bg-gradient-to-br from-slate-500 to-slate-700 rounded-full" />
      <div className="text-center text-white text-2xl font-bold leading-9">
        Units
      </div>
    </a>
  );
}
