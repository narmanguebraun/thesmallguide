import { useState } from 'react'

import Layout from '../components/Layout'
import Cards from '../components/Cards'
import Button from '../components/Button'
import styles from '../styles/Site.module.css'

import cards from './data/cards.json'

const allCategories = ['All', ...new Set(cards.map(card => card.category))];

export default function Home() {

  const [allCards, setAllCards] = useState(cards);
  const [buttons, setButtons] = useState(allCategories);

  const filter = (button) => {

    if (button === 'All') {
      setAllCards(cards);
      return;
    }

    const filteredData = cards.filter(card => card.category === button);
    setAllCards(filteredData);
  }

  return (
    <Layout>
      <main className={styles.main}>
        <div>
          <Button button={buttons} filter={filter} />
          <Cards allCards={allCards} />
        </div>
      </main>
    </Layout>
  )
}
