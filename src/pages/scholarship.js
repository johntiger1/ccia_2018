import React from 'react'
import Link from 'gatsby-link'
import styles from "./scholarship.module.css"
import more_styles from "./random.module.css"
import scholarship_pic from "./scholarship.jpg"
// import file from "../docs/CCIA Scholarship Application Procedures English.docx"

// import {}

console.log("these are some" + styles);
console.log(styles);
console.log(" these are some more" + more_styles);
console.log(more_styles);

// OK, css for hackers is as follows:
// Just make sure to handle namespace collisons!
import "./random.css"

//actually the modules thing also works, but whitespace sensitivity!
//also throw in some nice nondeterminism! soemtimes you need to manually reload! 
// console.log(styles);

// note that to do would be to do this in a more gatsby esque/static site generation
// style; where the posts are generated from
// a regular formatted file
const SecondPage = () => (
  <div>
  
  <img src={scholarship_pic} alt="2017 Scholarship Ceremony"/> 
  <p className={styles.scholarship_caption}>   <i> Picture of recepients and honored guests from the 2017 Scholarship Ceremony</i> </p>


    <h1>Lu Shen Chan Education Scholarship</h1>

<p className={styles.scholarship_description} >
The Lu Shen Chan Education Scholarship is open to Canadian citizens entering first year university who have at least one grandparent that is Chinese. There are 5 $500 scholarships and applicants will be considered based on academic excellence, financial need, and extracurricular involvement.

​<br/>

Below are the two files to apply for the Lu Shen Chan Education Scholarship. The procedure for applying for this scholarship is as follows:

​<br/>

<br/>


<ol className={styles.app_instructions}>


<li>
Download the two files for application form and guidelines below.
They are avilable in both Chinese and English.
		<ul>


				<li> <a href="/CCIA Scholarship Application Procedures Chinese.docx" download> CCIA Scholarship Application Procedure Chinese </a>
				</li>
				<li> <a href="/CCIA Scholarship Application Procedures English.docx" download> CCIA Scholarship Application Procedure English </a>
				</li>
				<li> <a href="/CCIA Scholarship Application Form Chinese.doc" download> CCIA Scholarship Application Form Chinese </a>
				</li>
				<li> <a href="/CCIA Scholarship Application Form English.doc" download> CCIA Scholarship Application Form English</a>
				</li>
				
		</ul>
 </li>

<li>
Read the guidelines, and complete the application package.
 </li>

<li>
Mail or drop off completed package in the mailbox at 112 Huron Street, Toronto, postal code M5T 2B2. 
 </li>



</ol>
<br/>


The application period for this scholarship is June 16th, 2019 to September 2nd, 2019. Please ensure that the application is received by September 2nd. 

Questions can be sent to <a href="mailto:ccia.toronto@gmail.com">  ccia.toronto@gmail.com </a>

</p>
    <Link to="/">Go back to the homepage</Link>


  </div>
)

export default SecondPage
