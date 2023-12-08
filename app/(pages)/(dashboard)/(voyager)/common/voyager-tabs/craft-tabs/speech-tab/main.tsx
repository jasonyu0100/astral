export function SpeechTab({ active }: { active: boolean }) {
  return (
    <a href="/craft/speech" className="flex flex-col items-start w-[9rem]">
      <div className="w-[7rem] mt-1 text-white text-2xl font-extraBold leading-9">
        SPEECH
      </div>
      {active && (
        <div className="w-[9rem] h-1 bg-gradient-to-br from-emerald-500 to-blue-600" />
      )}
    </a>
  );
}
