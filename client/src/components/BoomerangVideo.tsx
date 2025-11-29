interface BoomerangVideoProps {
  src: string;
  className?: string;
}

export function BoomerangVideo({ src, className = "" }: BoomerangVideoProps) {
  const hasCustomLayout = className.includes("max-h-full") || className.includes("max-w-full");
  
  return (
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className={`${hasCustomLayout ? "object-contain" : "w-full h-full object-cover"} ${className}`}
      style={{ display: 'block' }}
    />
  );
}
