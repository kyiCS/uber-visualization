import * as React from 'react'
import * as css from '../components/layout.module.css'
import Layout from '../components/layout'

import cumulative_heatmap from '../images/cumulative_heatmap.png'
import exampleubertrip from '../images/exampletrip.png'
import exampleheatmap from '../images/exampleheatmap.png'





const IndexPage = () => {
  return (
    <Layout pageTitle="Uber Visualization Project">

      <h2>The Challenge</h2>
      <p>
        Uber already provides their drivers with a heatmap indicating where the most active regions are in their area. 
        We want to recreate this using Folium, Fast Map Matching, and OSMnx.

        <br/><br/>

        In this case study, we are taking 57 individual Uber trip to outline the process and visualization tools we used in this project. 
        
        <br/><br/>

        So how do we get from this:
        <br/><br/>
        <img src={exampleubertrip} alt="exampleubertrip" />
        <br/>
        To a heatmap representation:
        <br/><br/>
        <img src={exampleheatmap} alt="exampleheatmap" />




      </p>

      <img class={css.maps} src={cumulative_heatmap} alt="Cumulative Heatmap"/>
    </Layout>
  )
}

export default IndexPage