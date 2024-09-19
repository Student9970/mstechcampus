import simulation from "@/public/images/person-using-a-simulator.jpg";
import Image from "next/image";
import Link from "next/link";
import style from "./HomePage.module.css";
import { FaBookOpen } from "react-icons/fa";
import { PiNotepadFill } from "react-icons/pi";

const HomePage = () => {
  return (
    <div className={style.container}>
      <Image className={style.techImage} src={simulation} />
      <div className={style.overLay}>
        <div className={style.texts}>
          <h1>
            <span>LEARN PRACTICAL</span>LY, WHAT <span>ENGINEERING</span>{" "}
            DOESN'T TEACH YOU
          </h1>

          <p>
            At Maha Sagar Tech Campus, we teach modern tools & technologies
            which are being used in the industry
          </p>

          <div className={style.showCase}>
            <div className={style.showCaseCard}>
              <FaBookOpen />
              <h2>100+ Hours of Video Content</h2>
            </div>
            <div className={style.showCaseCard}>
              <PiNotepadFill />
              <h2>5 Courses</h2>
            </div>
          </div>

          <Link href="/courses" className={style.registerBtn}>
            Explore Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
