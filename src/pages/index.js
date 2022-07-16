import * as React from 'react'
import * as css from '../components/layout.module.css'
import Layout from '../components/layout'

import cumulative_heatmap from '../images/cumulative_heatmap.png'

const IndexPage = () => {
  return (
    <Layout pageTitle="Uber Visualization Project">


      <p>
        It may be hard to visualize Uber
      </p>

      <img class={css.maps} src={cumulative_heatmap} alt="Cumulative Heatmap"/>
    </Layout>
  )
}

export default IndexPage