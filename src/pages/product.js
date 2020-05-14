import React from "react"

import Layout from "../components/layout"
import {List, Card, Col, Row} from 'antd'
import Img from 'gatsby-image'
import { graphql } from "gatsby"

const ProductPage = ( {data}) => {
    const sources = [
      data.specImage.childImageSharp.fluid, 
      data.maskImage1.childImageSharp.fluid, 
      data.maskImage2.childImageSharp.fluid, 
      data.maskImage3.childImageSharp.fluid, 
      data.maskImage4.childImageSharp.fluid,
      data.factoryImage1.childImageSharp.fluid,
      data.factoryImage2.childImageSharp.fluid,
      data.factoryImage3.childImageSharp.fluid,
      data.factoryImage4.childImageSharp.fluid

    ]

return (
  <Layout>
      <h2 style={{textAlign:"center"}}>Our Product</h2>
      <List 
        grid={{ 
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,}}
        dataSource ={sources}
        renderItem={item => (
            <List.Item>
                <Img fluid ={item}/>
            </List.Item>
        )}
        />
      {/* </Col> */}
      {/* </Row> */}
  </Layout>
)}

export default ProductPage

export const query = graphql`
  query {
    specImage : file(relativePath: { eq: "spec.jpeg" }){
        childImageSharp {
            fluid( maxWidth: 960, maxHeight: 640, quality: 100) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    maskImage1: file(relativePath: { eq: "mask1.png" }) {
      childImageSharp {
        fluid(maxWidth: 960, maxHeight: 640, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    maskImage2: file(relativePath: { eq: "mask2.png" }) {
        childImageSharp {
            fluid(maxWidth: 960, maxHeight: 640, quality: 100) {
            ...GatsbyImageSharpFluid
            }
        }
    }
    maskImage3: file(relativePath: { eq: "mask3.png" }) {
    childImageSharp {
        fluid(maxWidth: 960, maxHeight: 640, quality: 100) {
        ...GatsbyImageSharpFluid
        }
      }
    }
    maskImage4: file(relativePath: { eq: "mask4.png" }) {
    childImageSharp {
        fluid(maxWidth: 960, maxHeight: 640, quality: 100) {
        ...GatsbyImageSharpFluid
        }
      }
    }
    factoryImage1: file(relativePath: {eq: "IMG_7595.JPG"}) {
      childImageSharp {
        fluid(maxWidth: 960, maxHeight: 640, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    factoryImage2: file(relativePath: {eq: "IMG_7596.JPG"}) {
      childImageSharp {
        fluid(maxWidth: 960, maxHeight: 640, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    factoryImage3: file(relativePath: {eq: "IMG_7610.JPG"}) {
      childImageSharp {
        fluid(maxWidth: 960, maxHeight: 640, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    factoryImage4: file(relativePath: {eq: "IMG_7611.JPG"}) {
      childImageSharp {
        fluid(maxWidth: 960, maxHeight: 640, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
