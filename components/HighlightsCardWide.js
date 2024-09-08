import styles from './HighlightsCardWide.module.css'

const HighlightsCardWide = (props) => {
    return (
        <div className={styles.HighlightsCardContainer}>
            <div className={styles.HighlightsCardHeader}>
                <h3>{props.title}</h3>
                <div className={styles.HighlightsCardIcon}>
                    {props.icon}
                </div>
            </div>
            <div className={styles.HighlightsCardDescription}>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default HighlightsCardWide