export function SeaTab({ active }: { active: boolean }) {
  return (
    <a href="/sea" className="flex flex-col items-start w-[9rem]">
      <div className="w-[7rem] mt-1 text-white text-2xl font-extraBold leading-9">
        SEA
      </div>
      {active && (
        <div className="w-[9rem] h-1 bg-gradient-to-br from-red-500 to-amber-300" />
      )}
    </a>
  );
}
