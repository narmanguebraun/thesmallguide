import Link from 'next/link'

import styles from '../styles/Site.module.css'

export default function Cat() {
  return (
      <section className={styles.section}>
        <h2>Browse by Category</h2>
        <ul>
          <li><Link href="/culture"><a>Culture</a></Link></li>
          <li><Link href="/style"><a>Style</a></Link></li>
          <li><Link href="/living"><a>Living</a></Link></li>
          <li><Link href="/travel"><a>Travel</a></Link></li>
        </ul>
      </section>
    )
}
