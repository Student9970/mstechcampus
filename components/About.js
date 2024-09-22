import styles from "./About.module.css";
import Image from "next/image";
import classes from "@/public/images/Classes.jpg";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.leftImg}>
        <Image
          className={styles.classImg}
          src={classes}
          alt="Teacher Teaching students in a classroom"
        />
      </div>

      <div className={styles.rightText}>
        <h2>About Us</h2>
        <p>
          Founded in 2023 by Usama Ansari and Rizwan Ansari, MS Tech Campus
          provides practical, real-world education that bridges the gap between
          traditional learning and industry needs. We offer courses in Python,
          Power BI, Advanced Excel, Web Development, and Figma, focusing on
          cutting-edge tools and technologies. Our certifications are recognized
          by NSDC-Skill India, ISO, Microsoft, Certiport, and Google. With
          flexible learning options—both online and classroom training—we
          empower students with essential skills, guided by seasoned industry
          professionals. MS Tech Campus ensures you gain the knowledge and
          credentials to succeed in today’s competitive world.
        </p>
        <Link className={styles.knowMore} href="/about">
          Know More
        </Link>
      </div>
    </div>
  );
};

export default About;
