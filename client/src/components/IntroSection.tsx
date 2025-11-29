import { AnimatedSection } from "./AnimatedSection";
import { Heart } from "lucide-react";

export function IntroSection() {
  return (
    <section 
      className="py-24 md:py-32 px-6 bg-gradient-to-b from-romantic-cream to-white dark:from-zinc-900 dark:to-zinc-950"
      data-testid="intro-section"
    >
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection animation="fade-up">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-16 h-px bg-romantic-rose/40" />
            <Heart className="w-6 h-6 text-romantic-rose" fill="currentColor" />
            <span className="w-16 h-px bg-romantic-rose/40" />
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <h2 
            className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8 leading-relaxed"
            data-testid="intro-title"
          >
            Cada momento junto a você
            <span className="block text-romantic-rose">é uma nova história para contar</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={400}>
          <p 
            className="font-montserrat text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
            data-testid="intro-text"
          >
            Desde o primeiro encontro, soube que havia algo especial entre nós. 
            Cada sorriso, cada abraço, cada momento compartilhado construiu essa 
            linda história que culminou no dia mais especial das nossas vidas.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="scale" delay={600}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-romantic-rose/10 border border-romantic-rose/20">
            <Heart className="w-5 h-5 text-romantic-rose animate-heart-beat" fill="currentColor" />
            <span className="font-montserrat text-romantic-wine dark:text-romantic-rose font-medium">
              Acompanhe nossa jornada
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
