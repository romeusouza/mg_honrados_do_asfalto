import AnimatedSection from "./AnimatedSection";
import { Calendar, MapPin } from "lucide-react";

const events = [
  { title: "Rota da Liberdade", date: "15 Abr 2026", location: "São Paulo - Litoral Norte", type: "upcoming", desc: "Passeio de 200km pela serra até a praia." },
  { title: "Encontro Nacional de Motoclubes", date: "20 Mai 2026", location: "Belo Horizonte, MG", type: "upcoming", desc: "Grande encontro com mais de 50 motoclubes." },
  { title: "Rota do Café", date: "10 Mar 2026", location: "Norte do Paraná", type: "past", desc: "Passeio pelas fazendas históricas de café." },
  { title: "Aniversário do Grupo", date: "22 Jan 2026", location: "Sede do Grupo", type: "past", desc: "Celebração de mais um ano de irmandade." },
];

const EventsSection = () => {
  const upcoming = events.filter((e) => e.type === "upcoming");
  const past = events.filter((e) => e.type === "past");

  return (
    <section id="eventos" className="section-padding bg-background">
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="section-title">Eventos</h2>
            <p className="section-subtitle">Nossas próximas rotas e encontros</p>
            <div className="divider-line" />
          </div>
        </AnimatedSection>

        {/* Upcoming */}
        <AnimatedSection delay={0.1}>
          <h3 className="font-display text-xl font-bold tracking-wider text-foreground mb-6 mt-4">Próximos Eventos</h3>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {upcoming.map((e, i) => (
            <AnimatedSection key={e.title} delay={0.1 * (i + 1)}>
              <div className="card-biker p-6 border-l-4 border-l-foreground">
                <h4 className="font-display text-lg font-bold tracking-wider text-foreground">{e.title}</h4>
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground font-body">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {e.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={14} /> {e.location}</span>
                </div>
                <p className="font-body text-sm text-muted-foreground mt-3">{e.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Past */}
        <AnimatedSection delay={0.1}>
          <h3 className="font-display text-xl font-bold tracking-wider text-muted-foreground mb-6">Eventos Passados</h3>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          {past.map((e, i) => (
            <AnimatedSection key={e.title} delay={0.1 * (i + 1)}>
              <div className="card-biker p-6 opacity-70">
                <h4 className="font-display text-lg font-bold tracking-wider text-foreground">{e.title}</h4>
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground font-body">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {e.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={14} /> {e.location}</span>
                </div>
                <p className="font-body text-sm text-muted-foreground mt-3">{e.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
