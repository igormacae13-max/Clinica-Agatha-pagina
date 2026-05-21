import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/agatha-hero.jpg";
import proc1 from "@/assets/agatha-procedure-1.jpg";
import proc2 from "@/assets/agatha-procedure-2.jpg";
import tricoImg from "@/assets/agatha-tricologia.jpg";
import scienceImg from "@/assets/agatha-science.jpg";
import clinicImg from "@/assets/agatha-clinic.jpg";
import logo from "@/assets/agatha-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ágatha Emanuelle — Biomédica Esteta" },
      {
        name: "description",
        content:
          "Estética com propósito: procedimentos seguros, naturais e personalizados em tricologia, pele e injetáveis. Belo Horizonte/MG.",
      },
      { property: "og:title", content: "Ágatha Emanuelle — Biomédica Esteta" },
      {
        property: "og:description",
        content: "Beleza com segurança, técnica e sensibilidade.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Tricologia",
    desc: "Diagnóstico tricoscópico aprofundado e protocolos individualizados para queda, afinamento e saúde do couro cabeludo.",
    img: tricoImg,
  },
  {
    title: "Skin & Limpeza de Pele",
    desc: "Cuidado clínico para acne, melasma, manchas e revitalização — uma pele equilibrada é o ponto de partida da beleza.",
    img: proc2,
  },
  {
    title: "Injetáveis & Toxina",
    desc: "Toxina botulínica e intradermoterapia com técnica refinada e resultado natural, respeitando sua expressão.",
    img: proc1,
  },
];

