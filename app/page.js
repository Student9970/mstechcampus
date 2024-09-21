import styles from "./page.module.css";
import HomePage from "@/components/HomePage";
import MiniCourseCard from "@/components/MiniCourseCard";
import courseDetails from "@/apis/courseDetails";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import Achievements from "@/components/Achievements";
import Trainers from "@/components/Trainers";
import Affiliations from "@/components/Affiliations";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* MAIN PAGE */}

      <HomePage />

      {/* COURSES */}

      <div className={styles.content}>
        <div className={styles.heading}>
          <h2>Courses</h2>
          <h3>Gain Practical Knowledge from IT Experts</h3>
        </div>
        <div className={styles.cardsContainer}>
          {courseDetails.map((course) => (
            <MiniCourseCard
              key={course.id}
              title={course.title}
              imgSrc={course.imgSrc}
            />
          ))}
        </div>
      </div>

      {/* HIGHLIGHTS */}

      <div className={styles.content}>
        <div className={styles.heading}>
          <h3>Our Prime Focus</h3>
        </div>
        <Highlights />
      </div>

      {/* ABOUT */}

      <div className={styles.content}>
        <div className={styles.heading}>
          <h3>{null}</h3>
        </div>
        <div className={styles.component}>
          <About />
        </div>
      </div>

      {/* TESTIMONIALS */}

      <div className={styles.content}>
        <div className={styles.heading}>
          <h3>What our students have said</h3>
        </div>
        <div className={styles.testimonials}>
          <Testimonials />
        </div>
      </div>

      {/* WHY CHOOSE US */}

      <div className={styles.content}>
        <div className={styles.heading}>
          <h3>Why choose us?</h3>
        </div>
        <div className={styles.component}>
          <WhyUs />
        </div>
      </div>

      {/* ACHIEVEMENTS */}

      <div className={styles.content}>
        <div className={styles.heading}>
          <h3>Our Achievements</h3>
        </div>
        <div className={styles.component}>
          <Achievements />
        </div>
      </div>

      {/* TRAINERS */}

      <div className={styles.content}>
        <div className={styles.heading}>
          <h3>Meet Our Professional Trainers</h3>
        </div>
        <div className={styles.component}>
          <Trainers />
        </div>
      </div>

      {/* AFFILIATIONS */}

      <div className={styles.content}>
        <div className={styles.heading}>
          <h3>Recognized by Trusted Institutions</h3>
        </div>
        <div className={styles.component}>
          <Affiliations />
        </div>
      </div>

      {/* CONTACT FORM */}

      <div className={styles.content}>
        <div className={styles.heading}>
          <h3>{null}</h3>
        </div>
        <div className={styles.component}>
          <ContactForm />
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
