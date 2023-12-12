export default function SidebarIndicatorStore() {
  return (
    <a
      href="/store/visual"
      className="self-stretch justify-start items-center gap-[1rem] inline-flex h-[3rem]"
    >
      <div className="w-[2.5rem] h-[2.5rem] bg-gradient-to-br from-fuchsia-700 to-fuchsia-900 rounded-full" />
      <div className="text-center text-white text-2xl font-bold leading-9">
        Mood
      </div>
    </a>
  );
}
