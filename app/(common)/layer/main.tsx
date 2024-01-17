import { DivInputProps } from "../types/main";

interface LayerContentProps extends DivInputProps {
  contentStyle?: string;
  children: React.ReactNode;
}

function LayerContent({ children, ...props }: LayerContentProps) {
  return (
    <div
      {...props}
      className={`absolute top-0 w-full h-full ${props.className || ""}`}
    >
      {children}
    </div>
  );
}

interface LayerBackgroundProps {
  backgroundStyle?: string;
  effectStyle?: string;
}

function LayerBackground({
  backgroundStyle,
  effectStyle,
}: LayerBackgroundProps) {
  return (
    <div
      className={`w-full h-full flex-shrink-0 ${backgroundStyle} ${effectStyle}`}
    ></div>
  );
}

interface LayerProps extends DivInputProps {
  displayName: string;
  sizeStyle?: string;
  contentStyle?: string;
  backgroundStyle?: string;
  effectStyle?: string;
  borderStyle?: string;
  children?: React.ReactNode;
}

export function Layer({
  displayName,
  sizeStyle,
  backgroundStyle,
  effectStyle,
  borderStyle,
  children,
  ...props
}: LayerProps) {
  return (
    <div
      id={displayName}
      className={`relative flex-shrink-0 ${sizeStyle || "w-full h-full"} ${
        borderStyle || ""
      }`}
    >
      <LayerBackground
        backgroundStyle={backgroundStyle || ""}
        effectStyle={effectStyle || ""}
      />
      <LayerContent {...props}>{children}</LayerContent>
    </div>
  );
}
