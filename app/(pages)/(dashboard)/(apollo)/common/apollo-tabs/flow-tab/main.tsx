export function FlowTab({ active }: { active: boolean }) {
  return (
    <a
      href="/flow"
      className="flex flex-col items-start w-[9rem]"
    >
      <div className="w-[7rem] mt-1 text-white text-2xl font-extraBold leading-9">
        FLOW
      </div>
      {active && (
      <div className="w-[9rem] h-1 bg-gradient-to-br from-purple-900 to-fuchsia-900" />
      )}
    </a>
  );
}
