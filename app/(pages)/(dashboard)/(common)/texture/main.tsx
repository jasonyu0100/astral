import { backgroundStyles, borderStyles, containerStyles } from "./data";

export interface TextureContentProps {
  containerStyle?: string;
  contentStyle?: string;
  children: React.ReactNode;
}

function TextureContent({
  containerStyle,
  contentStyle,
  children,
}: TextureContentProps) {
  return (
    <div
      className={`absolute top-0 w-full h-full ${containerStyle} ${contentStyle}`}
    >
      {children}
    </div>
  );
}

export interface TextureBackgroundProps {
  backgroundStyle?: string;
  borderStyle?: string;
}

function TextureBackground({
  backgroundStyle,
  borderStyle,
}: TextureBackgroundProps) {
  return (
    <div
      className={`w-full h-full flex-shrink-0 ${backgroundStyle} ${borderStyle}`}
    ></div>
  );
}

export interface TextureProps {
  displayName: string;
  sizeStyle?: string;
  containerStyle?: string;
  contentStyle?: string;
  backgroundStyle?: string;
  borderStyle?: string;
  children: React.ReactNode;
}

function Texture({
  displayName,
  sizeStyle,
  containerStyle,
  contentStyle,
  backgroundStyle,
  borderStyle,
  children,
}: TextureProps) {
  return (
    <div id={displayName} className={`relative flex-shrink-0 ${sizeStyle}`}>
      <TextureBackground
        backgroundStyle={
          backgroundStyle ? backgroundStyle : backgroundStyles["none"]
        }
        borderStyle={borderStyle ? borderStyle : borderStyles["none"]}
      />
      <TextureContent
        containerStyle={
          containerStyle ? containerStyle : containerStyles["col"]
        }
        contentStyle={contentStyle ? contentStyle : ""}
      >
        {children}
      </TextureContent>
    </div>
  );
}

export default Texture;
