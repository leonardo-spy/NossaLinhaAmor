import { AnimatedSection } from "./AnimatedSection";
import { Heart, Sparkles } from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  size: "small" | "medium" | "large";
}

const galleryImages: GalleryImage[] = [
  { id: "1", src: "/attached_assets/eu_e_Evelyn_floripa_1764457501094.JPG", alt: "Nós em Floripa", size: "large" },
  { id: "2", src: "/attached_assets/evelyn_buque_1764457501094.JPG", alt: "Evelyn com buquê", size: "small" },
  { id: "3", src: "/attached_assets/Eu_e_evelyn_festa_junina_1764457501095.JPG", alt: "Festa junina inesquecível", size: "medium" },
  { id: "4", src: "/attached_assets/Eu_e_evelyn_campos_jordao.JPEG_1764457501095.JPEG", alt: "Campos do Jordão romântico", size: "medium" },
  { id: "5", src: "/attached_assets/Eu_e_evelyn_e_chico_cachoeira_sao_fransciso_1764457501096.JPEG", alt: "Com Chico na cachoeira", size: "medium" },
  { id: "6", src: "/attached_assets/almoco_familia_1764457501096.JPEG", alt: "Almoço em família", size: "large" },
  { id: "7", src: "/attached_assets/eu_evelyn_1764457501097.JPEG", alt: "Nosso momento", size: "small" },
  { id: "8", src: "/attached_assets/eu_e_Evelyn_forte_floripa_1764457501097.JPEG", alt: "Forte em Floripa", size: "medium" },
  { id: "9", src: "/attached_assets/eu_e_evelyn_balada_1764457501097.JPEG", alt: "Noite de balada", size: "small" },
  { id: "10", src: "/attached_assets/eu_e_Evelyn_fantasia_halloween_1764457501098.JPEG", alt: "Halloween juntos", size: "small" },
  { id: "11", src: "/attached_assets/eu_e_evelyn_vilinha_campos_1764457501098.JPEG", alt: "Vilinha de Campos", size: "medium" },
  { id: "12", src: "/attached_assets/eu_e_Evelyn_topo_campos_coracao_1764457501098.JPEG", alt: "No topo do coração", size: "small" },
  { id: "13", src: "/attached_assets/eu_e_Evelyn_virada_1764457501099.JPEG", alt: "Virada de ano com fogos", size: "medium" },
  { id: "14", src: "/attached_assets/eu_e_evelyn_vilinha_ilha_bela_1764457501099.JPEG", alt: "Vilinha de Ilha Bela", size: "small" },
  { id: "15", src: "/attached_assets/eu_e_evelyn_cachoeira_ilhabela_1764457501100.JPEG", alt: "Cachoeira de Ilha Bela", size: "medium" },
  { id: "16", src: "/attached_assets/eu_e_Evelyn_pista_patins_1764457501100.JPEG", alt: "Pista de patins", size: "small" },
  { id: "17", src: "/attached_assets/eu_e_Evelyn_Romantik_Dalen_1764457501100.JPEG", alt: "Ponte Romantik Dalen", size: "medium" },
  { id: "18", src: "/attached_assets/Eu_e_evelyn_sao_thome_1764457501101.JPEG", alt: "São Thomé das Letras", size: "small" },
  { id: "19", src: "/attached_assets/arraial_1764457501101.jpg", alt: "Arraial do Cabo", size: "medium" },
  { id: "20", src: "/attached_assets/eu_e_evelyn_1764458077515.jpg", alt: "Nós na floresta de bambu", size: "medium" },
  { id: "21", src: "/attached_assets/dona_marta_1764458077516.jpg", alt: "Com amigos no morro da Dona Marta", size: "large" },
  { id: "22", src: "/attached_assets/silhueta_de_nos_1764458077516.jpg", alt: "Nossa silhueta ao pôr do sol", size: "small" },
  { id: "23", src: "/attached_assets/beijo_pedido_noivado_1764458077517.jpg", alt: "O beijo do pedido de noivado", size: "large" },
];

const sizeClasses = {
  small: "col-span-1 row-span-1",
  medium: "col-span-1 md:col-span-1 row-span-1 md:row-span-2",
  large: "col-span-1 md:col-span-2 row-span-1 md:row-span-2",
};

export function GallerySection() {
  return (
    <section 
      className="py-20 md:py-32 px-6 bg-gradient-to-b from-romantic-cream to-white dark:from-zinc-900 dark:to-zinc-950"
      data-testid="gallery-section"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-romantic-rose/40" />
            <Sparkles className="w-6 h-6 text-romantic-gold" />
            <span className="w-12 h-px bg-romantic-rose/40" />
          </div>
          <h2 
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4"
            data-testid="gallery-title"
          >
            Galeria de Memórias
          </h2>
          <p className="font-montserrat text-lg text-muted-foreground max-w-xl mx-auto">
            Cada foto conta uma parte da nossa história
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[180px]">
          {galleryImages.map((image, index) => (
            <AnimatedSection
              key={image.id}
              animation="scale"
              delay={index * 100}
              className={sizeClasses[image.size]}
            >
              <div 
                className="relative w-full h-full rounded-lg overflow-hidden group cursor-pointer"
                data-testid={`gallery-image-${image.id}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-white">
                    <Heart className="w-4 h-4 text-romantic-rose" fill="currentColor" />
                    <span className="font-montserrat text-sm">{image.alt}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
