import Head from 'next/head';
import styles from '../../../styles/Auth.module.css';

export default function Auth() {
  return (
    <>
      <Head>
        <title>Links Login</title>
      </Head>
      <div className={`${styles.cardLogin} card`}>
        <div className="card-content">
          <p className="title">Login</p>
          <form>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="email" />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input" type="password" />
              </div>
            </div>
            <button class="button is-primary" type="submit">
              Login
            </button>
          </form>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <span>
              By
              <a href="https://www.instagram.com/henrygbcdev/" target="_blank">
                HenryGBC
              </a>
            </span>
          </p>
          <p class="card-footer-item">
            <span>
              By{' '}
              <a href="https://twitter.com/HenryGBC" target="_blank">
                HenryGBC
              </a>
            </span>
          </p>
        </footer>
      </div>
    </>
  );
}
