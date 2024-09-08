import AchievementCard from "./AchievementCard"
import styles from './Achievements.module.css'
import { GiTrophy } from "react-icons/gi"

const Achievements = () => {
    return (
        <div className={styles.achievementContainer}>

            <div className={styles.achievement}>
                <AchievementCard
                    icon={<GiTrophy />}
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
                    icon={<GiTrophy />}
                    highlight="10+"
                    title="NETWORK OF CENTERS"
                    bg="#eb1a4b"
                />
            </div>

            <div>
                <AchievementCard
                    icon={<GiTrophy />}
                    highlight="1000+"
                    title="PLACEMENT PARTNERS"
                    bg="#67eb1a"
                />
            </div>

            <div className={styles.achievement}>
                <AchievementCard
                    icon={<GiTrophy />}
                    highlight="20k+"
                    title="LEARNERS ANUALLY"
                    bg="#1a9beb"
                />
                <AchievementCard
                    icon={<GiTrophy />}
                    highlight="10+"
                    title="INTERNATIONAL CERTIFICATION"
                    bg="#8d1aeb"
                />
                <AchievementCard
                    icon={<GiTrophy />}
                    highlight="1M+"
                    title="ALUMNI NETWORK"
                    bg="#d7378f"
                />
            </div>
        </div>
    )
}

export default Achievements