import styles from './HighlightsCardLong.module.css'

const HighlightsCardLong = (props) => {
    return (
        <div className={styles.HighlightsCardContainer}>
            <div className={styles.HighlightsCardHeader}>
                <h3>{props.title}</h3>
                <div className={styles.HighlightsCardDescription}>
                    <p>{props.description}</p>
                </div>
            </div>
            <div className={styles.HighlightsCardIcon}>
                {props.icon}
            </div>
        </div>
    )
}

export default HighlightsCardLong