import { FormInputProps } from "@/(common)/types/main";

export default function SearchBarInput({ ...props }: FormInputProps) {
  return (
    <input
      className="flex-grow text-white text-2xl font-regular font-['Creato Display'] leading-7 h-[3rem] bg-transparent outline-none"
      placeholder="enter search..."
      {...props}
    />
  );
}
