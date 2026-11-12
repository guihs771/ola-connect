import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Gem, Menu, X } from "lucide-react";
import logoBase64 from "./pedra-valiosa-logo.jpg.b64?raw";

export const Route = createFileRoute("/")({
  head: () => ({
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
  const whatsapp = "https://wa.me/?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20a%20Pedra%20Valiosa%20Marmoraria.";
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen bg-[#fbfcfa] text-[#26363b] selection:bg-[#fff0bd] selection:text-[#26363b]">
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between bg-black px-6 py-5 text-white sm:px-10">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Pedra Valiosa, início">
          <img
            src={`data:image/jpeg;base64,${logoBase64.trim()}`}
            alt="Pedra Valiosa Mármores"
            className="h-auto w-[230px] max-w-[58vw] object-contain sm:w-[290px]"
          />
        </a>

        <nav className="hidden items-center gap-3 md:flex">
          <a href="#contato" className="border border-white/35 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/85 transition hover:border-white hover:text-white">Contato</a>
          <a href="#servicos" className="border border-[#26363b]/20 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#52646a] transition hover:border-[#26363b] hover:text-[#26363b]">Serviços</a>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#d9eaf0] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#26363b] transition hover:bg-[#fff0bd]">Fale conosco <ArrowUpRight size={14} /></a>
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

      <section id="inicio" className="relative flex min-h-[720px] items-center justify-center overflow-hidden bg-[#26363b] px-5 py-24 text-center sm:min-h-[780px] sm:px-8">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=90"
          alt="Ambiente sofisticado com bancada e acabamentos em pedra"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#172327]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#172327]/25 via-transparent to-[#172327]/45" />
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
          <p className="mb-7 text-[11px] font-medium uppercase tracking-[0.19em] text-white/90 sm:text-sm sm:tracking-[0.22em]">
            Marmoraria de referência em Paraopeba e região
          </p>
          <h1 className="max-w-4xl font-sans text-[clamp(2.35rem,7vw,5.4rem)] font-bold leading-[1.08] tracking-[-0.045em] text-white">
            Especialista em soluções em mármores e granitos para transformar seus ambientes.
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-7 text-white/90 sm:text-xl sm:leading-9">
            Bancadas, cozinhas, banheiros e projetos sob medida, com cuidado em cada detalhe e acabamento.
          </p>
          <div className="mt-10 flex w-full max-w-xl flex-col gap-4 sm:max-w-2xl sm:flex-row">
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[64px] flex-1 items-center justify-center gap-3 bg-[#d9eaf0] px-7 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#26363b] transition hover:bg-[#fff0bd] sm:text-sm"
            >
              Fale conosco <ArrowUpRight size={18} />
            </a>
            <a
              href="#servicos"
              className="inline-flex min-h-[64px] flex-1 items-center justify-center gap-3 border border-white/90 bg-[#172327]/20 px-7 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-[#26363b] sm:text-sm"
            >
              Nossos serviços <ArrowUpRight size={18} />
            </a>
          </div>
          <a href="#sobre" className="mt-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80 underline decoration-[#fff0bd] underline-offset-8 transition hover:text-white">
            Conheça a Pedra Valiosa
          </a>
        </div>
      </section>

      <section id="sobre" className="border-y border-[#26363b]/10 bg-[#f2f6f4]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-10 md:grid-cols-[0.65fr_1fr] md:items-center md:gap-20 md:py-24">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#82969d]">Nossa essência</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">A beleza está nos detalhes.</h2>
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

      <section id="servicos" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 md:py-28">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#82969d]">O que fazemos</p>
            <h2 className="mt-3 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">Soluções em pedra</h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[#7a898d]">Acabamentos que equilibram funcionalidade, beleza e personalidade.</p>
        </div>
        <div className="grid gap-7 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className="group">
              <div className="relative aspect-[4/4.3] overflow-hidden bg-[#e8eeeb]">
                <img src={service.image} alt={service.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" />
                <span className="absolute left-4 top-4 bg-[#fbfcfa]/95 px-3 py-2 text-[10px] font-semibold tracking-[0.15em] text-[#53666c]">{service.number}</span>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-[#26363b]/15 py-5">
                <div>
                  <h3 className="font-serif text-2xl tracking-[-0.03em]">{service.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-[#77868a]">{service.description}</p>
                </div>
                <ArrowUpRight size={18} className="mt-1 shrink-0 text-[#91aab2] transition group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#b9dce9]/45">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-14 sm:px-10 md:grid-cols-[1fr_1fr] md:py-20">
          <div className="max-w-lg">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#647f88]">Seu projeto começa aqui</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">Vamos dar forma à sua ideia?</h2>
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
              <span className="font-serif text-2xl tracking-[-0.04em]">Pedra Valiosa</span>
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
