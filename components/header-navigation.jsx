import Image from 'next/image'
import HeaderLogin from './header-login'
import styles from '../styles/HeaderNav.module.css'
import Link from 'next/link'
export const HeaderNav = () => {
  return (
    <>
      <div className={styles.forsticky}>
        <div className={styles.navigationDiv}>
          <div className={styles.element}>
            <h1>Empty</h1>
          </div>
          <div className={styles.menu_sections}>
            <ul>
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/about">
                <a>About</a>
              </Link>
            </ul>
            <Image src="/vectorpaint.svg" height={50} width={100} />
            <ul>
              <Link href="/shop">
                <a>Shop</a>
              </Link>
              <Link href="/top25">
                <a>Top-25</a>
              </Link>
            </ul>
          </div>
          <div className={styles.element}>
            <HeaderLogin />
          </div>
        </div>
      </div>
    </>
  )
}
