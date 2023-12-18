export function ApolloContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col pl-[3rem] pr-[2rem] pt-[2rem] w-full h-full"
    >
      
      {children}
    </div>
  );
}

