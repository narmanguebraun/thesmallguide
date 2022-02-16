import DateFormatter from './DateFormatter'
import PostTitle from './PostTitle'
import PostCat from './PostCat'

import styles from '../styles/Site.module.css'

export default function PostHeader({ title, date, cat }) {
  return (
    <div className={styles.post_header}>
      <PostTitle>{title}</PostTitle>
      <DateFormatter dateString={date} />
      <PostCat>{cat}</PostCat>
    </div>
  )
}
