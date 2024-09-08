import HighlightsCardWide from "./HighlightsCardWide";
import HighlightsCardLong from "./HighlightsCardLong";
import { HiCheckBadge } from "react-icons/hi2";
import styles from './Highlights.module.css';

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
                    description="Experience the dynamic and captivating format synonymous with Dhruv Rathee educational videos."
                    icon={<HiCheckBadge />}
                />
            </div>
            <div className={styles.long}>
                <HighlightsCardLong
                    title="ACHIEVEMENT CERTIFICATION"
                    description="Receive a certificate of accomplishment to showcase your mastery."
                    icon={<HiCheckBadge />}
                />
            </div>
            <div className={styles.wide}>
                <HighlightsCardWide
                    title="INNOVATIVE TEACHING APPROACH"
                    description="Experience our unique training methodology, integrating assignments, case studies, projects, and industry insights."
                    icon={<HiCheckBadge />}
                />
                <HighlightsCardWide
                    title="HANDS-ON TRAINING GUARANTEE"
                    description="Prepare for the job market with our immersive, practical-based programs, featuring live projects and real-world data."
                    icon={<HiCheckBadge />}
                />
            </div>
            <div className={styles.long}>
                <HighlightsCardLong
                    title="SEASONED INSTRUCTORS"
                    description="Benefit from the expertise of industry professionals dedicated to empowering the next generation."
                    icon={<HiCheckBadge />}
                />
            </div>
            <div className={styles.wide}>
                <HighlightsCardWide
                    title="CUTTING-EDGE CODING METHODOLOGIES"
                    description="Explore the latest coding methodologies and tools essential for modern software development, guided by industry experts"
                    icon={<HiCheckBadge />}
                />
                <HighlightsCardWide
                    title="EMPOWERMENT THROUGH KNOWLEDGE"
                    description="Experience the transformative power of knowledge as you embark on a journey of self-empowerment, unlocking new opportunities and perspectives along the way."
                    icon={<HiCheckBadge />}
                />
            </div>
        </div>
    )
}

export default Highlights