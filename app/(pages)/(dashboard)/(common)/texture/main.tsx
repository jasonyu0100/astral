import Image from "next/image";

function TextureContent({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`absolute top-0 w-full h-full`}
    >
      {children}
    </div>
  );
}

function TextureBackground({
  backgroundStyle,
  borderStyle,
}: {
  backgroundStyle: string;
  borderStyle: string;
}) {
  return (
    <div
      className={`w-full h-full flex-shrink-0 ${backgroundStyle} ${borderStyle}`}
    ></div>
  );
}

function Texture({
  sizeStyle,
  backgroundStyle,
  borderStyle,
  children,
}: {
  sizeStyle: string;
  children: React.ReactNode;
  backgroundStyle: string;
  borderStyle: string;
}) {
  return (
    <div className={`relative flex-shrink-0 ${sizeStyle}`}>
      <TextureBackground
        backgroundStyle={backgroundStyle}
        borderStyle={borderStyle}
      />
      <TextureContent>{children}</TextureContent>
    </div>
  );
}

export default Texture;
