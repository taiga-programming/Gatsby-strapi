import React from 'react'

import styles from '../../css/single-course.module.css'

import Image from 'gatsby-image'

import logo from '../../images/addict-logo.svg'

const Course = ({title, url,size,image}) => {


console.log(image)

return <article className={styles.course}>

<div className={styles.imgContainer}>



<a href={url} className={styles.link} target="_blank" rel="noopener noreferrer">

enrll

</a>

</div>

<div className={styles.footer}>

<div className={styles.text}>

<h3>{title}</h3>

<p>{size} hours</p>

</div>

<img src={logo} alt="coding addcict logo"></img>

</div>

</article>

}

export default Course



// import React from 'react'
// import styles from '../../css/single-course.module.css'
// import Image from 'gatsby-image'
// import logo from '../../images/addict-logo.svg'

// const Course = ({title, url,size,image}) => {
//   const mainImage = image.childImageSharp.fluid;
   
//   return <article className={styles.course}>
//     <div className={styles.imgContainer}>
//       <Image fluid={mainImage} alt={title} className={styles.img}>

//       </Image>
//       <a href={url} className={styles.link} target="_blank" rel="noopener noreferrer">
//         enrll
//       </a>
//     </div>
//     <div className={styles.footer}>
//       <div className={styles.text}>
//          <h3>{title}</h3>
//          <p>{size} hours</p>
//       </div>
//       <img src={logo} alt="coding addcict logo"></img>
//     </div>
//   </article>
// }
// export default Course
