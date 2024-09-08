import styles from './Testimonials.module.css'
import Image from 'next/image'
import percent from '@/public/images/percentDark.png'
import TestimonialCard from './TestimonialCard'
import studentTestimonials from '@/apis/studentTestimonials'

const Testimonials = () => {
    return (
        <div className={styles.testimonialsContainer}>
            <div className={styles.percentContainer}>
                <Image src={percent} width="150" />
                <p>of customers were served successfully*</p>
            </div>

            {studentTestimonials.map((testimonial) => <TestimonialCard
                key={testimonial.id}
                studentText={testimonial.studentText}
                studentName={testimonial.studentName}
                rating={testimonial.rating}
            />)}
        </div>
    )
}

export default Testimonials