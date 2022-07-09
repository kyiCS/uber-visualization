import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Header from "../components/header"
import AppStoreButton from "../components/AppStoreButton"
import GlobalStyle from "../components/GlobalStyle"
import Theme from "./src/components/Theme"
import Constraints from "../components/Constraints"
import AppStoreReviews from "../components/AppStoreReviews"
import Constraint from "../components/Constraint"
import Layout from "../components/layout"
import BigSection from "../components/BigSection"
import HeroSection from "../components/HeroSection"
import Lighten from "../components/Lighten"

const IndexPage = props => (
  <Theme>
    <GlobalStyle />
    <SEO title="Shotty" keywords={[`shotty`, `screenshots`, `mac`]} />
    <Header />
    <Layout>
      <Constraints>
        <HeroSection>
          <div className="text-container">
            <h1>Faster access to your screenshots.</h1>
            <Lighten opacity="0.7">
              <h5>
                Shotty is a menu bar app that helps you quickly find the
                screenshot you're looking for so you can drag and drop it into
                any application.
              </h5>
            </Lighten>
          </div>
          <AppStoreButton className="button" />
          <Constraint maxWidth="1000px" padding="20px 0 0 0">
            <Img
              fluid={props.data.laptop1.childImageSharp.fluid}
              critical={true}
            />
          </Constraint>
        </HeroSection>
        <BigSection>
          <div className="text-container">
            <h2 className="gradient-text-subtle">
              Drag and drop screenshots from your menu bar into any application.
            </h2>
            <LogoGrid>
              <img src={require("../images/logo-slack.png")} width="50" />
              <img src={require("../images/logo-sketch.png")} width="50" />
              <img src={require("../images/logo-photoshop.png")} width="50" />
              <img src={require("../images/logo-chrome.png")} width="50" />
              <img src={require("../images/logo-imessage.png")} width="50" />
            </LogoGrid>
          </div>
          <div className="image-container">
            <Img fluid={props.data.laptop2.childImageSharp.fluid} />
          </div>
        </BigSection>
        <BigSection>
          <div className="text-container">
            <h2 className="gradient-text-subtle">
              Annotate your screenshots quickly.
            </h2>
          </div>
          <div className="image-container">
            <Img fluid={props.data.laptop3.childImageSharp.fluid} />
          </div>
        </BigSection>
        <BigSection>
          <div className="text-container">
            <h2 className="gradient-text-subtle">
              Over <span className="gradient-text-bright">11,000 people</span>{" "}
              have downloaded Shotty, and counting.
            </h2>
          </div>
        </BigSection>
        <AppStoreReviews />
        <BigSection>
          <div className="text-container">
            <h1>
              Get <span className="gradient-text-bright">Shotty</span> for
              yourself.
            </h1>
          </div>
          <AppStoreButton />
        </BigSection>
      </Constraints>
    </Layout>
  </Theme>
)

export default IndexPage

const ProductHunt = ({ theme }) => (
  <a
    href="https://www.producthunt.com/posts/shotty?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-shotty"
    target="_blank"
  >
    <img
      src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=104800&theme=dark`}
      alt="Shotty - Faster access to your screenshots on Mac. | Product Hunt Embed"
      // style={{ width: 250 + "px", height: 66 + "px" }}
      width="250px"
      height="54px"
    />
  </a>
)

const ButtonSection = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin: 0 auto;
  grid-gap: 20px;
  .button1 {
    justify-self: right;
  }
  .button2 {
    justify-self: left;
  }
`

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 20px;
  justify-items: center;
  margin: 30px 0 0 0;

  @media (max-width: 600px) {
    grid-template-columns: repeat(5, 30px);
    grid-gap: 30px;
    img {
      width: 40px;
      height: 40px;
    }
  }
`

export const pageQuery = graphql`
  query {
    laptop1: file(relativePath: { eq: "laptop1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    laptop2: file(relativePath: { eq: "laptop2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    laptop3: file(relativePath: { eq: "laptop3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    logoChrome: file(relativePath: { eq: "logo-chrome.png" }) {
      childImageSharp {
        fluid(maxWidth: 110) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
