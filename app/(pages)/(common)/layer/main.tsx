import { backgroundStyles, borderStyles, containerStyles, effectStyles } from "../styles/data";

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
  effectStyle?: string;
}

function TextureBackground({
  backgroundStyle,
  effectStyle,
}: TextureBackgroundProps) {
  return (
    <div
      className={`w-full h-full flex-shrink-0 ${backgroundStyle} ${effectStyle}`}
    ></div>
  );
}

export interface LayerProps {
  displayName: string;
  sizeStyle?: string;
  containerStyle?: string;
  contentStyle?: string;
  backgroundStyle?: string;
  effectStyle?: string;
  borderStyle?: string;
  children?: React.ReactNode;
}

function Layer({
  displayName,
  sizeStyle,
  containerStyle,
  contentStyle,
  backgroundStyle,
  effectStyle,
  borderStyle,
  children,
}: LayerProps) {
  return (
    <div id={displayName} className={`relative flex-shrink-0 ${sizeStyle ? sizeStyle : "w-full h-full"} ${borderStyle ? borderStyle : borderStyles["none"]}`}>
      <TextureBackground
        backgroundStyle={
          backgroundStyle ? backgroundStyle : backgroundStyles["none"]
        }
        effectStyle={effectStyle ? effectStyle: effectStyles["none"]}
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

export default Layer;
