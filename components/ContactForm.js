"use client";
import styles from "./ContactForm.module.css";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoIosTime } from "react-icons/io";
import Link from "next/link";
import { useState, useEffect } from "react";

const ContactForm = () => {
  const [courseList, setCourseList] = useState();
  const [data, setData] = useState({
    name: "",
    email: "",
    course: "Select",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/contact/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        course: data.course,
        message: data.message,
      }),
    });

    const contactRes = await response.json();
    console.log("contactRes", contactRes);
    if (contactRes._id) {
      alert("Data Submitted");
    }
  };

  useEffect(() => {
    const fetchCourseNames = async () => {
      const res = await fetch("/api/courselist");
      const data = await res.json();
      setCourseList(data);
    };

    fetchCourseNames();
  }, []);

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
            <Link href="mailto:mstechcampus@gmail.com">
              mstechcampus@gmail.com
            </Link>
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
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="course">Course</label>
            <select
              value={data.course}
              onChange={(e) => setData({ ...data, course: e.target.value })}
            >
              <option disabled value="Select">
                Select
              </option>
              {courseList
                ? courseList.map((course, index) => {
                    return (
                      <option key={index} value={course.title}>
                        {course.title}
                      </option>
                    );
                  })
                : null}
              <option value={"Message"}>Message</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <input
              type="text"
              id="message"
              name="message"
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
            />
          </div>
          <button className={styles.btn} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
