export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {}

export function FormCheckbox({ ...props }: InputProps) {
  return (
    <div className="flex items-center h-5">
      <input
        type="checkbox"
        className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
        {...props}
      />
    </div>
  );
}
