import { useEffect, useState } from "react";
import { Heart, ChevronDown } from "lucide-react";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.4;
  const opacityValue = Math.max(0, 1 - scrollY / 600);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
        style={{
          backgroundImage: `url(/image_35.jpg)`,
          transform: `translateY(${parallaxOffset}px) scale(1.1)`,
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      
      <div 
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{ opacity: opacityValue }}
      >
        <div
          className={`transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Heart 
            className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 text-romantic-rose animate-heart-beat" 
            fill="currentColor"
          />
        </div>
        
        <h1
          className={`font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          data-testid="hero-title"
        >
          Nossa Jornada
          <span className="block text-romantic-rose">de Amor</span>
        </h1>
        
        <p
          className={`font-montserrat text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          data-testid="hero-subtitle"
        >
          Do primeiro olhar ao pedido de noivado
          <span className="block mt-2 text-romantic-blush italic">
            uma história escrita a dois
          </span>
        </p>

        <div
          className={`flex items-center justify-center gap-2 text-white/80 text-sm md:text-base font-montserrat transition-all duration-1000 delay-900 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="w-12 h-px bg-white/40" />
          <span>Ela disse SIM</span>
          <Heart className="w-4 h-4 text-romantic-rose" fill="currentColor" />
          <span className="w-12 h-px bg-white/40" />
        </div>
      </div>

      <button
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
        }}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-all duration-300 animate-bounce-gentle ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Role para baixo"
        data-testid="scroll-down-button"
      >
        <ChevronDown className="w-10 h-10" />
      </button>
    </section>
  );
}
