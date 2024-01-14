interface FormButton extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}

export function FormButton({ children, ...props }: FormButton) {
  return (
    <button
      {...props}
      className={`w-full h-[60px] bg-slate-950 flex flex-col justify-center items-center ${props.className}`}
    >
      <p className="text-center text-white text-3xl font-bold leading-9">
        {children}
      </p>
    </button>
  );
}
