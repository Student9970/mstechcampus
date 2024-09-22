import styles from "./page.module.css";
import Image from "next/image";
import classes from "@/public/images/bg8.jpg";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className={styles.pageHeading}>
        <p>
          <Link href="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
          &nbsp;{"> Contact Us"}
        </p>
        <Image src={classes} alt="Image containing Painting" />
      </div>

      <div className={styles.component}>
        <ContactForm />
      </div>

      <Footer />
    </>
  );
};

export default page;
