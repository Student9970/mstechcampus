import styles from './About.module.css';
import Image from 'next/image'
import classes from '@/public/images/Classes.jpg'
import Link from 'next/link';

const About = () => {
    return (
        <div className={styles.aboutContainer}>

            <div className={styles.leftImg}>
                <Image className={styles.classImg} src={classes} />
            </div>

            <div className={styles.rightText}>
                <h2>About Us</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dicta iste, obcaecati laborum tempore tenetur quod ex eius nostrum similique iusto, dignissimos, aspernatur hic? Placeat, officiis delectus expedita totam enim ipsam omnis repudiandae doloremque fugiat nulla, rerum cumque, quo aut. Qui, quis, distinctio dignissimos sequi blanditiis quasi, laborum harum debitis molestias asperiores repellat? Recusandae aperiam sapiente, impedit tenetur sit molestiae repudiandae amet assumenda sed numquam eos mollitia pariatur, laboriosam corrupti velit deleniti alias eaque. Minima, recusandae? Distinctio aperiam quidem dolor maiores voluptatem omnis in commodi eius aliquid eum saepe sint numquam sapiente temporibus, assumenda velit labore nobis accusamus nostrum error veniam doloremque, nisi voluptate? Ullam rerum reprehenderit praesentium.
                </p>
                <Link className={styles.knowMore} href="#">Know More</Link>
            </div>

        </div>
    )
}

export default About