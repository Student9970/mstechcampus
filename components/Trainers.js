import styles from "./Trainers.module.css";
import man from "@/public/images/man.png";
import woman from "@/public/images/woman.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const Trainers = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.trainersContainer}>
        <div className={styles.trainerImg}>
          <Image src={man} alt="An icon of a man" />
        </div>
        <div className={styles.description}>
          <h3>Rizwan Ansari</h3>
          <p>Computer Trainer</p>
        </div>
        <div className={styles.rating}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
      <div className={styles.trainersContainer}>
        <div className={styles.trainerImg}>
          <Image src={man} alt="An icon of a man" />
        </div>
        <div className={styles.description}>
          <h3>Usama Ansari</h3>
          <p>Computer Trainer</p>
        </div>
        <div className={styles.rating}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
      <div className={styles.trainersContainer}>
        <div className={styles.trainerImg}>
          <Image src={man} alt="An icon of a man" />
        </div>
        <div className={styles.description}>
          <h3>Aarish Khan</h3>
          <p>Computer Trainer</p>
        </div>
        <div className={styles.rating}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
    </div>
  );
};

export default Trainers;
