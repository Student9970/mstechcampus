import styles from './page.module.css'
import Image from 'next/image'
import classes from '@/public/images/Classes.jpg'

const page = () => {
    return (
        <>
            <div className={styles.pageHeading}>
                <h1>Blog</h1>
                <Image src={classes} />
            </div>
        </>
    )
}

export default page