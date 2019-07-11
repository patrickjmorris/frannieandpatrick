import { Link } from "gatsby"
import React from "react"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to our wedding website</h1>
    <p>We're looking forward to you joining us from our special day.</p>
    <p>September 14, 2019</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/hotels/">Check out hotels options</Link>
  </Layout>
)

export default IndexPage
