import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

type AnimationType = 
  | "fade-up" 
  | "fade-down" 
  | "fade-left" 
  | "fade-right" 
  | "scale" 
  | "zoom" 
  | "reveal";

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}

const animationClasses: Record<AnimationType, string> = {
  "fade-up": "animate-fade-in-up",
  "fade-down": "animate-fade-in-down",
  "fade-left": "animate-fade-in-left",
  "fade-right": "animate-fade-in-right",
  "scale": "animate-scale-in",
  "zoom": "animate-zoom-in",
  "reveal": "animate-reveal-up",
};

export function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  className,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0",
        isVisible && animationClasses[animation],
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  overlayClassName?: string;
}

export function ParallaxImage({
  src,
  alt,
  speed = 0.3,
  className,
  overlayClassName,
}: ParallaxImageProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out",
          isVisible ? "scale-100" : "scale-110"
        )}
        style={{
          backgroundImage: `url(${src})`,
        }}
        role="img"
        aria-label={alt}
      />
      {overlayClassName && (
        <div className={cn("absolute inset-0", overlayClassName)} />
      )}
    </div>
  );
}

interface StaggeredChildrenProps {
  children: React.ReactNode[];
  baseDelay?: number;
  delayIncrement?: number;
  animation?: AnimationType;
  className?: string;
}

export function StaggeredChildren({
  children,
  baseDelay = 0,
  delayIncrement = 150,
  animation = "fade-up",
  className,
}: StaggeredChildrenProps) {
  return (
    <>
      {children.map((child, index) => (
        <AnimatedSection
          key={index}
          animation={animation}
          delay={baseDelay + index * delayIncrement}
          className={className}
        >
          {child}
        </AnimatedSection>
      ))}
    </>
  );
}
