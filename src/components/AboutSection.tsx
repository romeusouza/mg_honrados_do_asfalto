import AnimatedSection from "./AnimatedSection";
import aboutImage from "@/assets/about-bikers.jpg";
import { Shield, Heart, Users } from "lucide-react";

const values = [
  { icon: Shield, title: "Honra", desc: "Respeito mútuo e lealdade acima de tudo." },
  { icon: Heart, title: "Paixão", desc: "O ronco do motor é a trilha sonora da nossa liberdade." },
  { icon: Users, title: "Irmandade", desc: "Mais que amigos, somos uma família." },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="section-title">Sobre Nós</h2>
            <div className="divider-line" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mt-8">
          <AnimatedSection delay={0.1}>
            <img
              src={aboutImage}
              alt="Membros do Honrados do Asfalto"
              className="w-full aspect-[3/2] object-cover rounded-sm"
              loading="lazy"
              width={1280}
              height={854}
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <h3 className="font-display text-2xl md:text-3xl font-bold tracking-wide text-foreground">
                A Estrada nos une. A Honra nos define.
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                O <strong className="text-foreground">MG Honrados do Asfalto ⚔️🛡️  </strong> nasceram da paixão compartilhada 
                por motos e pela estrada. Fundado em 23/07/22. Somos um moto grupo que acredita que a verdadeira liberdade está em 
                rodar juntos, com respeito, lealdade e honra.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Nosso nome carrega o peso do que acreditamos: ser <em>honrado</em> é nosso código. O <em>asfalto</em> é 
                nosso território. Cada quilômetro rodado fortalece os laços de irmandade que nos mantêm unidos. 
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-3 gap-6 mt-16">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={0.1 * (i + 1)}>
              <div className="card-biker p-8 text-center">
                <v.icon className="w-10 h-10 mx-auto text-foreground mb-4" strokeWidth={1.5} />
                <h4 className="font-display text-xl font-bold tracking-wider text-foreground mb-2">{v.title}</h4>
                <p className="font-body text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
