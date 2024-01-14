interface CraftFolderGridAdd extends React.ComponentPropsWithoutRef<"button"> {}

export function CollectionResourceAdd({ ...props }: CraftFolderGridAdd) {
  return (
    <button {...props}>
      <div className="flex flex-row h-[150px] aspect-[36/16] items-center space-x-[3rem]">
        <div className="w-[150px] h-[150px] rounded-full bg-black flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-1/6 h-1/6"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M8.52138 11.3434H0.0551758V8.52138H8.52138V0.0551758H11.3434V8.52138H19.8096V11.3434H11.3434V19.8096H8.52138V11.3434Z"
              fill="#CBD5E1"
            />
          </svg>
        </div>
        <p className="text-white text-lg font-bold">Add File</p>
      </div>
    </button>
  );
}
