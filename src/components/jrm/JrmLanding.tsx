import { useEffect, useState } from "react";
import {
  Menu,
  X,
  MessageCircle,
  Instagram,
  MapPin,
  Phone,
  Star,
  ArrowRight,
  Smartphone,
  TrendingUp,
  Briefcase,
  Globe,
  Target,
  Palette,
  Rocket,
  Handshake,
  BarChart3,
  Quote,
} from "lucide-react";
import logo from "@/assets/jrm-logo.jpeg";
import founder from "@/assets/founder.jpg";
import { Hexagon, HexOutline } from "./Hexagon";
import { Counter } from "./Counter";
import { cn } from "@/lib/utils";

const WHATSAPP_URL = "https://wa.me/5511989653501?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+conversa";
const INSTAGRAM_URL = "https://instagram.com/jrmgestaomkt";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
];

function BrandLogo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("flex items-center gap-3", className)}>
      <img src={logo} alt="JRM Marketing Digital & Gestão" className="h-10 w-10 rounded-md object-cover" />
      <div className="leading-tight">
        <div className="font-display text-lg font-extrabold tracking-wide text-white">JRM</div>
        <div className="font-accent text-[10px] uppercase tracking-[0.18em] text-brand-cyan">
          Marketing & Gestão
        </div>
      </div>
    </a>
  );
}

function PrimaryCTA({
  children,
  href = WHATSAPP_URL,
  icon = true,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  icon?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-md bg-gradient-brand px-7 py-3.5",
        "font-accent text-sm font-semibold uppercase tracking-[0.08em] text-white",
        "shadow-[0_10px_40px_-12px_rgba(78,205,196,0.6)] transition-all duration-300",
        "hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-12px_rgba(78,205,196,0.85)]",
        className,
      )}
    >
      {icon && <MessageCircle className="h-4 w-4" />}
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function SecondaryCTA({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/80 px-7 py-3 font-accent text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:border-brand-cyan hover:text-brand-cyan"
    >
      {children}
    </a>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-brand-deep/85 backdrop-blur-lg shadow-[0_8px_30px_-10px_rgba(0,0,0,0.5)] border-b border-white/5"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <BrandLogo />
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-accent text-xs font-semibold uppercase tracking-[0.14em] text-white/75 transition-colors hover:text-brand-cyan"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <PrimaryCTA icon={false} className="px-5 py-2.5 text-xs">
            Falar com especialista
          </PrimaryCTA>
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-md border border-white/10 p-2 text-white lg:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-brand-deep/95 backdrop-blur-lg lg:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 font-accent text-sm font-semibold uppercase tracking-[0.14em] text-white/85 hover:bg-white/5 hover:text-brand-cyan"
              >
                {n.label}
              </a>
            ))}
            <PrimaryCTA icon={false} className="mt-2">
              Falar com especialista
            </PrimaryCTA>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32">
      <div className="absolute inset-0 hex-bg" />
      <div className="absolute inset-0 hex-dots opacity-40" />
      <HexOutline className="absolute -left-20 top-32 animate-float-slow" size={260} opacity={0.1} />
      <HexOutline className="absolute right-[-60px] bottom-10 animate-float-slow" size={320} opacity={0.08} />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-cyan" />
            <span className="font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-cyan">
              Alphaville • Barueri – SP
            </span>
          </div>

          <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            Não criamos<br />apenas empresas.<br />
            <span className="text-gradient">Construímos legados.</span>
          </h1>

          <p className="mt-6 font-accent text-xs font-semibold uppercase tracking-[0.22em] text-brand-cyan sm:text-sm">
            Marketing Digital • Gestão • Estratégia Comercial
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Transformamos negócios com estratégia real, presença digital e gestão de resultados. Atendemos
            empresários e empreendedores que querem crescer de verdade.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <PrimaryCTA>Quero agendar uma conversa</PrimaryCTA>
            <SecondaryCTA href="#servicos">Conhecer os serviços</SecondaryCTA>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-6 bg-gradient-brand opacity-20 blur-3xl" />
          <div className="relative aspect-square">
            <div className="absolute inset-0 hex-clip bg-gradient-brand" />
            <div className="absolute inset-[6px] hex-clip bg-brand-deep" />
            <img
              src={founder}
              alt="José Roberto Monteiro — fundador da JRM"
              width={1024}
              height={1024}
              className="absolute inset-[6px] hex-clip h-[calc(100%-12px)] w-[calc(100%-12px)] object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-4 left-6 right-6 rounded-lg border border-brand-cyan/20 bg-brand-navy/90 px-5 py-4 backdrop-blur-md">
            <div className="font-display text-base font-extrabold text-white">José Roberto Monteiro</div>
            <div className="font-accent text-[10px] uppercase tracking-[0.16em] text-brand-cyan">
              Fundador & Estrategista
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const stats = [
  { value: 7, suffix: "+", label: "Anos de experiência" },
  { value: 150, suffix: "+", label: "Clientes atendidos" },
  { value: 300, suffix: "+", label: "Campanhas executadas" },
  { value: 98, suffix: "%", label: "De satisfação" },
];

