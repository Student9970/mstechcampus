import AchievementCard from "./AchievementCard";
import styles from "./Achievements.module.css";
import { GiTrophy } from "react-icons/gi";
import { IoIosRibbon } from "react-icons/io";
import { MdWorkspacePremium } from "react-icons/md";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { FaConnectdevelop } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { VscTerminalUbuntu } from "react-icons/vsc";

const Achievements = () => {
  return (
    <div className={styles.achievementContainer}>
      <div className={styles.achievement}>
        <AchievementCard
          icon={<IoIosRibbon />}
          highlight="6+ YEARS"
          title="OF EDU EXCELLENCE"
          bg="#eb7f1a"
        />
        <AchievementCard
          icon={<GiTrophy />}
          highlight="30+"
          title="JOB ORIENTED COURSES"
          bg="#ebc81a"
        />
        <AchievementCard
          icon={<LiaNetworkWiredSolid />}
          highlight="10+"
          title="NETWORK OF CENTERS"
          bg="#eb1a4b"
        />
      </div>

      <div>
        <AchievementCard
          icon={<FaConnectdevelop />}
          highlight="1000+"
          title="PLACEMENT PARTNERS"
          bg="#67eb1a"
        />
      </div>

      <div className={styles.achievement}>
        <AchievementCard
          icon={<PiStudentFill />}
          highlight="20k+"
          title="LEARNERS ANUALLY"
          bg="#1a9beb"
        />
        <AchievementCard
          icon={<MdWorkspacePremium />}
          highlight="10+"
          title="INTERNATIONAL CERTIFICATION"
          bg="#8d1aeb"
        />
        <AchievementCard
          icon={<VscTerminalUbuntu />}
          highlight="1M+"
          title="ALUMNI NETWORK"
          bg="#d7378f"
        />
      </div>
    </div>
  );
};

export default Achievements;
