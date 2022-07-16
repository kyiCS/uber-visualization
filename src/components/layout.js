import * as React from 'react'
import * as css from './layout.module.css'
import githubLogo from '../images/github.png'


const Layout = ({ pageTitle, children }) => {
  return (

    <div>
      <div className={css.Header}>
        <div className={css.HeaderGroup}>
          <a href="https://github.com/kyiCS/uber-vis" className={css.LogoGroup}>
            <img src={githubLogo} alt="" width="40px" />
            <span className={css.LogoText}>GitHub</span>
          </a>
        </div>
      </div>
      <body>
        <div className={css.container}>
          <title>{pageTitle}</title>
          <main>
            <h1 className={css.gradient}>{pageTitle} <br/>by Kelvin Yi</h1>
            {children}

          </main>
        </div>
      </body>

    </div>
  )
}


export default Layout