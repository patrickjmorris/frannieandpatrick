import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ThingsPage = () => (
  <Layout>
    <SEO title="Hotels" />
    <h1>Things to do in Brooklyn</h1>
    <p>More to come</p>
    <Link to="/">Go to home page</Link>
  </Layout>
)

export default ThingsPage
