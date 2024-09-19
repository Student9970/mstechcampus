"use client";
import MegaCourseContent from "@/components/MegaCourseContent";
import styles from "./page.module.css";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import classes from "@/public/images/bg7.jpg";
import { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/courses");
        const res = await response.json();
        setData(res);
      } catch (error) {
        console.error("Unable to fetch data");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={styles.pageHeading}>
        <h1>
          <Link href="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
          &nbsp;{"> Courses"}
        </h1>
        <Image src={classes} />
      </div>
      <div className={styles.content}>
        <p className={styles.coursesIntro}>
          At MS Tech Campus, we offer a wide range of in-demand tech courses
          designed to help you master the skills needed in today’s fast-paced
          technology landscape. Whether you’re a beginner or an experienced
          professional, our courses are tailored to fit your needs and help you
          excel in your career.
        </p>
        <div className={styles.cardsContainer}>
          {data ? (
            data.map((course) => (
              <MegaCourseContent
                courseLink={`/courses/course/${course._id}`}
                key={course._id}
                tag={course.tag}
                title={course.title}
                imgSrc={course.imgSrc}
                description={course.description}
                details={course.details}
              />
            ))
          ) : (
            <p className={styles.loading}>Loading...</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
