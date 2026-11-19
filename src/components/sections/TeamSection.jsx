import { team, teamPlaceholder } from '../../content/team.js'
import Reveal from '../Reveal.jsx'
import SectionHead from '../SectionHead.jsx'
import TeamCard from '../TeamCard.jsx'

export default function TeamSection({ tone = 'white' }) {
  return (
    <section className={`section section--${tone}`} id="team" aria-labelledby="team-title">
      <div className="container">
        <SectionHead
          id="team-title"
          label="تیم ما"
          title="با متخصصان پشت افق آشنا شوید"
          text="تیمی کوچک و باتجربه با مسئولیت روشن در هر همکاری — کسی که می‌بینید، همان کسی است که مسئول کار است."
        />

        <div className="team-grid" style={{ marginTop: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 60}>
              <TeamCard member={member} />
            </Reveal>
          ))}
        </div>

        {teamPlaceholder && (
          <p className="placeholder-note" style={{ textAlign: 'right' }}>
            پروفایل‌های نمایش‌داده‌شده نمونه و قابل ویرایش هستند — نام‌ها، سمت‌ها، تصاویر و پیوندها را با
            اطلاعات تیم خود جایگزین کنید.
          </p>
        )}
      </div>
    </section>
  )
}
