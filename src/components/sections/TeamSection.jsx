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
          label="Our People"
          title="Meet the Professionals Behind Horizon"
          text="A small, senior team with clear ownership of every engagement — the person you meet is the person responsible for the work."
        />

        <div className="team-grid" style={{ marginTop: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 60}>
              <TeamCard member={member} />
            </Reveal>
          ))}
        </div>

        {teamPlaceholder && (
          <p className="placeholder-note" style={{ textAlign: 'left' }}>
            Profiles shown are editable placeholders — replace names, roles, portraits and links with
            your team’s details.
          </p>
        )}
      </div>
    </section>
  )
}
