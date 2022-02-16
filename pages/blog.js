import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Site.module.css'
import { getAllPosts } from '../lib/api'
import AllPosts from '../components/AllPosts'


export default function Blog({ allPosts }) {
  return (
    <Layout>
      <main className={styles.main}>
      <section className={styles.section}>
        <AllPosts posts={ allPosts } />
      </section>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'tag',
    'cat',
    'slug',
    'coverImage',
    'excerpt'
  ])

  return {
    props: { allPosts },
  }
}
