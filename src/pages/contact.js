import React from "react"

import Img from 'gatsby-image'
import { graphql } from "gatsby"
import {Row, Col, Card} from 'antd'
import spec from '../images/spec.jpeg'
import Layout from "../components/layout"

const {Meta} = Card;

const ContactPage = ({data}) => {

 return (
  <Layout>
    <Row grid={{ 
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,}}>
    <Col span={12}>
    <Card
    style={{ width: 400 }}
    cover={
      <img
        alt="example"
        src={spec}
      />
    }
    actions={[
      <p>Email: info@sdipmask.com</p>,
      <p>Tel: +86-758-3639830</p>

    ]}
  >
    <Meta
      title="Sdip ( Zhaoqing) health technology co., Ltd."
      description="No.6 Jingtai Second Road, GaoXing District, Zhaoqing, GuanDong.
      "
    />
  </Card>
    </Col>
    <Col span={12}>
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>Name: <input type="text" name="name" /></label>   
      </p>
      <p>
        <label>Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
    </Col>
    </Row>
  </Layout>
)}

export default ContactPage

export const query = graphql`
  query {
    fdaImage : file(relativePath: { eq: "fda.png" }){
        childImageSharp {
            fluid( maxWidth: 960, quality: 100) {
                ...GatsbyImageSharpFluid
            }
        }
    }
  }
`