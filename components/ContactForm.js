import styles from './ContactForm.module.css'
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoIosTime } from "react-icons/io";
import Link from 'next/link';
import Image from 'next/image';
import contactImage from '@/public/images/graphics-designing.jpg';

const ContactForm = () => {
    return (
        <div className={styles.contactForm}>

            <div className={styles.leftContact}>
                <h2>Register now and secure your future</h2>

                <div className={styles.detail}>
                    <div className={styles.icon}>
                        <IoIosCall />
                    </div>
                    <div className={styles.text}>
                        <p>Call Us</p>
                        <Link href="tel:+919021599825">9021599825</Link>
                    </div>
                </div>

                <div className={styles.detail}>
                    <div className={styles.icon}>
                        <IoMdMail />
                    </div>
                    <div className={styles.text}>
                        <p>Write to us</p>
                        <Link href="mailto:mstechcampus@gmail.com">mstechcampus@gmail.com</Link>
                    </div>
                </div>

                <div className={styles.detail}>
                    <div className={styles.icon}>
                        <IoIosTime />
                    </div>
                    <div className={styles.text}>
                        <p>Office Hours</p>
                        <p>9:00 A.M. to 7:00 P.M.</p>
                    </div>
                </div>

            </div>

            <div className={styles.rightContact}>
                <h2>Contact us</h2>
                <form>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <input type="text" id="message" name="message" />
                    </div>
                    <button className={styles.btn} type="submit">Send</button>
                </form>
            </div>

        </div>
    )
}

export default ContactForm