import * as React from 'react'
import * as css from '/src/components/layout.module.css'
import Layout from '/src/components/layout'

import cumulative_heatmap from '/src/images/cumulative_heatmap.png'
import exampleubertripgif from '/src/images/tripgif.gif'
import exampleheatmapgif from '/src/images/heatmapgif.gif'
import example_marker_map from '/src/images/example marker map.png'
import example_fmm_map from '/src/images/example fmm map.png'
import example_heatmap from '/src/images/example heatmap.png'




const IndexPage = () => {
  return (
    <Layout pageTitle="Uber Visualization Project">

      <h2>The Challenge</h2>
      <p>
        Uber already provides their drivers with a heatmap indicating where the most active regions are in their area.
        We want to recreate this using Folium, Fast Map Matching, and OSMnx.

        <br /><br />

        In this case study, we are taking 57 individual Uber trip to outline the process and visualization tools we used in this project.

        <br /><br />

        So how do we get from the raw Uber trip image:
        <br /><br />
        <img src={exampleubertripgif} className={css.maps} alt="exampleubertripgif" />
        <br />
        To the complete heatmap of Uber activity:
        <br /><br />
        <img class={css.maps} src={cumulative_heatmap} className={css.maps} alt="Cumulative Heatmap" />
        <br />
      </p>
      <h2>Our Toolset</h2>
      <h4>Python</h4>
      <p>
        Python has some great data visualization tools that we can utilize in this project.
      </p>
      <a href='https://python-visualization.github.io/folium/index.html'><h4>Folium</h4></a>
      <p>
        Folium is a libary that combines the power of Python's data wrangling and leaflet.js to create great interactive maps.
      </p>
      <a href='https://github.com/cyang-kth/fmm'><h4>Fast Map Matching</h4></a>
      <p>
        FMM or Fast Map Matching is a road network matching tool built for Jupyter Notebook. With FMM, we are able to convert our noisy GPS coordinate data into real road paths.
      </p>
      <h4>Other Tools</h4>
      <p>
        There are some other tools that were used for data manipulation and conversion such as PyProj and OSMnx.
      </p>
      <br />
      <h2>Our Dataset</h2>
      <p>
        First, we need to find a way to translate the raw map into data for our Folium maps.
        To do this, we need to manually locate some coordinates that generally describes the Uber trip path. In this case, we locate each major turn to be a coordinate.
        Using <a href='https://www.georeferencer.com/'>Georeferencer</a>,
        we can overlay the Uber trip images on a real map to find its exact coordinates.
        <br /><br />
        All the data for the coordinates can be found on <a href="https://github.com/gowtham30/geospatial_data_science_mini/blob/main/trajectories_epsg_3857.txt">here</a>.
        <br /><br />
      </p>

      <h2>Creating Our Maps</h2>
      <p>
        There are some formatting issues with different EPSG coordinate systems, but after transforming our data, we can now map it into Folium.

        <img src={example_marker_map} className={css.maps} />

        Here's an example of a Folium map populated with our coordinates. Each marker is a coordinate that we located from Georeferencer. As you can see from the red colored path, these points aren't enough to get us an accurate representation of the Uber trip path.
        This is where FMM comes in.

        <img src={example_fmm_map} className={css.maps} />

        FMM gives us a much more accurate set of coordinates that is matched with real world roads. Represented in green, the FMM path is a drastic improvement compared to our manual coordinate path.
        <br /><br />
        With an accurate represenation of our path, we can finally convert this FMM path to a heatmap.

        <img src={example_heatmap} className={css.maps} />

        Now, we know how to convert our data into an FMM path and heatmap. We can do this for every Uber trip we have.

        <img src={exampleheatmapgif} className={css.maps} />

      </p>






    </Layout>
  )
}

export default IndexPage