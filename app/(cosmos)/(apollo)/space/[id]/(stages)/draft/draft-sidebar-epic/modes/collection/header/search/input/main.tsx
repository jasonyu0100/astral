export interface SearchBarInputProps
  extends React.ComponentPropsWithoutRef<'input'> {}

export default function SearchBarInput({ ...props }: SearchBarInputProps) {
  return (
    <input
      className="font-['Creato Display'] h-[3rem] flex-grow bg-transparent font-regular text-2xl leading-7 text-white outline-none"
      placeholder='enter search...'
      {...props}
    />
  );
}
