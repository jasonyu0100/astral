export interface SearchBarInputProps
  extends React.ComponentPropsWithoutRef<"input"> {}

export default function SearchBarInput({ ...props }: SearchBarInputProps) {
  return (
    <input
      className="flex-grow text-white text-2xl font-regular font-['Creato Display'] leading-7 h-[3rem] bg-transparent outline-none"
      placeholder="enter search..."
      {...props}
    />
  );
}
