import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const HotelPage = () => (
  <Layout>
    <SEO title="Hotels" />
    <h1>Recommended Hotels in the area</h1>
    <li>
      <h3>Marriott Brooklyn Bridge</h3>
      <p>
        Book through the following link:
        book.passkey.com/go/MorrisHannanWeddingBlock or call 888-436-3759 and
        reference the Morris/Hannan Room block. Rooms will be available in the
        block until August 16.
      </p>
    </li>
    <li>
      <h3>The Tillary</h3>
      <p>
        Book through the following link:
        http://bookings.ihotelier.com/bookings.jsp?groupID=2516008&hotelID=102336
        or call 844-329-9537 and reference the Morris/Hannan Wedding Room Block.
      </p>
    </li>
    <li>
      <h3>1 Hotel - Brooklyn Bridge</h3>
      <p>Contact Frannie &amp; Patrick for more info </p>
    </li>
    <li>
      <h3>The Hoxton</h3>
      <p>Use code HITCHED919 for 10% off</p>
    </li>
    <Link to="/">Go to home page</Link>
  </Layout>
)

export default HotelPage
