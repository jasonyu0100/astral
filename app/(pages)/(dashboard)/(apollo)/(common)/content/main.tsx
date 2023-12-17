export function ApolloContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col px-[3rem] pt-[2rem] w-full h-full"
    >
      
      {children}
    </div>
  );
}

