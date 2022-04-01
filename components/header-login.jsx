import React, { useState } from 'react'
import styles from '../styles/HeaderLogin.module.scss'
export default function HeaderLogin() {
  const [login, setLogin] = useState(true)

  const loginForm = (
    <div className={styles.loginDiv}>
      <form>
        <input type="text" />
        <input type="text" />
        <button>Login</button>
        <p>Doesn't have an acc?</p>
      </form>
    </div>
  )

  return <>{login ? loginForm : null}</>
}
