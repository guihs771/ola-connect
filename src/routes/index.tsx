import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Gem, Menu, X, ChefHat, Bath, PanelsTopLeft, CalendarDays, MapPin, Users, Award } from "lucide-react";
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

      <section id="servicos" className="relative z-10 -mt-16 bg-[#f2f6f4] px-6 pb-16 pt-6 sm:px-10 md:-mt-20 md:pb-20 md:pt-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-4 md:grid-cols-3 md:gap-0">
            <article className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-[#26363b]/[0.08] bg-white px-7 py-9 text-center shadow-[0_12px_35px_rgba(38,54,59,0.07)] transition duration-300 hover:-translate-y-1">
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#e3f0f4] text-[#526e78]"><ChefHat size={25} strokeWidth={1.7} /></span>
              <h3 className="text-xl font-semibold tracking-[-0.03em]">Cozinhas e espaços gourmet</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-[#7d8b8f]">Bancadas e ilhas sob medida, com aproveitamento inteligente do espaço e acabamento elegante.</p>
              <span className="mt-5 border-t border-[#26363b]/10 pt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#71878f]">Projeto personalizado</span>
            </article>

            <article className="relative z-10 flex min-h-[340px] flex-col items-center justify-center rounded-2xl border border-[#a9cbd5] bg-[#26363b] px-7 py-10 text-center shadow-[0_20px_48px_rgba(38,54,59,0.2)] md:scale-[1.045]">
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#b9dce9] text-[#26363b]"><Bath size={25} strokeWidth={1.7} /></span>
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">Banheiros e lavatórios</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-white/75">Cubas, nichos e revestimentos que combinam praticidade, resistência e beleza no dia a dia.</p>
              <span className="mt-5 border-t border-white/20 pt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#b9dce9]">Qualidade nos acabamentos</span>
            </article>

            <article className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-[#26363b]/[0.08] bg-white px-7 py-9 text-center shadow-[0_12px_35px_rgba(38,54,59,0.07)] transition duration-300 hover:-translate-y-1">
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#e3f0f4] text-[#526e78]"><PanelsTopLeft size={25} strokeWidth={1.7} /></span>
              <h3 className="text-xl font-semibold tracking-[-0.03em]">Escadas e projetos especiais</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-[#7d8b8f]">Peças feitas para seu ambiente, com atenção aos detalhes e valorização do imóvel.</p>
              <span className="mt-5 border-t border-[#26363b]/10 pt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#71878f]">Beleza que valoriza</span>
            </article>
          </div>
        </div>
      </section>

      <section id="sobre" className="relative overflow-hidden border-y border-[#26363b]/10 bg-[#fbfcfa] px-6 py-20 sm:px-10 md:py-24">
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#b9dce9]/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#82969d]">Nossa história</p>
              <h2 className="mt-4 max-w-xl text-4xl leading-[1.12] tracking-[-0.045em] sm:text-5xl">
                Uma trajetória construída com <span className="text-[#91b9c8]">pedra, trabalho e confiança.</span>
              </h2>
              <div className="mt-7 max-w-xl space-y-5 text-sm leading-7 text-[#65767b] sm:text-base sm:leading-8">
                <p>
                  Fundada em <strong className="font-semibold text-[#26363b]">1999</strong>, a Pedra Valiosa nasceu com a especialidade em mármores e o propósito de transformar ambientes por meio da beleza e da nobreza das pedras naturais.
                </p>
                <p>
                  Ao longo dessa caminhada, crescemos, aprimoramos nossos processos e ampliamos nossa presença. Hoje, contamos com <strong className="font-semibold text-[#26363b]">duas unidades no Brasil</strong> e uma equipe com mais de <strong className="font-semibold text-[#26363b]">100 colaboradores</strong>, trabalhando com dedicação para entregar projetos bem executados.
                </p>
                <p>
                  São mais de 25 anos de experiência, unindo conhecimento, cuidado em cada detalhe e compromisso com a qualidade. Mais do que trabalhar com mármores, queremos fazer parte dos espaços e das histórias de quem confia em nosso trabalho.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative min-h-[340px] overflow-hidden rounded-2xl bg-[#26363b] sm:min-h-[440px]">
                <img
                  src="https://tiboston.com/images/template/installation.jpg"
                  alt="Instalador com uniforme de trabalho e luvas de proteção posicionando uma bancada de mármore em uma cozinha sofisticada"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172327]/75 via-[#172327]/10 to-transparent" />
                <div className="absolute bottom-7 left-7 right-7 text-white">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c5e2eb]">Nossa essência</p>
                  <p className="mt-2 max-w-sm text-3xl font-medium leading-tight tracking-[-0.04em]">Tradição que inspira. Qualidade que permanece.</p>
                </div>
              </div>
              <div className="absolute -bottom-5 right-5 flex items-center gap-3 rounded-xl border border-[#d9e8ed] bg-white px-5 py-4 shadow-[0_14px_35px_rgba(38,54,59,0.12)] sm:-right-4 sm:px-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e3f0f4] text-[#638997]"><Gem size={22} strokeWidth={1.6} /></span>
                <span>
                  <span className="block text-2xl font-semibold leading-none tracking-[-0.04em] text-[#26363b]">Desde 1999</span>
                  <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.13em] text-[#82969d]">Especialistas em mármores</span>
                </span>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-y-9 border-t border-[#26363b]/10 pt-10 md:grid-cols-4 md:gap-0">
            <div className="flex items-start gap-4 border-[#26363b]/10 px-2 md:border-r md:px-7">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e3f0f4] text-[#638997]"><CalendarDays size={21} strokeWidth={1.6} /></span>
              <div><p className="text-2xl font-semibold leading-none tracking-[-0.04em] text-[#26363b]">1999</p><p className="mt-2 text-xs leading-5 text-[#829196]">Ano de fundação</p></div>
            </div>
            <div className="flex items-start gap-4 border-[#26363b]/10 px-2 md:border-r md:px-7">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e3f0f4] text-[#638997]"><MapPin size={21} strokeWidth={1.6} /></span>
              <div><p className="text-2xl font-semibold leading-none tracking-[-0.04em] text-[#26363b]">2 unidades</p><p className="mt-2 text-xs leading-5 text-[#829196]">Presença no Brasil</p></div>
            </div>
            <div className="flex items-start gap-4 border-[#26363b]/10 px-2 md:border-r md:px-7">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e3f0f4] text-[#638997]"><Users size={21} strokeWidth={1.6} /></span>
              <div><p className="text-2xl font-semibold leading-none tracking-[-0.04em] text-[#26363b]">+100</p><p className="mt-2 text-xs leading-5 text-[#829196]">Colaboradores</p></div>
            </div>
            <div className="flex items-start gap-4 px-2 md:px-7">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e3f0f4] text-[#638997]"><Award size={21} strokeWidth={1.6} /></span>
              <div><p className="text-2xl font-semibold leading-none tracking-[-0.04em] text-[#26363b]">+25 anos</p><p className="mt-2 text-xs leading-5 text-[#829196]">De experiência</p></div>
            </div>
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
