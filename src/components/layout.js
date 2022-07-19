import * as React from 'react'
import * as css from './layout.module.css'
import githubLogo from '../images/github.png'


const Layout = ({ pageTitle, children }) => {
  return (

    <div>
      <div className={css.Header}>
        <div className={css.HeaderGroup}>
          <a href="/https://github.com/kyiCS/uber-vis" className={css.LogoGroup}>
            <img src={githubLogo} alt="" width="40px" />
            <span className={css.LogoText}>GitHub</span>
          </a>
        </div>
      </div>
      <body>
        <div className={css.container}>
          <div class={css.titleSlide}>
            
          <title>{pageTitle}</title>

          <h1 className={css.gradient}>{pageTitle} <br />By Kelvin Yi</h1>
          
          <p>
            The Uber Visualization Project is a data Visualization project meant to better visualize Uber activity in the Greater Birmingham Area.
          </p>

          </div>


          <main>

            {children}

          </main>
        </div>
      </body>

    </div>
  )
}


export default Layout