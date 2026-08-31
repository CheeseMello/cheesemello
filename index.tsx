
import type { CSSProperties } from 'react'
import { Mail, Instagram, Youtube, ShieldCheck, Radio, Sparkles, ExternalLink } from 'lucide-react'
import { CheeseMark } from '../components/site-header'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

const roles = [
  {
    icon: ShieldCheck,
    platform: 'StelyCube',
    title: 'Modérateur & Animateur',
    detail:
      "Je veille sur la communauté et j'anime les évènements du serveur — sanctions, médiation entre joueurs et mise en place d'animations.",
    tint: 'from-curd/20',
  },
  {
    icon: Radio,
    platform: 'BlockRadio',
    title: 'Animateur',
    detail: "J'anime des émissions et je fais vivre l'antenne pour la communauté Minecraft de BlockRadio.",
    tint: 'from-mold/20',
  },
  {
    icon: Sparkles,
    platform: 'Réseaux sociaux',
    title: 'Créateur de contenu',
    detail: 'Principalement sur Instagram, avec du contenu régulier aussi sur YouTube et TikTok.',
    tint: 'from-curd-2/20',
  },
]

const projects = [
  {
    name: 'StelyCube',
    href: 'https://play.stelycube.fr',
    label: 'play.stelycube.fr',
    tag: 'Coup de cœur',
    version: '26.1.2 · Java & Bedrock',
    description:
      "Un serveur Minecraft que j'adore et sur lequel je suis modérateur-animateur. Ce n'est pas mon serveur, mais c'est là que je passe le plus de temps à faire vivre la communauté.",
  },
]

