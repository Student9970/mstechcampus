import styles from './WhyUsCard.module.css'

const WhyUsCard = (props) => {
    return (
        <div className={styles.WhyUsCardContainer}>
            <div className={styles.iconContainer}>
                {props.icon}
            </div>
            <div className={styles.textContainer}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default WhyUsCard