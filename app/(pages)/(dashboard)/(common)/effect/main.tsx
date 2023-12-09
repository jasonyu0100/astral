export default function EffectWrapper({
  primaryLayer,
  effectLayer,
  sizeStyle
}: {
  primaryLayer: React.ReactNode;
  effectLayer: React.ReactNode;
  sizeStyle: string;
}) {
  return (
    <div className="relative">
      <div className={`absolute top-0 z-50 ${sizeStyle}`}>
        {primaryLayer}
      </div>
      <div className={`absolute top-0 ${sizeStyle}`}>
        {effectLayer}
      </div>
    </div>
  );
}
