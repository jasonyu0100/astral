import { cn } from "@/(utils)/cn";

export function VerseChapterListEntry({ index }: { index: number }) {

  return (
    <div
      className='w-full flex cursor-pointer'
    >
      <p
        className={cn(`text-md font-bold`)}
      >
        TEST
      </p>
    </div>
  );
}
