import Image from 'next/image'
import styles from '../styles/Site.module.css'

const ExternalLink = ({ href, children }) => (
  <a
    className="ext_link"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
  {children}
</a>
);

export default function Cards({ allCards }) {

  return (
    <section className={styles.cards}>
      {allCards.map((card) => {
        return <div key={card.id}>
          <div className={styles.card}>
            <Image
              src={card.photo.src}
              alt={card.photo.alt}
              width={600}
              height={600}
            />
            <h2 className={styles.card_title}>{card.name}</h2>
            <div>
              {card.address.street} {card.address.suite}<br></br>
              {card.address.zipcode} {card.address.city} {card.address.country}
            </div>
            <div className={styles.card_tags}>
              <div>{card.category}</div>
              {card.tags.map(tag => <div key={Math.random()}>{tag}</div>)}
            </div>
            <ExternalLink href={card.website}>Website</ExternalLink>{' / '}
            <ExternalLink href={card.instagram}>IG</ExternalLink>
          </div>
        </div>
      })}
    </section>
  )
}
