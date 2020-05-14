import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <Image />
    
    {/* <div clasName ="contact" style={{paddingTop:'25px'}}>
    <h3 style={{textAlign:'center'}}>How can we help? Drop us a line</h3>
    <form name="contact" method="POST" data-netlify="true">
      <label>Name: <input style={{paddingRight:'10px', marginRight:'50px'}} type="text" name="name" /></label>   
      <label>Email: <input style={{paddingRight:'10px', marginRight:'50px'}} type="email" name="email" /></label>
      <label>Message: <textarea style={{ marginTop:'10px'}}name="message"></textarea></label>
      <button type="submit">Send</button>
    </form>
    </div> */}
  </Layout>
)

export default IndexPage
