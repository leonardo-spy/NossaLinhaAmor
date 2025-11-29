import { useEffect, useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { Heart, Sparkles, Star } from "lucide-react";

export function ProposalSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      className="relative py-20 md:py-32 overflow-hidden"
      data-testid="proposal-section"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(/image_5.jpg)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <AnimatedSection animation="fade-right">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-romantic-gold" />
                <span className="font-montserrat text-romantic-gold uppercase tracking-widest text-sm">
                  O Momento Especial
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={200}>
              <h2 
                className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                data-testid="proposal-title"
              >
                Ela Disse
                <span className="block text-romantic-rose">Sim!</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={400}>
              <p className="font-montserrat text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                Naquele momento mágico, com o coração acelerado e as mãos tremendo, 
                fiz a pergunta mais importante da minha vida. O mundo parou, o tempo 
                congelou, e quando ela disse "sim", soube que todos os nossos sonhos 
                estavam prestes a se tornar realidade.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={600}>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <Heart className="w-4 h-4 text-romantic-rose" fill="currentColor" />
                  <span className="font-montserrat text-white text-sm">Para sempre juntos</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <Star className="w-4 h-4 text-romantic-gold" fill="currentColor" />
                  <span className="font-montserrat text-white text-sm">Um novo capítulo</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={800}>
              <div className="mt-10 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <p className="font-playfair text-xl md:text-2xl text-white italic text-center">
                  "O amor verdadeiro não é encontrado, é construído"
                </p>
              </div>
            </AnimatedSection>
          </div>

          <div className="order-1 md:order-2">
            <AnimatedSection animation="scale" delay={300}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-romantic-rose/30 to-romantic-gold/30 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <img
                    src="/image_78.jpg"
                    alt="Anel de noivado"
                    className="w-full h-full object-cover aspect-square"
                    data-testid="proposal-ring-image"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-romantic-rose flex items-center justify-center shadow-lg animate-float">
                  <Heart className="w-10 h-10 text-white animate-heart-beat" fill="currentColor" />
                </div>
                
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-romantic-gold/80 flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