function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="grain" />

      <section className="relative mx-auto max-w-5xl px-6 pt-20 pb-24 sm:pt-28">
        <Hole className="left-[6%] top-6 h-10 w-10 opacity-70 drift" style={{ animationDelay: '0.4s' }} />
        <Hole className="right-[10%] top-24 h-6 w-6 opacity-50 drift" style={{ animationDelay: '1.6s' }} />
        <Hole className="left-[22%] bottom-4 h-4 w-4 opacity-40 drift" style={{ animationDelay: '2.4s' }} />

        <div className="rise flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-curd/80">
          <span className="h-px w-8 bg-curd/50" />
          Modérateur · Animateur · Créateur
        </div>

        <h1 className="rise mt-6 font-display text-5xl font-extrabold leading-[1.05] text-parch sm:text-7xl" style={{ animationDelay: '0.08s' }}>
          Salut, je suis
          <span className="relative ml-3 inline-block text-curd">
            CheeseMello
            <CheeseMark className="absolute -right-9 -top-6 h-8 w-8 rotate-12 sm:-right-12 sm:h-10 sm:w-10" />
          </span>
        </h1>

        <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-parch/70" style={{ animationDelay: '0.16s' }}>
          Modérateur-animateur sur StelyCube, animateur sur BlockRadio, et je partage du contenu
          principalement sur Instagram — avec des incursions sur YouTube et TikTok.
        </p>

        <div className="rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: '0.24s' }}>
          <a
            href="#roles"
            className="rounded-full bg-curd px-6 py-3 font-display text-sm font-bold text-rind transition-transform hover:-translate-y-0.5 hover:bg-curd-2"
          >
            Voir mes rôles
          </a>
          <a
            href="#infos"
            className="rounded-full border border-parch/20 px-6 py-3 text-sm font-semibold text-parch/80 transition-colors hover:border-curd/60 hover:text-curd"
          >
            Me contacter
          </a>
        </div>
      </section>

      <section id="roles" className="relative mx-auto max-w-5xl px-6 py-20">
        <SectionHeading eyebrow="Où me retrouver" title="Mes rôles" />

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {roles.map((role, i) => (
            <div
              key={role.platform}
              className={`rise group relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br ${role.tint} to-transparent p-6`}
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <role.icon className="h-7 w-7 text-curd" strokeWidth={1.75} />
              <p className="mt-5 font-display text-lg font-bold text-parch">{role.title}</p>
              <p className="mt-1 text-sm font-semibold text-curd/80">{role.platform}</p>
              <p className="mt-3 text-sm leading-relaxed text-parch/60">{role.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projets" className="relative mx-auto max-w-5xl px-6 py-20">
        <SectionHeading eyebrow="Ce qui me tient à cœur" title="Mes projets" />

        <div className="mt-10 space-y-5">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="rise group block rounded-3xl border border-white/8 bg-rind-2/60 p-7 transition-colors hover:border-curd/40 sm:p-9"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="rounded-full bg-mold/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-mold">
                    {project.tag}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold text-parch">{project.name}</h3>
                  <p className="mt-1 text-sm text-parch/50">{project.version}</p>
                </div>
                <span className="flex items-center gap-1.5 rounded-full border border-parch/15 px-4 py-2 text-sm font-semibold text-curd transition-colors group-hover:border-curd/50">
                  {project.label}
                  <ExternalLink className="h-3.5 w-3.5" />
                </span>
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-parch/65">{project.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="infos" className="relative mx-auto max-w-5xl px-6 py-20">
        <SectionHeading eyebrow="Envie d'échanger ?" title="Infos & contact" />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="rise rounded-3xl border border-white/8 bg-rind-2/60 p-7">
            <p className="font-display text-lg font-bold text-parch">Qui je suis</p>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-parch/65">
              <li>— CheeseMello, animateur-modérateur sur StelyCube.</li>
              <li>— CheeseMello, animateur sur BlockRadio.</li>
              <li>— Créateur de contenu, surtout sur Instagram, YouTube et TikTok.</li>
            </ul>
          </div>

          <div className="rise rounded-3xl border border-white/8 bg-rind-2/60 p-7" style={{ animationDelay: '0.08s' }}>
            <p className="font-display text-lg font-bold text-parch">Contact</p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3 text-sm text-parch/75">
                <DiscordMark className="h-5 w-5 text-curd" />
                <span className="font-mono">cheesemello4628</span>
              </div>
              <a
                href="mailto:contactpro.cheesemello.fr@gmail.com"
                className="flex items-center gap-3 text-sm text-parch/75 transition-colors hover:text-curd"
              >
                <Mail className="h-5 w-5 text-curd" strokeWidth={1.75} />
                <span className="break-all">contactpro.cheesemello.fr@gmail.com</span>
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 border-t border-white/8 pt-5 text-parch/50">
              <Instagram className="h-5 w-5" strokeWidth={1.75} />
              <Youtube className="h-5 w-5" strokeWidth={1.75} />
              <TikTokMark className="h-5 w-5" />
              <span className="text-xs">Contenu régulier sur ces plateformes</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="rise flex items-baseline gap-4">
      <h2 className="font-display text-3xl font-extrabold text-parch sm:text-4xl">{title}</h2>
      <span className="hidden text-sm font-medium uppercase tracking-[0.2em] text-parch/40 sm:inline">
        {eyebrow}
      </span>
    </div>
  )
}

function Hole({ className, style }: { className?: string; style?: CSSProperties }) {
  return <span className={`hole ${className}`} style={style} />
}

function DiscordMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.3 5.4a17.7 17.7 0 0 0-4.4-1.4l-.2.4c1.6.4 2.6.9 3.6 1.6a12.6 12.6 0 0 0-10.6 0c1-.7 2.1-1.3 3.6-1.6l-.2-.4A17.7 17.7 0 0 0 7.7 5.4C5.3 8.9 4.6 12.3 4.9 15.7a13 13 0 0 0 4 2l.8-1.3a9 9 0 0 1-1.3-.6l.3-.3c2.4 1.1 5 1.1 7.4 0l.3.3c-.4.2-.9.5-1.3.6l.8 1.3a13 13 0 0 0 4-2c.4-4-.5-7.3-2.6-10.3ZM9.7 13.9c-.7 0-1.3-.7-1.3-1.5s.6-1.5 1.3-1.5 1.4.7 1.3 1.5c0 .8-.6 1.5-1.3 1.5Zm4.6 0c-.7 0-1.3-.7-1.3-1.5s.6-1.5 1.3-1.5 1.4.7 1.3 1.5c0 .8-.6 1.5-1.3 1.5Z" />
    </svg>
  )
}

function TikTokMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M14.5 2h2.6c.2 1.6 1.2 3 2.7 3.7 1 .5 2 .6 2.2.6v2.8c-1.6 0-3.1-.5-4.4-1.4v6.6c0 3.2-2.6 5.7-5.8 5.7A5.7 5.7 0 0 1 6 14.3c0-3.1 2.5-5.6 5.6-5.7v2.8a2.9 2.9 0 0 0-2.9 2.9 2.9 2.9 0 0 0 5.8 0V2Z" />
    </svg>
  )
}
