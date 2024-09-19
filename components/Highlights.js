import HighlightsCardWide from "./HighlightsCardWide";
import HighlightsCardLong from "./HighlightsCardLong";
import { HiCheckBadge } from "react-icons/hi2";
import { IoIosBookmarks } from "react-icons/io";
import { PiCertificateFill } from "react-icons/pi";
import { SiVisualstudiocode } from "react-icons/si";
import { FaChalkboardTeacher } from "react-icons/fa";
import styles from "./Highlights.module.css";

const Highlights = () => {
  return (
    <div className={styles.highlightsContainer}>
      <div className={styles.wide}>
        <HighlightsCardWide
          title="APPLIED LIFE MASTERY FUNDAMENTALS"
          description="Gain essential real-world skills that can positively transform your life."
          icon={<HiCheckBadge />}
        />
        <HighlightsCardWide
          title="ENGAGING LEARNING EXPERIENCE"
          description="Experience the dynamic and captivating format synonymous with MS Tech Campus educational videos."
          icon={<IoIosBookmarks />}
        />
      </div>
      <div className={styles.long}>
        <HighlightsCardLong
          title="ACHIEVEMENT CERTIFICATION"
          description="Receive a certificate of accomplishment to showcase your mastery."
          icon={<PiCertificateFill />}
        />
      </div>
      <div className={styles.wide}>
        <HighlightsCardWide
          title="CUTTING-EDGE CODING METHODOLOGIES"
          description="Explore the latest coding methodologies and tools essential for modern software development, guided by industry experts"
          icon={<SiVisualstudiocode />}
        />
        <HighlightsCardWide
          title="SEASONED INSTRUCTORS"
          description="Benefit from the expertise of industry professionals dedicated to empowering the next generation."
          icon={<FaChalkboardTeacher />}
        />
      </div>
    </div>
  );
};

export default Highlights;
