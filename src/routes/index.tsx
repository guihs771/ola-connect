import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Gem, Menu, X, ChefHat, Bath, PanelsTopLeft, Ruler, ShieldCheck, Sparkles } from "lucide-react";
import logoBase64 from "./pedra-valiosa-logo.jpg.b64?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" },
    ],
    meta: [
      { title: "Pedra Valiosa Marmoraria | Mármores e granitos em Paraopeba" },
      { name: "description", content: "Bancadas, cozinhas, banheiros e projetos sob medida em mármores e granitos em Paraopeba e região." },
      { property: "og:title", content: "Pedra Valiosa Marmoraria" },
      { property: "og:description", content: "Soluções em mármores e granitos para transformar seus ambientes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const heroImage = {
  src: "https://images.unsplash.com/photo-1772567733061-f7b44c0587b0?auto=format&fit=crop&fm=jpg&q=90&w=3840&h=2160",
  alt: "Cozinha contemporânea de alto padrão com ilha central, bancada e backsplash em mármore",
};

const services = [
  {
    number: "01",
    title: "Cozinhas",
    description: "Bancadas, ilhas e acabamentos pensados para acompanhar sua rotina.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    alt: "Cozinha contemporânea com bancada em pedra",
  },
  {
    number: "02",
    title: "Banheiros",
    description: "Cubas, nichos e superfícies que unem praticidade e elegância.",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=85",
    alt: "Banheiro elegante com acabamento em pedra",
  },
  {
    number: "03",
    title: "Projetos especiais",
    description: "Soluções sob medida para dar personalidade a cada ambiente.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    alt: "Ambiente residencial com materiais naturais",
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroOffset, setHeroOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setHeroOffset(Math.min(window.scrollY * 0.18, 115));
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const whatsapp = "https://wa.me/?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20a%20Pedra%20Valiosa%20Marmoraria.";
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen font-[Poppins,sans-serif] bg-[#fbfcfa] text-[#26363b] selection:bg-[#fff0bd] selection:text-[#26363b]">
      <style>{`
        @keyframes pv-rise-in {
          0% { opacity: 0; transform: translate3d(0, 34px, 0); filter: blur(5px); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); filter: blur(0); }
        }
        .pv-intro { animation: pv-rise-in 1000ms cubic-bezier(.2,.75,.25,1) both; }
        .pv-intro-delay { animation: pv-rise-in 1150ms cubic-bezier(.2,.75,.25,1) 220ms both; }
        .pv-hero-copy { animation: pv-rise-in 1200ms cubic-bezier(.2,.75,.25,1) 100ms both; }
        @media (prefers-reduced-motion: reduce) {
          .pv-intro, .pv-intro-delay { animation: none; }
        }
      `}</style>
      <header className="relative z-20 flex w-full items-center justify-between bg-black px-5 py-2 text-white sm:px-10 md:px-[max(calc((100vw-80rem)/2),2.5rem)]">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Pedra Valiosa, início">
          <img
            src={`data:image/jpeg;base64,${logoBase64.trim()}`}
            alt="Pedra Valiosa Mármores"
            className="h-auto w-[190px] max-w-[48vw] object-contain sm:w-[220px]"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#sobre" className="text-[12px] font-bold uppercase tracking-[0.02em] text-white transition hover:text-[#b9dce9]">Sobre nós</a>
          <a href="#servicos" className="text-[12px] font-bold uppercase tracking-[0.02em] text-white transition hover:text-[#b9dce9]">Serviços</a>
          <a href="#contato" className="text-[12px] font-bold uppercase tracking-[0.02em] text-white transition hover:text-[#b9dce9]">Contato</a>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex min-h-[38px] items-center justify-center rounded-md bg-[#b9dce9] px-6 py-2 text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#26363b] transition hover:bg-[#d2eaf2]">Orçamento</a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center border border-[#26363b]/15 md:hidden"
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </header>

      {menuOpen && (
        <nav className="absolute left-0 right-0 z-30 border-y border-[#26363b]/10 bg-[#fbfcfa] px-6 py-5 shadow-sm md:hidden">
          <div className="flex flex-col gap-5 text-sm">
            <a href="#contato" onClick={closeMenu}>Contato</a>
            <a href="#servicos" onClick={closeMenu}>Serviços</a>
            <a href={whatsapp} target="_blank" rel="noreferrer" onClick={closeMenu} className="inline-flex items-center justify-center gap-2 bg-[#26363b] px-5 py-3 font-semibold text-white">Fale conosco <ArrowUpRight size={15} /></a>
          </div>
        </nav>
      )}

      <section id="inicio" className="relative flex min-h-[680px] items-center overflow-hidden bg-[#172327] px-6 py-24 text-left sm:min-h-[740px] sm:px-10 lg:px-16">
        <img
          src={heroImage.src}
          alt={heroImage.alt}
          fetchPriority="high"
          decoding="async"
          className="absolute -top-[12%] left-0 h-[124%] w-full object-cover"
          style={{ transform: `translate3d(0, ${heroOffset}px, 0) scale(1.08)` }}
        />
        <div className="absolute inset-0 bg-[#101a1e]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101a1e]/75 via-[#101a1e]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101a1e]/25 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="pv-hero-copy max-w-2xl">
            <p className="pv-intro mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#b9dce9] sm:text-xs">
              <span className="h-px w-9 bg-[#b9dce9]" />
              Pedra Valiosa · Mármores e granitos
            </p>
            <h1 className="pv-intro-delay max-w-2xl text-[clamp(2.8rem,6.2vw,5.6rem)] font-medium leading-[1.02] tracking-[-0.045em] text-white">
              A beleza da <span className="italic text-[#b9dce9]">pedra natural</span> em cada detalhe.
            </h1>
            <p className="pv-intro-delay mt-7 max-w-xl border-l border-[#b9dce9]/70 pl-5 text-sm leading-7 text-white/95 sm:text-lg sm:leading-8">
              Bancadas, cozinhas, banheiros e projetos sob medida em mármores e granitos, com acabamento cuidadoso para valorizar cada ambiente.
            </p>
          </div>
        </div>
      </section>

      <section id="sobre" className="border-y border-[#26363b]/10 bg-[#f2f6f4]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-10 md:grid-cols-[0.65fr_1fr] md:items-center md:gap-20 md:py-24">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#82969d]">Nossa essência</p>
            <h2 className="mt-4 text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">A beleza está nos detalhes.</h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-base leading-8 text-[#65767b]">
              Na Pedra Valiosa, cada projeto começa com uma escolha: transformar espaços em ambientes únicos. Trabalhamos para valorizar a beleza dos materiais e entregar acabamentos que fazem sentido para cada projeto.
            </p>
            <p className="mt-4 text-base leading-8 text-[#65767b]">
              Com atenção aos detalhes e cuidado em cada etapa, ajudamos a dar forma a ambientes que acolhem, inspiram e permanecem.
            </p>
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-[#f2f6f4] px-6 py-20 sm:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#82969d]">Pedra Valiosa Marmoraria</p>
            <h2 className="mt-3 text-4xl tracking-[-0.04em] sm:text-5xl">Serviços que valorizam seu ambiente</h2>
            <p className="mt-4 text-sm leading-7 text-[#77868a]">Do corte à instalação, cuidado em cada etapa para transformar seu projeto em realidade.</p>
          </div>

          <div className="grid items-center gap-4 md:grid-cols-3 md:gap-0">
            <article className="flex min-h-[270px] flex-col items-center justify-center rounded-2xl border border-[#26363b]/[0.07] bg-white px-7 py-9 text-center shadow-[0_12px_35px_rgba(38,54,59,0.06)] transition duration-300 hover:-translate-y-1">
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#b9dce9] text-[#26363b]"><ChefHat size={25} strokeWidth={1.7} /></span>
              <h3 className="text-xl font-semibold tracking-[-0.03em]">Cozinhas em mármore</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-[#879397]">Bancadas, ilhas e espaços gourmet feitos sob medida para sua casa.</p>
            </article>
            <article className="relative z-10 flex min-h-[310px] flex-col items-center justify-center rounded-2xl border border-[#a9d4e2] bg-[#b9dce9] px-7 py-10 text-center shadow-[0_18px_45px_rgba(75,126,143,0.2)] md:scale-[1.04]">
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#476773]"><Bath size={25} strokeWidth={1.7} /></span>
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#26363b]">Banheiros sofisticados</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-[#49636c]">Nichos, lavatórios, nichos e revestimentos com beleza e praticidade.</p>
            </article>
            <article className="flex min-h-[270px] flex-col items-center justify-center rounded-2xl border border-[#26363b]/[0.07] bg-white px-7 py-9 text-center shadow-[0_12px_35px_rgba(38,54,59,0.06)] transition duration-300 hover:-translate-y-1">
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#b9dce9] text-[#26363b]"><PanelsTopLeft size={25} strokeWidth={1.7} /></span>
              <h3 className="text-xl font-semibold tracking-[-0.03em]">Escadas e projetos especiais</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-[#879397]">Soluções personalizadas em pedras naturais para cada detalhe.</p>
            </article>
          </div>

          <div className="mx-auto mb-10 mt-20 max-w-2xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#82969d]">Por que escolher a gente</p>
            <h2 className="mt-3 text-4xl tracking-[-0.04em] sm:text-5xl">Mais valor em cada detalhe</h2>
          </div>

          <div className="grid items-center gap-4 md:grid-cols-3 md:gap-0">
            <article className="flex min-h-[250px] flex-col items-center justify-center rounded-2xl border border-[#26363b]/[0.07] bg-white px-7 py-8 text-center shadow-[0_12px_35px_rgba(38,54,59,0.06)]">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7edcf] text-[#8a7542]"><Ruler size={23} strokeWidth={1.7} /></span>
              <h3 className="text-lg font-semibold">Projeto sob medida</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-[#879397]">Cada peça é planejada de acordo com seu espaço e sua necessidade.</p>
            </article>
            <article className="relative z-10 flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-[#d9c991] bg-[#f7edcf] px-7 py-9 text-center shadow-[0_18px_45px_rgba(139,117,66,0.13)] md:scale-[1.04]">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#8a7542]"><ShieldCheck size={23} strokeWidth={1.7} /></span>
              <h3 className="text-lg font-semibold text-[#4e493b]">Qualidade e confiança</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-[#756d59]">Atenção aos materiais e aos acabamentos em todas as etapas.</p>
            </article>
            <article className="flex min-h-[250px] flex-col items-center justify-center rounded-2xl border border-[#26363b]/[0.07] bg-white px-7 py-8 text-center shadow-[0_12px_35px_rgba(38,54,59,0.06)]">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7edcf] text-[#8a7542]"><Sparkles size={23} strokeWidth={1.7} /></span>
              <h3 className="text-lg font-semibold">Beleza duradoura</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-[#879397]">Materiais que destacam seu ambiente e valorizam seu imóvel.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#b9dce9]/45">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-14 sm:px-10 md:grid-cols-[1fr_1fr] md:py-20">
          <div className="max-w-lg">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#647f88]">Seu projeto começa aqui</p>
            <h2 className="mt-4 text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">Vamos dar forma à sua ideia?</h2>
          </div>
          <div className="md:justify-self-end">
            <p className="mb-6 max-w-sm text-sm leading-7 text-[#5e747b]">Conte um pouco sobre o que você imagina. Será um prazer conversar sobre seu projeto.</p>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#26363b] px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#405b64]">
              Conversar pelo WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <footer id="contato" className="bg-[#26363b] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 sm:px-10 md:flex-row md:items-end md:justify-between md:py-14">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25"><Gem size={18} strokeWidth={1.5} /></span>
              <span className="text-2xl tracking-[-0.04em]">Pedra Valiosa</span>
            </div>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.23em] text-white/55">Marmoraria · Paraopeba, MG</p>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 border border-white/40 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] transition hover:bg-white hover:text-[#26363b]">
              Fale pelo WhatsApp <ArrowUpRight size={14} />
            </a>
            <p className="text-[10px] text-white/45">© {new Date().getFullYear()} Pedra Valiosa. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
