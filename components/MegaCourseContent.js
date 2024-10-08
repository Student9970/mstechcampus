import styles from "./MegaCourseContent.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const MegaCourseContent = (props) => {
  const router = useRouter();
  const pathname = usePathname();
  const coursePage = pathname.includes("/courses/course/");
  return (
    <Link
      href={coursePage ? "/contact" : props.courseLink || "#"}
      style={{
        background: `linear-gradient(to right, #000 40%, #ffffff00 100%), url(${props.imgSrc})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={styles.MegaCourseContent}
    >
      <div className={styles.content}>
        <p className={styles.tag}>{props.tag}</p>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.description}>{props.description}</p>
        <div className={styles.lists}>
          {props.details?.map((detail, index) => (
            <p key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M13 2.03v2.02c4.39.54 7.5 4.53 6.96 8.92c-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93c-.45-4.75-4.22-8.5-8.95-8.97m-2 .03c-1.95.19-3.81.94-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68zM4.26 5.67A9.9 9.9 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9zM15.5 8.5l-4.88 4.88l-2.12-2.12l-1.06 1.06l3.18 3.18l5.94-5.94zM2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8 8 0 0 1 4.06 13zm5.04 5.37l-1.43 1.37A10 10 0 0 0 11 22v-2a8 8 0 0 1-3.9-1.63"
                />
              </svg>
              &nbsp;&nbsp;&nbsp;{detail}
            </p>
          ))}
        </div>
        {props.join ? (
          <button
            onClick={() => router.push("/contact")}
            className={styles.joinNow}
          >
            Join Now
          </button>
        ) : (
          <button className={styles.getStarted}>Get Started</button>
        )}
      </div>
    </Link>
  );
};

export default MegaCourseContent;
