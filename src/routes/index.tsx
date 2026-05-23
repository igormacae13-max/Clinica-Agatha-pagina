import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import heroImg from "@/assets/agatha-hero.jpg";
import proc1 from "@/assets/agatha-procedure-1.jpg";
import proc2 from "@/assets/agatha-procedure-2.jpg";
import tricoImg from "@/assets/agatha-tricologia.jpg";
import scienceImg from "@/assets/agatha-science.jpg";
import clinicImg from "@/assets/agatha-clinic.jpg";
import logo from "@/assets/agatha-logo.png";

const WHATSAPP_URL = "https://wa.me/5531992003849";

const services = [
  {
    num: "01",
    title: "Tricologia",
    desc: "Diagnóstico tricoscópico aprofundado e protocolos individualizados para queda, afinamento e saúde do couro cabeludo.",
    img: tricoImg,
  },
  {
    num: "02",
    title: "Skin & Limpeza de Pele",
    desc: "Cuidado clínico para acne, melasma, manchas e revitalização — uma pele equilibrada é o ponto de partida da beleza.",
    img: proc2,
  },
  {
    num: "03",
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

// ── Splash Screen ──────────────────────────────────────────────
function SplashScreen({ onDone }: { onDone: () => void }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setExiting(true), 2500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!exiting) return;
    const t = setTimeout(onDone, 750);
    return () => clearTimeout(t);
  }, [exiting, onDone]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "oklch(0.97 0.012 75)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: exiting ? 0 : 1,
        transition: "opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1)",
        pointerEvents: exiting ? "none" : "all",
      }}
    >
      {/* Top gold bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.75 0.11 82) 50%, transparent 100%)",
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.75rem" }}>
        {/* Logo */}
        <img
          src={logo}
          alt="Dra. Ágatha Emanuelle"
          style={{
            height: "clamp(12rem, 40vw, 22rem)",
            width: "auto",
            objectFit: "contain",
            animation: "splash-logo 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
            filter:
              "drop-shadow(0 6px 28px rgba(0,0,0,0.22)) contrast(1.06) saturate(1.18) brightness(1.03)",
          }}
        />

        {/* Divider + name + subtitle */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
          <div
            style={{
              height: "1px",
              width: "80px",
              background: "oklch(0.75 0.11 82)",
              transformOrigin: "center",
              animation: "splash-line 0.65s ease 0.65s both",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.5rem",
              letterSpacing: "-0.01em",
              margin: 0,
              color: "oklch(0.25 0.05 25)",
              animation: "splash-text 0.6s ease 0.9s both",
            }}
          >
            Dra. Ágatha Emanuelle
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "oklch(0.75 0.11 82)",
              margin: 0,
              animation: "splash-text 0.6s ease 1.1s both",
            }}
          >
            Biomédica Esteta · CRBM
          </p>
        </div>
      </div>

      {/* Bottom gold bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.75 0.11 82) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}

// ── Scroll Progress Bar ────────────────────────────────────────
function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setPct(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 2,
        width: `${pct}%`,
        background: "oklch(0.75 0.11 82)",
        zIndex: 200,
        transition: "width 0.08s linear",
        transformOrigin: "left",
        boxShadow: "0 0 8px oklch(0.75 0.11 82 / 0.6)",
      }}
    />
  );
}

// ── Floating WhatsApp ──────────────────────────────────────────
function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="wa-pulse fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-4 py-3 text-xs font-semibold text-white shadow-xl transition-transform hover:scale-105 active:scale-95"
      style={{
        background: "#25D366",
        boxShadow: "0 6px 24px rgba(37, 211, 102, 0.45)",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.116 1.524 5.843L0 24l6.336-1.5A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.6-.497-5.1-1.364l-.364-.214-3.774.893.938-3.677-.236-.375A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
      WhatsApp
    </a>
  );
}

// ── Scroll Reveal (IntersectionObserver) ───────────────────────
function useScrollReveal(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [enabled]);
}

// ── Section Ornament ───────────────────────────────────────────
function Ornament({ align = "center" }: { align?: "left" | "center" }) {
  return (
    <div
      aria-hidden
      style={{
        width: 36,
        height: 1.5,
        background: "linear-gradient(90deg, transparent, oklch(0.75 0.11 82), transparent)",
        marginBottom: "1.25rem",
        marginLeft: align === "center" ? "auto" : 0,
        marginRight: align === "center" ? "auto" : 0,
      }}
    />
  );
}

// ── Route & Page ───────────────────────────────────────────────
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Ágatha Emanuelle — Biomédica Esteta" },
      {
        name: "description",
        content:
          "Estética com propósito: procedimentos seguros, naturais e personalizados. Dra. Ágatha Emanuelle — Especialista em Tricologia e Estética em Belo Horizonte/MG.",
      },
      { property: "og:title", content: "Dra. Ágatha Emanuelle — Biomédica Esteta" },
      { property: "og:description", content: "Beleza com segurança, técnica e sensibilidade." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

function Index() {
  const [splashDone, setSplashDone] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleSplashDone = useCallback(() => setSplashDone(true), []);
  useScrollReveal(splashDone);

  return (
    <>
      {!splashDone && <SplashScreen onDone={handleSplashDone} />}
      <ScrollProgress />
      <FloatingWhatsApp />

      <div
        className="min-h-screen bg-background text-foreground"
        style={{
          opacity: splashDone ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        {/* Espaço reservado para a barra fixa — empurra todo conteúdo abaixo dela */}
        <div style={{ height: "8.5rem" }} aria-hidden />
        {/* ── NAV ── */}
        <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
          <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
            <a href="#top" className="flex items-center gap-3">
              <div style={{ height: "8rem", overflow: "hidden", flexShrink: 0 }}>
                <img
                  src={logo}
                  alt="Dra. Ágatha Emanuelle"
                  style={{
                    height: "15rem",
                    width: "auto",
                    marginTop: "-3.5rem",
                    display: "block",
                    filter:
                      "drop-shadow(0 3px 12px rgba(0,0,0,0.32)) contrast(1.06) saturate(1.18) brightness(1.03)",
                  }}
                />
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
              <a href="#procedimentos" className="hover:text-foreground transition-colors">Procedimentos</a>
              <a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a>
              <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
            </nav>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex btn-agendar text-xs px-5 py-2.5 rounded-full hover:opacity-95 transition"
            >
              Agende uma consulta
            </a>

            {/* Mobile: hamburguer */}
            <button
              className="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-1"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <span className="block w-6 h-0.5 bg-foreground rounded-full" />
              <span className="block w-6 h-0.5 bg-foreground rounded-full" />
              <span className="block w-4 h-0.5 bg-foreground rounded-full" />
            </button>
          </div>
        </header>

        {/* ── MENU MOBILE OVERLAY ── */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 z-[60] bg-background flex flex-col">
            {/* Topo do menu */}
            <div className="flex items-center justify-between px-6 py-2 border-b border-border">
              <div style={{ height: "4rem", overflow: "hidden", flexShrink: 0 }}>
                <img
                  src={logo}
                  alt="Dra. Ágatha Emanuelle"
                  style={{
                    height: "7.5rem",
                    width: "auto",
                    marginTop: "-1.65rem",
                    display: "block",
                    filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.28)) contrast(1.06) saturate(1.18) brightness(1.03)",
                  }}
                />
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Fechar menu"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col items-center justify-center flex-1 gap-10">
              <a href="#procedimentos" onClick={() => setMenuOpen(false)} className="font-serif text-3xl hover:text-accent transition-colors">Procedimentos</a>
              <a href="#sobre"         onClick={() => setMenuOpen(false)} className="font-serif text-3xl hover:text-accent transition-colors">Sobre</a>
              <a href="#contato"       onClick={() => setMenuOpen(false)} className="font-serif text-3xl hover:text-accent transition-colors">Contato</a>
              <div className="h-px w-12 bg-accent/40 my-2" />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="btn-agendar text-sm px-8 py-3.5 rounded-full"
              >
                Agendar uma consulta
              </a>
            </nav>
          </div>
        )}

        {/* ── HERO ── */}
        <section
          id="top"
          className={`${splashDone ? "hero-active" : ""}`}
        >
          <div className="flex flex-col md:grid md:grid-cols-2 min-h-[100svh]">
            {/* Coluna de texto — fundo branco em mobile e desktop */}
            <div className="relative bg-background flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12 md:py-0">
              {/* Linha decorativa dourada vertical — desktop */}
              <div
                className="hidden md:block absolute left-0 top-[20%] bottom-[20%] w-px opacity-30"
                style={{
                  background: "linear-gradient(to bottom, transparent, oklch(0.75 0.11 82) 50%, transparent)",
                }}
              />

              <p className="hero-eyebrow text-[10px] uppercase tracking-[0.3em] text-accent mb-5">
                Biomédica Esteta · Tricologista
              </p>

              <h1 className="font-serif leading-[1.08] mb-5">
                <span className="hero-line-1 block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
                  Sua essência
                </span>
                <span className="hero-line-2 block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="gradient-gold-text">em evidência</span>
                </span>
              </h1>

              <p className="hero-para text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
                Transformamos cuidado em autoestima, com tratamentos personalizados e
                atendimento pensados para você.
              </p>

              <div className="hero-cta flex justify-start">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground text-sm md:text-base px-8 py-4 rounded-xl hover:opacity-90 transition hover:scale-[1.02] active:scale-[0.98] shadow-lg font-semibold uppercase tracking-wider"
                >
                  AGENDE UMA CONSULTA!
                </a>
              </div>

              {/* Scroll indicator — desktop */}
              <div className="hero-scroll hidden md:flex flex-col items-start gap-1.5 mt-14">
                <span className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground/60">Scroll</span>
                <div className="relative overflow-hidden" style={{ width: 1, height: 36, background: "var(--border)" }}>
                  <div
                    style={{
                      position: "absolute", top: 0, left: 0,
                      width: "100%", height: 12,
                      background: "oklch(0.75 0.11 82)",
                      animation: "scroll-dot 1.9s ease infinite",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Coluna da foto — aparece abaixo do texto no mobile, à direita no desktop */}
            <div className="relative h-[70vw] md:h-auto overflow-hidden">
              <img
                src={heroImg}
                alt="Dra. Ágatha Emanuelle"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/8 to-transparent" />
            </div>
          </div>
        </section>

        {/* ── PROCEDIMENTOS ── */}
        <section id="procedimentos" className="py-20 md:py-28 px-6 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="reveal flex justify-center">
                <Ornament />
              </div>
              <div className="reveal text-xs uppercase tracking-[0.2em] text-accent mb-4">
                Procedimentos
              </div>
              <h2 className="reveal font-serif text-4xl md:text-5xl text-balance max-w-2xl mx-auto mb-4">
                Cuidado completo, da raiz à pele.
              </h2>
              <p className="reveal delay-1 text-muted-foreground max-w-xl mx-auto">
                Protocolos personalizados, com produtos certificados e técnica refinada —
                pensados para o seu momento.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <article
                  key={s.title}
                  className={`reveal delay-${i + 1} group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-500 hover:-translate-y-1.5`}
                >
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Number badge */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/75 backdrop-blur-sm flex items-center justify-center border border-accent/50">
                      <span className="font-serif text-xs text-accent leading-none">{s.num}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="reveal inline-flex btn-agendar text-sm px-8 py-3.5 rounded-full hover:opacity-95 transition"
              >
                Agende sua avaliação
              </a>
            </div>
          </div>
        </section>

        {/* ── SOBRE ── */}
        <section id="sobre" className="py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
              {/* Photo */}
              <div className="md:col-span-2">
                <div className="reveal aspect-[4/5] rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] border border-border">
                  <img
                    src={scienceImg}
                    alt="Dra. Ágatha Emanuelle em atendimento"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="md:col-span-3">
                <div className="reveal flex">
                  <Ornament align="left" />
                </div>
                <div className="reveal text-xs uppercase tracking-[0.2em] text-accent mb-4">
                  Sobre a Dra. Ágatha
                </div>
                <h2 className="reveal font-serif text-4xl md:text-5xl mb-6 text-balance">
                  Beleza com propósito, cuidado com verdade.
                </h2>

                {/* Highlighted first paragraph */}
                <blockquote className="reveal border-l-2 border-accent pl-5 mb-5">
                  <p className="text-foreground leading-relaxed">
                    Biomédica apaixonada pela estética, dedicada a proporcionar cuidados que vão além dos procedimentos. Acredito que cada pessoa possui uma beleza única, e meu propósito é unir conhecimento, técnica e atendimento personalizado para valorizar sua essência e fortalecer sua autoestima.
                  </p>
                </blockquote>

                <p className="reveal delay-1 text-muted-foreground leading-relaxed mb-4">
                  Mais do que procedimentos, ofereço uma experiência: um espaço seguro para você
                  cuidar de si com leveza, sem pressões e sem padrões. Cada plano de tratamento
                  nasce da sua história, dos seus objetivos e do tempo que cada pele pede.
                </p>
                <p className="reveal delay-2 text-muted-foreground leading-relaxed mb-8">
                  Minha promessa é simples: você sairá daqui se sentindo ouvida, respeitada e mais
                  bonita — sempre você, sempre natural.
                </p>

                <div className="reveal mb-8 p-6 rounded-2xl bg-secondary/50 border border-border">
                  <h3 className="font-serif text-xl mb-2">Formação e especialização</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Dra. Ágatha une o rigor científico da biomedicina à sensibilidade estética.
                    Com especializações reconhecidas e protocolos baseados em evidência, sua
                    prática é focada em resultados seguros e naturais — atendendo em Belo
                    Horizonte/MG.
                  </p>
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="reveal inline-flex btn-agendar text-sm px-6 py-3 rounded-full hover:opacity-95 transition"
                >
                  Conhecer e agendar
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── DIFERENCIAL ── */}
        <section id="diferencial" className="py-20 md:py-28 px-6 gradient-marsala text-primary-foreground">
          <div className="max-w-7xl mx-auto">
            <div className="reveal flex">
              <Ornament align="left" />
            </div>
            <div className="reveal text-xs uppercase tracking-[0.2em] text-accent mb-4">
              Por que escolher
            </div>
            <h2 className="reveal font-serif text-4xl md:text-5xl mb-4 text-balance max-w-3xl">
              Três compromissos que guiam cada atendimento.
            </h2>
            <p className="reveal text-primary-foreground/70 max-w-2xl mb-12">
              Estética é detalhe — e detalhe é cuidado. Veja o que torna a experiência aqui
              diferente.
            </p>

            <div className="grid md:grid-cols-3 gap-px bg-primary-foreground/10 rounded-2xl overflow-hidden">
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  className={`reveal delay-${i + 1} bg-primary p-8 hover:bg-primary/80 transition-colors duration-300`}
                >
                  <div className="font-serif text-5xl text-accent/60 leading-none mb-3 select-none">
                    0{i + 1}
                  </div>
                  <div className="h-px w-10 bg-accent/30 mb-5" />
                  <h3 className="font-serif text-2xl mb-3">{p.title}</h3>
                  <p className="text-primary-foreground/75 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GALERIA ── */}
        <section id="galeria" className="py-20 md:py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="reveal flex justify-start">
              <Ornament align="left" />
            </div>
            <div className="reveal text-xs uppercase tracking-[0.2em] text-accent mb-4">Galeria</div>
            <h2 className="reveal font-serif text-4xl md:text-5xl mb-12 text-balance max-w-2xl">
              Bastidores do cuidado.
            </h2>

            <div className="grid md:grid-cols-12 gap-4">
              <div className="reveal md:col-span-7 aspect-[16/10] gallery-item">
                <img src={clinicImg} alt="Ambiente da clínica" />
                <div className="gallery-caption">
                  <span className="text-white/90 text-sm font-medium tracking-wide">
                    Ambiente da Clínica
                  </span>
                </div>
              </div>
              <div className="reveal delay-1 md:col-span-5 aspect-[16/10] gallery-item">
                <img src={proc1} alt="Procedimento injetável" />
                <div className="gallery-caption">
                  <span className="text-white/90 text-sm font-medium tracking-wide">
                    Injetáveis & Toxina
                  </span>
                </div>
              </div>
              <div className="reveal md:col-span-4 aspect-square gallery-item">
                <img src={tricoImg} alt="Tricologia" />
                <div className="gallery-caption">
                  <span className="text-white/90 text-sm font-medium tracking-wide">Tricologia</span>
                </div>
              </div>
              <div className="reveal delay-1 md:col-span-4 aspect-square gallery-item">
                <img src={proc2} alt="Cuidado com a pele" />
                <div className="gallery-caption">
                  <span className="text-white/90 text-sm font-medium tracking-wide">
                    Skin & Limpeza
                  </span>
                </div>
              </div>
              <div className="reveal delay-2 md:col-span-4 aspect-square gallery-item">
                <img src={scienceImg} alt="Atendimento" />
                <div className="gallery-caption">
                  <span className="text-white/90 text-sm font-medium tracking-wide">Atendimento</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTATO ── */}
        <section id="contato" className="py-20 md:py-28 px-6 bg-secondary/40">
          <div className="max-w-4xl mx-auto text-center">
            <div className="reveal flex justify-center">
              <Ornament />
            </div>
            <div className="reveal text-xs uppercase tracking-[0.2em] text-accent mb-4">Contato</div>
            <h2 className="reveal font-serif text-4xl md:text-6xl mb-6 text-balance">
              Vamos conversar sobre o seu próximo passo.
            </h2>
            <p className="reveal text-muted-foreground max-w-xl mx-auto mb-10">
              Avaliação personalizada, escuta atenta e um plano feito sob medida para os seus
              objetivos.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 text-left">
              {/* WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="reveal p-6 rounded-2xl bg-card border border-border hover:border-accent transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">WhatsApp</div>
                <div className="font-serif text-lg">(31) 99200-3849</div>
              </a>

              {/* E-mail */}
              <a
                href="mailto:agaemanuelle@outlook.com"
                className="reveal delay-1 p-6 rounded-2xl bg-card border border-border hover:border-accent transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">E-mail</div>
                <div className="font-serif text-lg break-all">agaemanuelle@outlook.com</div>
              </a>

              {/* Localização */}
              <div className="reveal delay-2 p-6 rounded-2xl bg-card border border-border">
                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Localização</div>
                <div className="font-serif text-lg">Planalto · BH/MG</div>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="reveal inline-flex btn-agendar text-sm px-8 py-4 rounded-full hover:opacity-95 transition"
            >
              Agendar avaliação no WhatsApp →
            </a>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="border-t border-border py-8 px-6 text-center text-sm text-muted-foreground">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt=""
                className="h-10 w-auto object-contain drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]"
              />
              <span className="font-serif text-base text-foreground">
                Dra. Ágatha Emanuelle <span className="text-accent">·</span> Biomédica Esteta
              </span>
            </div>
            <div>© {new Date().getFullYear()} — Todos os direitos reservados.</div>
          </div>
        </footer>
      </div>
    </>
  );
}
