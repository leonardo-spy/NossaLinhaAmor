import { useEffect, useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { Heart, Calendar, Clock, Star, Sparkles } from "lucide-react";
import { useCountUp } from "@/hooks/use-scroll-animation";
import { useQuery } from "@tanstack/react-query";
import { SectionLoading } from "./LoadingSpinner";

interface TimeTogether {
  days: number;
  weeks: number;
  months: number;
  years: number;
  hours: number;
  startDate: string;
  engagementDate: string | null;
}

interface CounterBoxProps {
  value: number;
  label: string;
  icon: React.ReactNode;
  delay: number;
}

function CounterBox({ value, label, icon, delay }: CounterBoxProps) {
  const { ref, count } = useCountUp(value, 2000);

  return (
    <AnimatedSection animation="zoom" delay={delay}>
      <div 
        ref={ref}
        className="flex flex-col items-center p-6 md:p-8 rounded-2xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm border border-romantic-rose/10 shadow-lg"
        data-testid={`counter-${label.toLowerCase().replace(/\s/g, '-')}`}
      >
        <div className="w-12 h-12 rounded-full bg-romantic-rose/10 flex items-center justify-center mb-4 text-romantic-rose">
          {icon}
        </div>
        <span className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">
          {count.toLocaleString('pt-BR')}
        </span>
        <span className="font-montserrat text-sm md:text-base text-muted-foreground text-center">
          {label}
        </span>
      </div>
    </AnimatedSection>
  );
}

export function CounterSection() {
  const { data: timeTogether, isLoading, error } = useQuery<TimeTogether>({
    queryKey: ["/api/time-together"],
    staleTime: 60000,
  });

  const [localTime, setLocalTime] = useState<TimeTogether | null>(null);

  useEffect(() => {
    if (timeTogether) {
      setLocalTime(timeTogether);
    }
  }, [timeTogether]);

  useEffect(() => {
    if (!timeTogether) return;

    const interval = setInterval(() => {
      const startDate = new Date(timeTogether.startDate);
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - startDate.getTime());
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      
      const years = Math.floor(diffDays / 365);
      const months = Math.floor(diffDays / 30);
      const hours = Math.floor(diffTime / (1000 * 60 * 60));

      setLocalTime({
        ...timeTogether,
        days: diffDays,
        months,
        years,
        hours,
      });
    }, 60000);

    return () => clearInterval(interval);
  }, [timeTogether]);

  const displayData = localTime || timeTogether;

  if (isLoading) {
    return <SectionLoading />;
  }

  if (error || !displayData) {
    return (
      <section className="py-20 md:py-32 px-6 bg-white dark:bg-zinc-950">
        <div className="max-w-5xl mx-auto text-center">
          <Heart className="w-12 h-12 mx-auto text-romantic-rose/50 mb-4" />
          <p className="font-montserrat text-muted-foreground">
            Carregando contagem...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="py-20 md:py-32 px-6 bg-white dark:bg-zinc-950 relative overflow-hidden"
      data-testid="counter-section"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-romantic-rose blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-romantic-gold blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-romantic-rose/40" />
            <Heart className="w-6 h-6 text-romantic-rose animate-heart-beat" fill="currentColor" />
            <span className="w-12 h-px bg-romantic-rose/40" />
          </div>
          <h2 
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4"
            data-testid="counter-title"
          >
            Juntos Há
          </h2>
          <p className="font-montserrat text-lg text-muted-foreground max-w-xl mx-auto">
            E cada dia ao seu lado é uma nova razão para sorrir
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <CounterBox
            value={displayData.days}
            label="Dias de Amor"
            icon={<Calendar className="w-6 h-6" />}
            delay={0}
          />
          <CounterBox
            value={displayData.months}
            label="Meses Juntos"
            icon={<Clock className="w-6 h-6" />}
            delay={150}
          />
          <CounterBox
            value={displayData.years}
            label="Anos de Felicidade"
            icon={<Star className="w-6 h-6" />}
            delay={300}
          />
          <CounterBox
            value={1}
            label="Amor Infinito"
            icon={<Heart className="w-6 h-6" fill="currentColor" />}
            delay={450}
          />
        </div>

        <AnimatedSection animation="fade-up" delay={600} className="mt-12 text-center">
          <p className="font-playfair text-xl md:text-2xl text-muted-foreground italic">
            "O amor não se conta em dias, mas em momentos eternos"
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
