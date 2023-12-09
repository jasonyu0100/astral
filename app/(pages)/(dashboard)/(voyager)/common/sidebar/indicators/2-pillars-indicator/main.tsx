export default function SidebarIndicatorPillars() {
  return (
    <a
      href="/pillars/inspire"
      className="self-stretch justify-start items-center gap-[1rem] inline-flex h-[3rem]"
    >
      <div className="w-[2.5rem] h-[2.5rem] bg-gradient-to-br from-red-500 to-amber-300 rounded-full" />
      <div className="text-center text-white text-2xl font-bold leading-9">
        Pillars
      </div>
    </a>
  );
}
