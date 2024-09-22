import styles from "./Affiliations.module.css";
import Image from "next/image";
import Affiliates from "@/public/images/Recognized-By.png";

const Affiliations = () => {
  return (
    <div className={styles.affiliationsContainer}>
      <Image
        src={Affiliates}
        alt="Logos of different oraganizations arranged in a grid"
      />
    </div>
  );
};

export default Affiliations;
