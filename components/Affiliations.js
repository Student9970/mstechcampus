import styles from './Affiliations.module.css'
import Image from 'next/image'
import Affiliates from '@/public/images/Recognized-By.png'
import Affiliated from '@/public/images/Recognized-By1.png'

const Affiliations = () => {
    return (
        <div className={styles.affiliationsContainer}>
            <Image src={Affiliates} />
        </div>
    )
}

export default Affiliations