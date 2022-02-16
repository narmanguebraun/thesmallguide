import styles from '../styles/Site.module.css'

export default function Button({ button, filter }) {
  return (
      <div className={styles.browse}>
        <h2>Browse by Category</h2>
        <div>{
            button.map((cat, i) => {
              return <button key={i} className={styles.button} type="button" onClick={() => filter(cat)}>{cat}</button>
            })
          }
        </div>
      </div>
    )
}
