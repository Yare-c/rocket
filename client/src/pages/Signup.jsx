import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import styles from '../scss/auth.module.scss'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const registerHandler = async (e) => {
    e.preventDefault()
    try {
      const data = { email, password }
      await axios.post('http://localhost:5000/api/auth/signup', data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.container}>
      <header style={{ paddingTop: '15px' }}>
        <img src="/img/logo.svg" alt="logo rocket crm" />
      </header>
      <section className={styles.signup}>
        <h2>Регистрация в Rocket CRM</h2>
        <p>Через социальные сети</p>
        <div className={styles.social}>
          <div className={styles.item}>
            <img src="/img/icon/vk.svg" alt="vk" />
          </div>
          <div className={styles.item}>
            <img src="/img/icon/google.svg" alt="google" />
          </div>
        </div>
        <p>Через элекетронную почту</p>
        <form className={styles.form}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            placeholder="Ваша электропочта"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Ваш пароль"
            minlength="6"
          />

          <button onClick={registerHandler} className={styles.btn}>
            <img src="/img/icon/auth.svg" alt="auth" />
            <p>Создать аккаунт</p>
          </button>
        </form>

        <Link className={styles.link} to="/signin">
          Уже есть аккаунт?
        </Link>

        <h3 className={styles.personal}>
          <input type="checkbox" checked />
          Даю согласие на обработку моих <br /> <a href="/personal">персональных данных</a>
        </h3>
      </section>
    </div>
  )
}

export default Signup
