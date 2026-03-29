import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Motos estacionadas" },
  { src: gallery2, alt: "Piloto na estrada" },
  { src: gallery3, alt: "Encontro noturno" },
  { src: gallery4, alt: "Detalhes da moto" },
  { src: gallery5, alt: "Formação na estrada" },
  { src: gallery6, alt: "Silhueta ao pôr do sol" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="galeria" className="section-padding" style={{ background: "var(--gradient-dark)" }}>
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="section-title">Galeria</h2>
            <p className="section-subtitle">Momentos que marcam nossa jornada</p>
            <div className="divider-line" />
          </div>
        </AnimatedSection>

        {/* Instagram Feed Widget - substitua o ID abaixo pelo seu widget Elfsight */}
        <AnimatedSection delay={0.1}>
          <div className="mt-4 flex justify-center">
            <div
              className="elfsight-app-SUBSTITUA-PELO-SEU-ID"
              data-elfsight-app-lazy
            />
          </div>
          <p className="text-center text-muted-foreground text-sm mt-4">
            Para ativar o feed, substitua o ID do widget Elfsight no código.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-8">
          {images.map((img, i) => (
            <AnimatedSection key={i} delay={0.08 * (i + 1)}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="cursor-pointer overflow-hidden rounded-sm aspect-square"
                onClick={() => setSelected(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-all duration-500 hover:brightness-125"
                  loading="lazy"
                  width={800}
                  height={800}
                />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-foreground hover:text-muted-foreground transition-colors"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
