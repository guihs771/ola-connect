import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Gem, Menu, X } from "lucide-react";

export const Route = createFileRoute("/")({
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
      <div className="border-b border-[#26363b]/10 bg-[#b9dce9]/45">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#40565d] sm:px-10">
          <span>Pedra Valiosa · Marmoraria</span>
          <span>Paraopeba · Minas Gerais</span>
        </div>
      </div>

      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Pedra Valiosa, início">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#26363b]/20 bg-white">
            <Gem size={19} strokeWidth={1.5} />
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-[21px] tracking-[-0.04em]">Pedra Valiosa</span>
            <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.28em] text-[#718187]">Marmoraria</span>
          </span>
        </a>

        <nav className="hidden items-center gap-3 md:flex">
          <a href="#contato" className="border border-[#26363b]/20 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#52646a] transition hover:border-[#26363b] hover:text-[#26363b]">Contato</a>
          <a href="#servicos" className="border border-[#26363b]/20 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#52646a] transition hover:border-[#26363b] hover:text-[#26363b]">Serviços</a>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#26363b] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#405b64]">Fale conosco <ArrowUpRight size={14} /></a>
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

      <section id="inicio" className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-8 sm:px-10 md:grid-cols-[0.88fr_1.12fr] md:gap-14 md:pb-24 md:pt-10">
        <div className="order-2 max-w-xl md:order-1">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-9 bg-[#d7bd75]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#73868c]">Beleza que permanece</p>
          </div>
          <h1 className="font-serif text-[clamp(3.3rem,6vw,5.7rem)] leading-[0.98] tracking-[-0.055em] text-[#26363b]">
            Especialista em soluções em <span className="italic text-[#7fa9b8]">mármores e granitos</span> para transformar seus ambientes.
          </h1>
          <p className="mt-7 max-w-md text-[15px] leading-7 text-[#68787d]">
            Bancadas, cozinhas, banheiros e projetos sob medida com atenção aos detalhes e acabamentos que valorizam cada espaço.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#servicos" className="inline-flex items-center gap-3 bg-[#26363b] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#405b64]">
              Nossos serviços <ArrowUpRight size={15} />
            </a>
            <a href="#contato" className="inline-flex items-center gap-3 border border-[#26363b]/25 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#26363b] transition hover:border-[#26363b]">
              Contato <ArrowUpRight size={15} />
            </a>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#fff0bd] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#26363b] transition hover:bg-[#f5e3a9]">
              Fale conosco <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="mt-14 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#93a0a3]">
            <ArrowDown size={14} /> Feito para fazer parte da sua história
          </div>
        </div>

        <div className="order-1 relative md:order-2">
          <div className="absolute -right-3 -top-3 h-24 w-24 bg-[#fff0bd] sm:-right-5 sm:-top-5 sm:h-32 sm:w-32" />
          <div className="relative aspect-[5/4] overflow-hidden bg-[#e8eeeb]">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90"
              alt="Interior contemporâneo com bancada e revestimentos em pedra"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-5 bg-[#fbfcfa] px-5 py-4 shadow-sm sm:bottom-6 sm:-left-7 sm:px-7">
            <p className="font-serif text-xl italic text-[#26363b]">Matéria. Forma. Essência.</p>
            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#849297]">Pedra Valiosa Marmoraria</p>
          </div>
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