function Stats() {
  return (
    <section className="relative border-y border-white/5 bg-brand-navy/60">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/5 px-0 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-brand-navy/80 px-6 py-10 text-center">
            <div className="font-display text-5xl font-extrabold lg:text-6xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 font-accent text-[11px] font-semibold uppercase tracking-[0.16em] text-white/65">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const services = [
  { icon: Smartphone, title: "Gestão de Redes Sociais", desc: "Presença estratégica e conteúdo que converte." },
  { icon: TrendingUp, title: "Tráfego Pago", desc: "Meta Ads e Google Ads com foco em ROI real." },
  { icon: Briefcase, title: "Consultoria em Gestão", desc: "Organização, processos e crescimento sustentável." },
  { icon: Globe, title: "Criação de Sites", desc: "Sites profissionais que geram autoridade e vendas." },
  { icon: Target, title: "Estratégia Comercial", desc: "Planejamento e posicionamento para vender mais." },
  { icon: Palette, title: "Identidade Visual", desc: "Branding que comunica valor e diferencia sua marca." },
];

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("mb-14 max-w-2xl", center && "mx-auto text-center")}>
      <div className="mb-4 font-accent text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-cyan">
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl font-extrabold uppercase text-white sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-white/70">{subtitle}</p>}
    </div>
  );
}

