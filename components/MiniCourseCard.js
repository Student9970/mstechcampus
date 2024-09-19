import styles from "./MiniCourseCard.module.css";
import Link from "next/link";
import Image from "next/image";

const MiniCourseCard = (props) => {
  return (
    <Link href={props.courseLink || "#"} className={styles.cardContainer}>
      <h2 className={styles.cardTitle}>{props.title}</h2>
      <Image
        src={`${props.imgSrc}`}
        height={200}
        width={300}
        className={styles.cardImg}
      />
    </Link>
  );
};

export default MiniCourseCard;
