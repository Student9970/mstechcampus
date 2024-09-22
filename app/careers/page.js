import styles from "./page.module.css";
import Image from "next/image";
import classes from "@/public/images/bg8.jpg";
import Link from "next/link";
import Footer from "@/components/Footer";

const page = () => {
  const whyWork = [
    {
      id: 1,
      title: "Innovative Environment.",
      text: "Collaborate with like-minded individuals and work on cutting-edge educational technologies.",
      imgSrc: "/images/Innovative Environment.jpg",
    },
    {
      id: 2,
      title: "Professional Growth.",
      text: "Enjoy continuous learning and career development opportunities through our programs, mentorship, and workshops.",
      imgSrc: "/images/Professional Growth.jpg",
    },
    {
      id: 3,
      title: "Work-Life Balance",
      text: "We understand the importance of a balanced life. Enjoy flexible work hours and the ability to work remotely.",
      imgSrc: "/images/Work-Life Balance.jpg",
    },
    {
      id: 4,
      title: "Diverse & Inclusive Culture",
      text: "At MS Tech Campus, diversity isn’t just a policy; it’s a core value. We encourage people from all backgrounds to contribute and grow with us.",
      imgSrc: "/images/Diverse & Inclusive Culture.jpg",
    },
  ];
  return (
    <>
      <div className={styles.pageHeading}>
        <p>
          <Link href="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
          &nbsp;{"> Careers"}
        </p>
        <Image src={classes} />
      </div>
      <div className={styles.heroCard}>
        <h1>Join Us at MS Tech Campus</h1>
        <p>Shape the Future of Education with Us</p>
      </div>
      <p className={styles.heroPanel}>
        At MS Tech Campus, we believe in the power of education to transform
        lives. As a leading platform for tech skills and digital education, we
        are always looking for passionate, talented individuals who share our
        vision to inspire learners and foster innovation. Join our dynamic team
        and be part of something meaningful!
      </p>
      <div className={styles.whyWork}>
        <h2>Why Work With Us?</h2>
        <div className={styles.features}>
          {whyWork.map((work, index) => {
            return (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureImage}>
                  <Image
                    height={1920}
                    width={1080}
                    src={work.imgSrc}
                    alt={work.title}
                  />
                </div>
                <div className={styles.featureText}>
                  <p>
                    <span>{work.title}</span> {work.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.apply}>
        <h2> How to Apply?</h2>
        <p>
          Interested in joining the MS Tech Campus team? Send your resume and
          any relevant portfolio materials to{" "}
          <strong>mstechcampus@gmail.com</strong> with the subject line{" "}
          <strong>MSJOB - [Position Name]</strong>
        </p>
        <Link href="mailto:mstechcampus@gmail.com">Apply</Link>
      </div>
      <div className={styles.apply}>
        <h2>Internships & Volunteering</h2>
        <p>
          We also offer internship programs for students and recent graduates.
          Gain real-world experience while contributing to meaningful projects.
          If interested, send your CV to <strong>mstechcampus@gmail.com</strong>{" "}
          with the subject line <strong>MSINTERNSHIP</strong>
        </p>
        <Link href="mailto:mstechcampus@gmail.com">Apply</Link>
      </div>
      <Footer />
    </>
  );
};

export default page;
