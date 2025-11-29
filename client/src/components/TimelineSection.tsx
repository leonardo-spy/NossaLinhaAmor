import { AnimatedSection } from "./AnimatedSection";
import { Heart, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { BoomerangVideo } from "./BoomerangVideo";

interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
}

const timelineData: TimelineItem[] = [
  {
    id: "1",
    date: "O Primeiro Encontro",
    title: "Quando tudo começou",
    description: "Naquele dia especial na Liberdade, em São Paulo, acompanhado da minha irmã que era amiga dela. Um olhar, um sorriso, e algo mágico aconteceu entre nós.",
    image: "/onde_tudo_comecou_1764454053741.JPEG",
  },
  {
    id: "2",
    date: "Nosso Primeiro Jantar",
    title: "A noite que mudou tudo",
    description: "Um jantar em um sushi especial, conversas que pareciam não ter fim, e a certeza de que aquilo era apenas o começo de algo muito especial.",
    image: "/um_jantar_novo.JPEG",
  },
  {
    id: "3",
    date: "Noite de Show",
    title: "Momentos inesquecíveis",
    description: "Um show ao lado de amigos e familiares. Cada momento junto se transformava em uma lembrança preciosa e inesquecível.",
    image: "/noite_de_show_1764454053738.JPG",
  },
  {
    id: "4",
    date: "Pedido de Namoro",
    title: "Quando eu pedi você em namoro",
    description: "Em Florianópolis, naquele momento único onde tudo fazia sentido. Um pedido de namoro que selou nosso compromisso e nosso amor.",
    video: "/pedido_namoro_1764454053740.MOV",
  },
  {
    id: "5",
    date: "Nosso Apartamento",
    title: "Dançando em nosso apartamento",
    description: "Construindo nosso lar, criando memórias ao lado do Chico. Cada dia dançando pela vida com você é uma festa.",
    video: "/dançando_em_casa_1764454053739.mp4",
  },
  {
    id: "6",
    date: "Viagens Inesquecíveis",
    title: "Explorando o mundo juntos",
    description: "No pico máximo de Campos do Jordão, ao topo da montanha. Cada pôr do sol assistido lado a lado fortalecia ainda mais nosso amor.",
    image: "/viagem_nesquecivel_1764454053740.JPEG",
  },
  {
    id: "7",
    date: "O Grande Dia",
    title: "O pedido de noivado",
    description: "Em frente ao Pão de Açúcar, na cidade maravilhosa, fiz a pergunta mais importante da minha vida. E ela disse SIM! O momento mais esperado chegou e marcou para sempre nossos corações.",
    image: "/image_21_novo.jpg",
  },
];

function TimelineCard({ 
  item, 
  index, 
  isLeft 
}: { 
  item: TimelineItem; 
  index: number; 
  isLeft: boolean;
}) {
  const animationType = isLeft ? "fade-right" : "fade-left";
  const isVideo = !!item.video;
  const needsResponsiveLayout = ["2", "5", "7"].includes(item.id);
  
  return (
    <div 
      className={`flex items-center gap-4 md:gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col`}
      data-testid={`timeline-item-${item.id}`}
    >
      <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
        <AnimatedSection animation={animationType as any} delay={index * 100}>
          <Card className="overflow-hidden group">
            <div className="relative h-48 md:h-64 overflow-hidden">
              {isVideo ? (
                <>
                  {needsResponsiveLayout ? (
                    <>
                      {/* Mobile: normal video */}
                      <div className="md:hidden w-full h-full">
                        <BoomerangVideo 
                          src={item.video!}
                          className="w-full h-full"
                        />
                      </div>
                      {/* Desktop: video with black background and padding */}
                      <div className="hidden md:flex w-full h-full bg-black items-center justify-center">
                        <BoomerangVideo 
                          src={item.video!}
                          className="h-auto w-auto max-h-full max-w-full"
                        />
                      </div>
                    </>
                  ) : (
                    <BoomerangVideo 
                      src={item.video!}
                      className="w-full h-full"
                    />
                  )}
                </>
              ) : (
                <>
                  {needsResponsiveLayout ? (
                    <>
                      {/* Mobile: image with cover */}
                      <div className="md:hidden w-full h-full">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          style={item.id === "2" ? { objectPosition: "center 35%" } : undefined}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                      {/* Desktop: image with black background and padding */}
                      <div className="hidden md:flex w-full h-full bg-black items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-auto w-auto max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </>
                  )}
                </>
              )}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-white/90 text-sm mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className="font-montserrat">{item.date}</span>
                </div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-playfair text-xl md:text-2xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="font-montserrat text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </Card>
        </AnimatedSection>
      </div>

      <div className="hidden md:flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-romantic-rose border-4 border-romantic-blush shadow-lg z-10" />
      </div>

      <div className="flex-1 hidden md:block" />
    </div>
  );
}

export function TimelineSection() {
  return (
    <section 
      className="py-20 md:py-32 px-6 bg-white dark:bg-zinc-950"
      data-testid="timeline-section"
    >
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-romantic-rose/40" />
            <Heart className="w-6 h-6 text-romantic-rose" fill="currentColor" />
            <span className="w-12 h-px bg-romantic-rose/40" />
          </div>
          <h2 
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4"
            data-testid="timeline-title"
          >
            Nossa Timeline
          </h2>
          <p className="font-montserrat text-lg text-muted-foreground max-w-xl mx-auto">
            Os momentos que construíram nossa história de amor
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-romantic-rose/20 via-romantic-rose/40 to-romantic-rose/20 -translate-x-1/2" />
          
          <div className="space-y-12 md:space-y-16">
            {timelineData.map((item, index) => (
              <TimelineCard 
                key={item.id} 
                item={item} 
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
