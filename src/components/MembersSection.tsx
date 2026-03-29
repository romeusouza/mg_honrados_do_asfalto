import AnimatedSection from "./AnimatedSection";
import { User } from "lucide-react";

const members = [
  { name: "Bettão", role: "Presidente", desc: "" },
  { name: "Jiu", role: "Vice-Presidente", desc: "" },
  { name: "Joan", role: "Diretor", desc: "" },
  { name: "Anderson", role: "Tesoureiro", desc: "" },
  { name: "Zé Maneco", role: "Secretário", desc: "" },
  { name: "Grilo", role: "Membro", desc: "" },
  { name: "Romeu", role: "Membro", desc: "" },
  
];

const MembersSection = () => {
  return (
    <section id="membros" className="section-padding" style={{ background: "var(--gradient-dark)" }}>
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="section-title">Nossos Membros</h2>
            <p className="section-subtitle">A força do grupo está em cada irmão</p>
            <div className="divider-line" />
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {members.map((m, i) => (
            <AnimatedSection key={m.name} delay={0.08 * (i + 1)}>
              <div className="card-biker p-6 flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold tracking-wider text-foreground">{m.name}</h4>
                  <span className="font-heading text-xs uppercase tracking-widest text-muted-foreground">{m.role}</span>
                  <p className="font-body text-sm text-muted-foreground mt-2">{m.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
