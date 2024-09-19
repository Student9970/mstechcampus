import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import classes from "@/public/images/Classes.jpg";
import Footer from "@/components/Footer";

const page = () => {
  const whyChoose = [
    {
      id: 1,
      title: "Industry-Recognized Certifications",
      description:
        "Our courses in Python, Power BI, Advanced Excel, Web Development, and Figma equip you with globally recognized certifications that make you stand out to employers.",
    },
    {
      id: 2,
      title: "Extensive Industry Network",
      description:
        "We partner with a wide range of companies across various industries, giving you exclusive access to job openings and placement opportunities.",
    },
    {
      id: 3,
      title: "Comprehensive Career Support",
      description:
        "From resume building to interview preparation, our career support team helps you every step of the way.",
    },
    {
      id: 4,
      title: "Personalized Guidance",
      description:
        "Each student receives one-on-one mentorship and career counseling to help them identify the best roles and companies that match their skills and career goals.",
    },
  ];

  const placementProcess = [
    {
      title: "Skill Development & Certification",
      description:
        "Complete one or more of our courses to gain the necessary technical skills and certification that employers are looking for.",
    },
    {
      title: "Resume & Portfolio Building",
      description:
        "Work with our placement team to create an impressive resume and portfolio that highlights your projects, skills, and achievements.",
    },
    {
      title: "Interview Preparation",
      description:
        "We provide mock interviews, feedback, and resources to help you ace your job interviews with confidence.",
    },
    {
      title: "Job Applications & Interviews",
      description:
        "Get access to our exclusive job portal where top companies post openings for MS Tech Campus graduates. Apply to roles, attend interviews, and secure job offers.",
    },
    {
      title: "Onboarding & Continued Support",
      description:
        "Once you’re placed, we continue to offer support as you transition into your new role. From career growth advice to skill-upgrade courses, we’re with you throughout your journey.",
    },
  ];

  return (
    <>
      <div className={styles.pageHeading}>
        <h2>
          <Link href="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
          &nbsp;{"> Placements"}
        </h2>
        <Image src={classes} />
      </div>

      <div className={styles.contentContainer}>
        <h2>Placements at MS Tech Campus</h2>
        <p>
          <strong>Your Path to a Successful Career Starts Here</strong>
        </p>
        <p>
          At MS Tech Campus, we don’t just offer education; we help you build a
          career. Our dedicated placement program is designed to connect
          students with top employers and real-world job opportunities. From
          tech giants to dynamic startups, we ensure that our graduates have
          access to a network of companies seeking the skills and expertise
          developed through our courses.
        </p>
      </div>

      <div className={styles.whyChoose}>
        <h2>Why Choose MS Tech Campus Placements?</h2>

        <div className={styles.features}>
          {whyChoose.map((item, index) => (
            <div key={index} className={styles.whyChooseItem}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.placementProcess}>
        <h3>Placement Process</h3>

        <div className={styles.features}>
          {placementProcess.map((item, index) => (
            <div key={index} className={styles.placementProcessItem}>
              <div className={styles.heading}>{index + 1}</div>
              <div className={styles.description}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.placementPartners}>
        <h2>Our Placement Partners</h2>
        <p>
          We collaborate with industry leaders and top organizations to bring
          our students the best job opportunities. Here are just a few of the
          companies that have hired our graduates:
        </p>
        <Image
          height={1080}
          width={1920}
          src="/images/Placement Partners.png"
          alt="Image of logos of different companies"
        />
      </div>

      <div className={styles.placementStatistics}>
        <div className={styles.placementHighlight}>
          <h2>95%</h2>
          <p>Placement Rate</p>
        </div>
        <div className={styles.placementHighlight}>
          <h2>₹12 LPA</h2>
          <p>Highest Package</p>
        </div>
        <div className={styles.placementHighlight}>
          <h2>₹6 LPA</h2>
          <p>Average Package</p>
        </div>
        <div className={styles.placementHighlight}>
          <h2>Top Roles Secured</h2>
          <p>
            Python Developer, Data Analyst (Power BI), Full-Stack Web Developer,
            UI/UX Designer (Figma)
          </p>
        </div>
      </div>

      <p className={styles.heroPanel}>
        Employers are constantly searching for professionals with the skills and
        certifications that MS Tech Campus provides. With our partnerships and
        growing industry network, your next career opportunity is just a step
        away.
      </p>

      <div className={styles.getStarted}>
        <h3>How to Get Started?</h3>
        <div className={styles.stepsToEnroll}>
          <p>Enroll in a Course</p>
          <Image
            height={40}
            width={25}
            src="/images/Arrow Down 1.png"
            alt="Arrow down image"
          />
          <p>Complete the Program</p>
          <Image
            height={40}
            width={25}
            src="/images/Arrow Down 1.png"
            alt="Arrow down image"
          />
          <p>Access Placement Assistance</p>
          <Image
            height={40}
            width={25}
            src="/images/Arrow Down 1.png"
            alt="Arrow down image"
          />
          <p>Land Your Dream Job</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
