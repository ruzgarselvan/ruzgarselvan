import Link from "next/link";
import { skillGroups } from "@/data/skills";
import { SkillIcon } from "@/components/skill-icon";
import { educationEntries } from "@/data/education";

export default function HomePage() {
  return (
    <div className="bg-grid">
      <section className="hero hero-centered reveal">
        <div className="hero-content">
          <div className="title gradient-text">Merhaba, ben Rüzgar.</div>
          <p className="subtitle">
            Grafik ve Web tasarım alanında çalışmalarımı paylaştığım portföy <br/>
            veyazdıklarımı paylaştığım bir blog.
          </p>
          <div className="hero-bubbles" aria-label="Kısayollar">
            <Link className="bubble-link" href="#skills">
              Yeteneklerim
            </Link>
            <Link className="bubble-link" href="#education">
              Eğitim
            </Link>
            <Link className="bubble-link" href="/portfolio">
              Portföy
            </Link>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <h2>Yeteneklerim</h2>
        {skillGroups.length ? (
          <div className="skill-groups reveal delay-1">
            {skillGroups.map((group) => (
              <div className="card skill-group" key={group.category}>
                <h3>{group.category}</h3>
                <div className="skill-pills">
                {group.items.map((item) => (
                  <span className="skill-pill" key={item.name}>
                    <SkillIcon icon={item.icon} />
                    <span className="skill-pill__text">{item.name}</span>
                  </span>
                ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="muted">Yetenek bilgileri yüklenemedi.</p>
        )}
      </section>

      <section className="section education-section" id="education">
        <h2>Eğitim</h2>
        {educationEntries.length ? (
          <div className="education-list reveal delay-2">
            {educationEntries.map((entry) => (
              <div className="card education-item" key={entry.institution}>
                <h3>{entry.institution}</h3>
                {entry.years ? <div className="edu-years">{entry.years}</div> : null}
                {entry.program ? <div className="muted">{entry.program}</div> : null}
                {entry.location ? (
                  <div className="muted edu-location">{entry.location}</div>
                ) : null}
                {entry.description ? (
                  <p className="muted small">{entry.description}</p>
                ) : null}
              </div>
            ))}
          </div>
        ) : (
          <p className="muted">Eğitim bilgileri yüklenemedi.</p>
        )}
      </section>

      <section className="section quick-links" aria-label="Blog ve iletişim kısayolları">
        <div className="grid cols-2 reveal delay-2">
          <Link className="card nav" href="/blog">
            <h3>Blog</h3>
            <p className="muted">Sinema, teknoloji ve günlük notlar</p>
          </Link>
          <a className="card nav" href="mailto:rvzgar@protonmail.com">
            <h3>İletişim</h3>
            <p className="muted">Doğrudan e-posta ile ulaşabilirsiniz</p>
          </a>
        </div>
      </section>
    </div>
  );
}
