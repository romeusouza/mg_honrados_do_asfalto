import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, Instagram, Facebook, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="section-padding bg-background">
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="section-title">Contato</h2>
            <p className="section-subtitle">Entre em contato ou nos encontre</p>
            <div className="divider-line" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 mt-4">
          <AnimatedSection delay={0.1}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-lg font-bold tracking-wider text-foreground">Telefone</h4>
                  <p className="font-body text-muted-foreground">(84) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-lg font-bold tracking-wider text-foreground">E-mail</h4>
                  <p className="font-body text-muted-foreground">contato@mghda.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-lg font-bold tracking-wider text-foreground">Localização</h4>
                  <p className="font-body text-muted-foreground">Natal, RN — Brasil</p>
                </div>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <a
                  href="https://instagram.com/mghdarn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={28} />
                </a>
                @mghdarn

                {/*<a
                  href="https://facebook.com/honradosdoasfalto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={28} />
                </a>*/}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="w-full h-80 md:h-full min-h-[300px] rounded-sm overflow-hidden">
              <iframe
                title="Localização MG Honrados do Asfalto"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2030726.7249251106!2d-35.04877349031871!3d-6.228998621059395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b04df549e8eaad%3A0xa92509ac1c4d9ec4!2sRio%20Grande%20do%20Norte!5e0!3m2!1spt-BR!2sbr!4v1774723863217!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