const pillars = [
  {
    title: "Segurança em primeiro lugar",
    desc: "Materiais descartáveis, produtos certificados e protocolos baseados em evidência. Cada procedimento começa por uma avaliação criteriosa.",
  },
  {
    title: "Resultado natural",
    desc: "Acredito em uma beleza que respeita seus traços. Nada de excessos — o objetivo é realçar, nunca mascarar.",
  },
  {
    title: "Atendimento humanizado",
    desc: "Escuta atenta, plano personalizado e acompanhamento próximo. Você é o centro de cada decisão.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Ágatha Emanuelle" className="h-10 w-10 object-contain" />
            <span className="font-serif text-lg tracking-tight hidden sm:inline">
              Ágatha Emanuelle<span className="text-accent">.</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#proposito" className="hover:text-foreground transition">Propósito</a>
            <a href="#servicos" className="hover:text-foreground transition">Procedimentos</a>
            <a href="#diferencial" className="hover:text-foreground transition">Diferencial</a>
            <a href="#galeria" className="hover:text-foreground transition">Galeria</a>
            <a href="#contato" className="hover:text-foreground transition">Contato</a>
          </nav>
          <a
            href="https://wa.me/5531992003849"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full gradient-marsala text-primary-foreground hover:opacity-90 transition"
          >
            Agendar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="pt-32 pb-20 md:pt-40 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              <span className="h-px w-8 bg-accent" />
              Biomédica Esteta · CRBM
            </div>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-balance mb-6">
              Beleza com <em className="gradient-gold-text not-italic">propósito</em>,
              cuidado com verdade.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Sou <strong className="text-foreground font-medium">Ágatha Emanuelle</strong>,
              biomédica esteta. Acredito em uma estética que respeita seu tempo, seus
              traços e sua história — entregando resultados naturais com a segurança
              que você merece.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contato"
                className="px-6 py-3 rounded-full gradient-marsala text-primary-foreground text-sm font-medium hover:shadow-[var(--shadow-elegant)] transition"
              >
                Marcar avaliação
              </a>
              <a
                href="#servicos"
                className="px-6 py-3 rounded-full border border-border text-sm font-medium hover:bg-secondary transition"
              >
                Ver procedimentos
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 gradient-marsala opacity-10 rounded-[2rem] blur-2xl" />
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[var(--shadow-elegant)]">
              <img
                src={heroImg}
                alt="Ágatha Emanuelle, biomédica esteta"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl px-5 py-4 shadow-[var(--shadow-soft)]">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Atendendo em
              </div>
              <div className="font-serif text-lg">Belo Horizonte · MG</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROPÓSITO */}
      <section id="proposito" className="py-24 px-6 bg-secondary/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 aspect-[4/5] rounded-2xl overflow-hidden">
            <img src={scienceImg} alt="Ágatha em atendimento" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Meu propósito</div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-balance">
              Devolver a confiança que existe em cada espelho.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Mais do que procedimentos, ofereço uma experiência: um espaço seguro
              para você cuidar de si com leveza, sem pressões e sem padrões.
              Cada plano de tratamento nasce da sua história, dos seus objetivos
              e do tempo que cada pele pede.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Minha promessa é simples: você sairá daqui se sentindo ouvida,
              respeitada e mais bonita — sempre você, sempre natural.
            </p>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
                Procedimentos
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-balance max-w-2xl">
                Cuidado completo, da raiz à pele.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Protocolos personalizados, com produtos certificados e técnica refinada
              — pensados para o seu momento.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <article
                key={s.title}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section id="diferencial" className="py-24 px-6 gradient-marsala text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
            Por que escolher
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-balance max-w-3xl">
            Três compromissos que guiam cada atendimento.
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mb-12">
            Estética é detalhe — e detalhe é cuidado. Veja o que torna a experiência
            aqui diferente.
          </p>
          <div className="grid md:grid-cols-3 gap-px bg-primary-foreground/10 rounded-2xl overflow-hidden">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="bg-primary p-8 hover:bg-primary/80 transition-colors"
              >
                <div className="text-accent font-serif text-3xl mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-serif text-2xl mb-3">{p.title}</h3>
                <p className="text-primary-foreground/75 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
            Galeria
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-12 text-balance max-w-2xl">
            Bastidores do cuidado.
          </h2>
          <div className="grid md:grid-cols-12 gap-4">
            <div className="md:col-span-7 aspect-[16/10] rounded-2xl overflow-hidden">
              <img src={clinicImg} alt="Ambiente da clínica" className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-5 aspect-[16/10] rounded-2xl overflow-hidden">
              <img src={proc1} alt="Procedimento injetável" className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-4 aspect-square rounded-2xl overflow-hidden">
              <img src={tricoImg} alt="Tricologia" className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-4 aspect-square rounded-2xl overflow-hidden">
              <img src={proc2} alt="Cuidado com a pele" className="w-full h-full object-cover" />
            </div>
            <div className="md:col-span-4 aspect-square rounded-2xl overflow-hidden">
              <img src={scienceImg} alt="Atendimento" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-24 px-6 bg-secondary/40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Contato</div>
          <h2 className="font-serif text-4xl md:text-6xl mb-6 text-balance">
            Vamos conversar sobre o seu próximo passo.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Avaliação personalizada, escuta atenta e um plano feito sob medida para
            os seus objetivos.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 text-left">
            <a
              href="https://wa.me/5531992003849"
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-2xl bg-card border border-border hover:border-accent transition"
            >
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                WhatsApp
              </div>
              <div className="font-serif text-lg">(31) 99200-3849</div>
            </a>
            <a
              href="mailto:agaemanuelle@outlook.com"
              className="p-6 rounded-2xl bg-card border border-border hover:border-accent transition"
            >
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                E-mail
              </div>
              <div className="font-serif text-lg break-all">agaemanuelle@outlook.com</div>
            </a>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                Localização
              </div>
              <div className="font-serif text-lg">Planalto · BH/MG</div>
            </div>
          </div>
          <a
            href="https://wa.me/5531992003849"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-marsala text-primary-foreground text-sm font-medium hover:shadow-[var(--shadow-elegant)] transition"
          >
            Agendar avaliação no WhatsApp →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8 px-6 text-center text-sm text-muted-foreground">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-8 w-8 object-contain" />
            <span className="font-serif text-base text-foreground">
              Ágatha Emanuelle <span className="text-accent">·</span> Biomédica Esteta
            </span>
          </div>
          <div>© {new Date().getFullYear()} — Todos os direitos reservados.</div>
        </div>
      </footer>
    </div>
  );
}
