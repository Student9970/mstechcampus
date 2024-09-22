import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.companyInfo}>
        <p>COMPANY LOGO</p>
        <h3>MS Tech Campus</h3>
      </div>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/placements">Placements</Link>
      </div>
      <div className={styles.address}>
        <p>Address: 101, Tiranga Hotel, Bhusawal Compound, Thane, Mumbai</p>
        <p>
          Phone: <Link href="tel:+919021599825">+91 9021599825</Link>
        </p>
        <p>
          Email:{" "}
          <Link href="mailto:mstechcampus@gmail.com">
            mstechcampus@gmail.com
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
