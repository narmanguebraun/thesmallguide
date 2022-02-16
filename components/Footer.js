import Link from 'next/link'
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

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>&mdash; <Link href="/about">About</Link>.</p>
    </div>
  )
}