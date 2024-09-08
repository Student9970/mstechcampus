import styles from './AchievementCard.module.css'

const AchievementCard = (props) => {
    return (
        <div className={styles.achievementCardContainer}>

            <div className={styles.acievementIcon} style={{ backgroundColor: `${props.bg}` }}>
                {props.icon}
            </div>

            <h3 className={styles.achievementHighlight}>
                {props.highlight}
            </h3>

            <h3 className={styles.achievementTitle}>
                {props.title}
            </h3>

        </div >
    )
}

export default AchievementCard