import React from 'react'
import Link from 'gatsby-link'
import title_pic from "../images/ccia.jpg"
const IndexPage = () => (

	<div>





<img src={title_pic} alt="Main hall of CCIA building"/> 

  <div>
    <h1>Welcome to the Chinese Canadian Intercultural Association (CCIA) website!</h1>
    <p>We are located at 112 Huron Street in Toronto, Ontario. We are offering a set of scholarships for the 2018 Academic Year!
    	Please see this link for more details!
    </p>
    <Link to="/scholarship/">Link to scholarship application</Link>
  </div>


	</div>

)

export default IndexPage
