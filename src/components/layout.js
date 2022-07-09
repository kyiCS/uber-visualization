import * as React from 'react'
import * as css from './layout.module.css'


const Layout = ({ pageTitle, children }) => {
  return (

    <div>
      <div className={css.Header}>
        <div className={css.LogoGroup}>
        </div>
      </div>
      <body>
        <div className={css.container}>
          <title>{pageTitle}</title>
          <main>
            <h1 className={css.gradient}>{pageTitle}</h1>
            {children}
          </main>
        </div>
      </body>

    </div>
  )
}


export default Layout