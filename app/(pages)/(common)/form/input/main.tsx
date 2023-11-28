export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  children: React.ReactNode;
}

export function FormInput({ children, ...props }: InputProps) {
  return (
    <input
      className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
      {...props}
    />
  );
}
