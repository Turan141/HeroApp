import styles from '../styles/HeaderNav.module.css'

export const HeaderNav = () => {
  return (
    <>
      <div className={styles.navigationDiv}>
        <nav className={styles.nav}>
          <ul>
            <li>Главная</li>
            <li>Рейтинг героев</li>
            <li>Мой кабинет</li>
          </ul>
        </nav>
        <div className={styles.welcome}>
          <h1>Welcome, User</h1>
        </div>
      </div>
    </>
  )
}
