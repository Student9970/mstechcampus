"use client";
import MiniCourseCard from "@/components/MiniCourseCard";
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
        <div className={styles.cardsContainer}>
          {data ? (
            data.map((course) => (
              <MiniCourseCard
                courseLink={`/courses/course/${course._id}`}
                key={course._id}
                title={course.title}
                imgSrc={course.imgSrc}
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