function Services() {
  return (
    <section id="servicos" className="relative py-24 lg:py-32">
      <HexOutline className="absolute right-10 top-20 animate-float-slow" size={180} opacity={0.07} />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Serviços"
          title={<>O que fazemos <span className="text-gradient">por você</span></>}
          subtitle="Soluções completas para quem quer crescer no digital com estratégia e consistência."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-lg border border-brand-cyan/15 bg-brand-navy p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/50 hover:shadow-[0_20px_50px_-20px_rgba(78,205,196,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-brand opacity-0 transition-opacity duration-500 group-hover:opacity-[0.04]" />
              <Hexagon size={58}>
                <Icon className="h-6 w-6 text-brand-cyan" strokeWidth={1.8} />
              </Hexagon>
              <h3 className="mt-5 font-display text-xl font-extrabold uppercase text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const badges = ["Pós-Graduado em Mkt & Gestão", "Estrategista Comercial", "Desde 2018 no mercado"];
  return (
    <section id="sobre" className="relative bg-brand-navy/40 py-24 lg:py-32">
      <div className="absolute inset-0 hex-bg opacity-60" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="relative mx-auto w-full max-w-sm">
          <HexOutline className="absolute -left-10 -top-8" size={140} opacity={0.18} />
          <div className="relative aspect-square">
            <div className="absolute inset-0 hex-clip bg-gradient-brand" />
            <img
              src={founder}
              alt="José Roberto Monteiro"
              loading="lazy"
              width={1024}
              height={1024}
              className="absolute inset-[5px] hex-clip h-[calc(100%-10px)] w-[calc(100%-10px)] object-cover object-top"
            />
          </div>
        </div>

        <div>
          <div className="mb-4 font-accent text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-cyan">
            Quem está por trás
          </div>
          <h2 className="font-display text-4xl font-extrabold uppercase text-white sm:text-5xl">
            José Roberto <span className="text-gradient">Monteiro</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
            Empresário. Pós-graduado em Marketing e Gestão. Apaixonado por desafios e por fazer negócios
            crescerem. Trabalha com marketing e gestão desde 2018, ajudando empresários a estruturar
            empresas que duram.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-brand-cyan/30 bg-brand-cyan/5 px-4 py-1.5 font-accent text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-cyan"
              >
                {b}
              </span>
            ))}
          </div>

          <blockquote className="mt-8 border-l-2 border-brand-cyan bg-brand-deep/60 p-6">
            <Quote className="mb-3 h-6 w-6 text-brand-cyan" />
            <p className="font-display text-xl font-extrabold uppercase leading-snug text-white sm:text-2xl">
              Gestão empresarial não é custo. É investimento no sucesso do seu negócio.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

const pillars = [
  {
    icon: Rocket,
    title: "Resultado real, não promessa",
    desc: "Estratégias baseadas em dados, métricas e resultados mensuráveis para o seu negócio.",
  },
  {
    icon: Handshake,
    title: "Atendimento próximo e personalizado",
    desc: "Você fala direto com especialistas. Sem terceirização. Sem enrolação.",
  },
  {
    icon: BarChart3,
    title: "Gestão + Marketing = crescimento",
    desc: "Única abordagem que une marketing digital com gestão empresarial de verdade.",
  },
];

function Differentials() {
  return (
    <section id="diferenciais" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Diferenciais"
          title={<>Por que escolher a <span className="text-gradient">JRM?</span></>}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-brand-navy to-brand-deep p-8 transition-all duration-300 hover:border-brand-cyan/40"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-brand opacity-10 blur-2xl" />
              <Hexagon size={64}>
                <Icon className="h-7 w-7 text-brand-cyan" strokeWidth={1.8} />
              </Hexagon>
              <h3 className="mt-6 font-display text-2xl font-extrabold uppercase leading-tight text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Carla Mendes",
    role: "CEO • Clínica Estética",
    text: "Em 6 meses dobramos o faturamento. A JRM não só fez marketing — reorganizou a operação inteira da clínica.",
  },
  {
    name: "Rafael Soares",
    role: "Sócio • Construtora",
    text: "Atendimento direto, estratégia clara e resultado em mãos. José Roberto entende de gestão de verdade.",
  },
  {
    name: "Patrícia Lima",
    role: "Diretora • Varejo",
    text: "Saímos do achismo e passamos a tomar decisões com dados. Hoje temos previsibilidade de vendas.",
  },
];

function Testimonials() {
  return (
    <section id="depoimentos" className="relative bg-brand-navy/40 py-24 lg:py-32">
      <div className="absolute inset-0 hex-bg opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Depoimentos"
          title={<>O que dizem <span className="text-gradient">nossos clientes</span></>}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:border-brand-cyan/40 hover:bg-white/[0.05]"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-cyan text-brand-cyan" />
                ))}
              </div>
              <p className="text-[15px] leading-relaxed text-white/85">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <Hexagon size={42}>
                  <span className="font-display text-sm font-extrabold text-brand-cyan">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </Hexagon>
                <div>
                  <div className="font-display text-sm font-extrabold uppercase text-white">{t.name}</div>
                  <div className="font-accent text-[10px] uppercase tracking-[0.14em] text-brand-cyan">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-deep to-brand-deep" />
      <HexOutline className="absolute -right-32 -top-20" size={500} opacity={0.07} />
      <HexOutline className="absolute -left-24 bottom-0 animate-float-slow" size={300} opacity={0.09} />
      <div className="absolute inset-0 hex-dots opacity-30" />
      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <div className="mb-4 font-accent text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-cyan">
          Próximo passo
        </div>
        <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.98] text-white sm:text-6xl">
          Pronto para construir <span className="text-gradient">seu legado?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
          Agende uma conversa gratuita com José Roberto e descubra como transformar sua empresa com
          estratégia real.
        </p>
        <div className="mt-10 flex justify-center">
          <PrimaryCTA>Agendar conversa no WhatsApp</PrimaryCTA>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 font-accent text-xs uppercase tracking-[0.16em] text-white/55">
          <Phone className="h-3.5 w-3.5" /> (11) 98965-3501
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#060A1A] py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <BrandLogo />
            <p className="mt-4 max-w-sm text-sm text-white/60">Construindo legados desde 2018.</p>
            <div className="mt-6 flex items-center gap-2 text-sm text-white/60">
              <MapPin className="h-4 w-4 text-brand-cyan" />
              Alphaville Comercial, Barueri – SP
            </div>
          </div>
          <div>
            <div className="font-accent text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-cyan">
              Navegar
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {navItems.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-brand-cyan">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-accent text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-cyan">
              Contato
            </div>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-brand-cyan"
                >
                  <MessageCircle className="h-4 w-4" /> (11) 98965-3501
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-brand-cyan"
                >
                  <Instagram className="h-4 w-4" /> @jrmgestaomkt
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <div>© 2025 JRM Marketing Digital & Gestão. Todos os direitos reservados.</div>
          <div className="font-accent uppercase tracking-[0.16em]">Não criamos apenas empresas. Construímos legados.</div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  );
}

export function JrmLanding() {
  return (
    <div className="min-h-screen bg-brand-deep text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Differentials />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}