import React from 'react'
import styles from '../scss/auth.module.scss'
import { Link } from 'react-router-dom'

function Signup() {
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
          <input type="text" name="email" placeholder="Ваша электропочта" />
          <input type="password" name="password" placeholder="Ваш пароль" />

          <button className={styles.btn}>
            <img src="/img/icon/auth.svg" alt="auth" />
            <p>Создать аккаунт</p>
          </button>
        </form>

        <Link className={styles.link} to="/signin">
          Уже есть аккаунтт?
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
