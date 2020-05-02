import React from "react";
import Course from "./Course";
import {graphql, useStaticQuery} from 'gatsby';
import styles from '../../css/courses.module.css';
import Title from '../Title';


const query = graphql`

{
   allStrapiCourse(sort: {fields: id, order: DESC}) {
    nodes {
      Size
      Url
      id
      image {
        childImageSharp  {
          fluid(maxWidth:300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      id
    }
  }
}
`

const Courses = () => {
  const {allStrapiCourse: {nodes:courses}} = useStaticQuery(query);
  
  return (

   <section className={styles.courses} >

    <Title title="all" subtitle="courses"/>
    <div className={styles.center}></div>
    {
      courses.map(item => {
        return (
        <Course key={item.id}{...item} ></Course>
        );
      })}
  </section>
    );
}

export default Courses