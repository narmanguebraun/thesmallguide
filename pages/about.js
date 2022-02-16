import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Site.module.css'

export default function About() {
  return (
    <Layout>
      <main className={styles.main}>
        <section className={styles.section}>
          <p>
            The Small Book features small and independent businesses 
            with high quality products, based in Europe. With a special interest for: 
            high quality materials and craftsmanship, cultural heritage, 
            local production, sustainability.
          </p>
          <p>
            
          </p>
        </section>
      </main>
    </Layout>
  )
}
