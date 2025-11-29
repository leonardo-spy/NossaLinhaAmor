import { AnimatedSection } from "./AnimatedSection";
import { Heart, Instagram, Music, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FooterSection() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Nossa Jornada de Amor",
          text: "Conheça nossa história de amor - do namoro ao noivado!",
          url: window.location.href,
        });
      } catch (err) {
        console.log("Erro ao compartilhar:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <footer 
      className="py-16 md:py-24 px-6 bg-gradient-to-b from-romantic-cream to-white dark:from-zinc-900 dark:to-zinc-950"
      data-testid="footer-section"
    >
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection animation="fade-up">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-16 h-px bg-romantic-rose/40" />
            <Heart className="w-8 h-8 text-romantic-rose animate-heart-beat" fill="currentColor" />
            <span className="w-16 h-px bg-romantic-rose/40" />
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <h2 
            className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6"
            data-testid="footer-title"
          >
            E a história continua...
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={400}>
          <p className="font-montserrat text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Cada dia é uma nova página sendo escrita nesse livro chamado amor. 
            Obrigado por fazer parte da nossa história!
          </p>
        </AnimatedSection>

        <AnimatedSection animation="scale" delay={600}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={handleShare}
              className="gap-2 border-romantic-rose/30 text-foreground hover:bg-romantic-rose/10 hover:border-romantic-rose/50"
              data-testid="button-share"
            >
              <Share2 className="w-4 h-4" />
              Compartilhar
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={800}>
          <div className="mt-16 pt-8 border-t border-romantic-rose/10">
            <p className="font-montserrat text-sm text-muted-foreground">
              Feito com{" "}
              <Heart className="w-4 h-4 inline-block text-romantic-rose mx-1" fill="currentColor" />
              {" "}para celebrar nosso amor
            </p>
            <p className="font-playfair text-xl text-romantic-rose mt-4 font-semibold">
              Para sempre juntos
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
