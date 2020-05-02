import React from 'react';

import styles from '../../css/single-course.module.css';

import Img from 'gatsby-image';

import logo from '../../images/addict-logo.svg';

const Course = ({title, url,size,image}) => {

// console.log(image)

const mainimage = image.childImageSharp.fluid;
return( 
 <article className={styles.course} >

  <div className={styles.imgContainer} >
   <Img fluid={mainimage} alt={title} className={styles.img} >
       </Img>


   <a href={url} 
      className={styles.link} 
      target="_blank" 
      rel="noopener noreferrer">
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
  );
}
export default Course
