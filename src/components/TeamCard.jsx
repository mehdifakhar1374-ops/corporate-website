import Photo from './Photo.jsx'
import { LinkedIn } from './Icons.jsx'

export default function TeamCard({ member }) {
  return (
    <article className="team-card">
      <div className="card-media team-card__media">
        <Photo
          image={member.image}
          width={640}
          sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 25vw"
        />
      </div>
      <div className="team-card__body">
        <h3 className="team-card__name">{member.name}</h3>
        <p className="team-card__role">{member.role}</p>
        <p className="team-card__bio">{member.bio}</p>
        <a
          className="team-card__link"
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} در لینکدین (در برگه جدید باز می‌شود)`}
        >
          <LinkedIn size={14} />
          لینکدین
        </a>
      </div>
    </article>
  )
}
