import styles from "./page.module.css";
import Image from "next/image";
import classes from "@/public/images/bg8.jpg";
import About from "@/components/About";
import Link from "next/link";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <div className={styles.pageHeading}>
        <h1>
          <Link href="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
          &nbsp;{"> About Us"}
        </h1>
        <Image src={classes} alt="Image containing painting" />
      </div>
      <div className={styles.aboutContainer}>
        <About />
      </div>
      <Footer />
    </>
  );
};

export default page;
