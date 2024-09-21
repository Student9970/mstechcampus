import styles from "./Certificate.module.css";
import Image from "next/image";

const Certificate = () => {
  return (
    <div className={styles.certificateContainer}>
      <div className={styles.logo}>
        <Image
          src="/images/Logo.png"
          height={300}
          width={1120}
          alt="MS Tech Campus Logo"
        />
      </div>
      <h2>Become MS Tech Campus Certified</h2>
      <p>
        Students who complete the course curriculum are awarded with a sealed
        Certificate
      </p>
      <div className={styles.seal}>
        <Image
          src="/images/ms-seal.png"
          height={500}
          width={1200}
          alt="MS Tech Campus Logo"
        />
      </div>
      <div className={styles.completionDate}>
        <p>THIS IS A DEMO</p>
        <p>COMPLETION DATE</p>
      </div>
    </div>
  );
};

export default Certificate;
