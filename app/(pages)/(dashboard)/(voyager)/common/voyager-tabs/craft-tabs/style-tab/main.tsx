export function StyleTab({ active }: { active: boolean }) {
    return (
      <a href="/craft/style" className="flex flex-col items-start w-[9rem]">
        <div className="w-[7rem] mt-1 text-white text-2xl font-extraBold leading-9">
          STYLE
        </div>
        {active && (
          <div className="w-[9rem] h-1 bg-gradient-to-br from-amber-300 to-emerald-400" />
        )}
      </a>
    );
  }
  