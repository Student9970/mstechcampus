import styles from "./TestimonialCard.module.css";
import { ImQuotesRight } from "react-icons/im";
import { FaStar } from "react-icons/fa6";

const TestimonialCard = (props) => {
  const rating = [...Array(props.rating)];

  return (
    <div className={styles.testimonialCardContainer}>
      <div className={styles.quoteIcon}>
        <ImQuotesRight />
      </div>

      <div className={styles.testimonialText}>
        <p>{props.studentText}</p>
      </div>

      <div className={styles.studentDetail}>
        {/* <div className={styles.studentImage}>
                    <h3>J</h3>
                </div> */}

        <div className={styles.studentName}>
          <h3>{props.studentName}</h3>
          <div className={styles.rating}>
            {rating.map((star) => (
              <FaStar />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
