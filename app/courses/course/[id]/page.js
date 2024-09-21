"use client";
import React from "react";
import styles from "./page.module.css";
import { FiLayers } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";
import { IoLanguage } from "react-icons/io5";
import Highlights from "@/components/Highlights";
import { TiTick } from "react-icons/ti";
import Certificate from "@/components/Certificate";
import FAQs from "@/components/FAQs";
import MegaCourseContent from "@/components/MegaCourseContent";
import Footer from "@/components/Footer";

const page = ({ params }) => {
  const courseDetails = {
    _id: { $oid: "66eb315e3a62bf290ffc373f" },
    title: "Excel Mastery: From Basics to Advanced",
    description:
      "Master the art of Excel, from fundamental techniques to advanced functionalities. Learn how to create complex formulas, build dynamic reports, and analyze data efficiently. This course will equip you with the skills to streamline workflows and make data-driven decisions.",
    imgSrc: "/images/circular-circuit-board-on-display.webp",
    tag: "Data Analysis and Visualization",
    details: [
      "Learn essential formulas and complex Excel functions efficiently.",
      "Master data analysis techniques for improved decision-making.",
      "Automate tasks to streamline workflows and boost productivity.",
      "Gain skills for finance, data management, and business analytics.",
    ],
    duration: "12 Weeks",
    chapters: [
      {
        chapterName: "Introduction to Excel",
        chapterLists: ["Introduction to Excel", "Syntax of Excel"],
      },
      {
        chapterName: "Basic Operations",
        chapterLists: ["Excel Fill", "Move Cell", "Add Cell", "Delete Cell"],
      },
      {
        chapterName: "Formulas and References",
        chapterLists: [
          "Excel Formula",
          "Reference: Relative Reference, Absolute Reference",
          "Arithmetic Operators",
          "Parentheses",
        ],
      },
      {
        chapterName: "Functions",
        chapterLists: [
          "Excel Function",
          "Logical Functions",
          "Text Functions",
          "Date and Time Functions",
          "Lookup and Reference Functions",
          "Mathematical Functions",
          "Statistical Functions",
          "Information Functions",
        ],
      },
      {
        chapterName: "Formatting and Styling",
        chapterLists: [
          "Formatting: Painter, Color, Fonts, Border, Number, Grid, Setting",
        ],
      },
      {
        chapterName: "Data Analysis and Visualization",
        chapterLists: [
          "Excel Analysis: Sort, Filter, Table, Conditional Formatting, Cells Rules, Top/Bottom Rules, Data Bars, Color Scales, Icon Sets, Manage Rules",
          "Charts",
          "Pivot Table",
          "Pivot Chart",
        ],
      },
      {
        chapterName: "Advanced Topics",
        chapterLists: [
          "Case Study: Poke Mart, Styling",
          "Convert: Convert Time to Seconds, Remove Duplicate",
        ],
      },
      {
        chapterName: "Dashboards and Macros",
        chapterLists: [
          "Visualization: Data Validation, KPI Chart, Mini Dashboard, Dashboard, Macros",
        ],
      },
    ],
  };

  const whatWillYouGet = [
    "Convenient Payment Options",
    "Interactive Learning",
    "Dedicated Instructor Support",
    "Get on demand recordings",
    "Networking Opportunities",
    "24/7 Dedicated Email Support",
    "Best-in-Class Pricing",
    "Certificate of Completion",
  ];

  const { id } = params;

  const Chapter = ({ chNumber, chName }) => {
    return (
      <div className={styles.chapterNameContainer}>
        <h3>
          Chapter {chNumber + 1} - {chName}
        </h3>
        <p>Module {chNumber + 1}</p>
      </div>
    );
  };

  return (
    <div className={styles.mainPage}>
      <div
        className={styles.heroContainer}
        style={{
          background: `linear-gradient(to right, #0c0c0c 40%, #ffffff00 100%), url(${courseDetails.imgSrc})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className={styles.textContainer}>
          <h1>{courseDetails.title}</h1>
          <p>{courseDetails.description}</p>

          {/* Course Features */}

          <div className={styles.courseFeatures}>
            <div className={styles.featue}>
              <div className={styles.featureIcon}>
                <FiLayers />
              </div>
              <p>{courseDetails.chapters.length} Chapters</p>
            </div>
            <div className={styles.featue}>
              <div className={styles.featureIcon}>
                <IoVideocamOutline />
              </div>
              <p>Duration: {courseDetails.duration}</p>
            </div>
            <div className={styles.featue}>
              <div className={styles.featureIcon}>
                <IoLanguage />
              </div>
              <p>Hindi and English</p>
            </div>
          </div>

          {/* CTA Buttons */}

          <div className={styles.btnContainer}>
            <button>Join Now</button>
            <button>See Curriculum</button>
          </div>
        </div>
      </div>

      <div className={styles.highlights}>
        <Highlights />
      </div>

      <div className={styles.curriculum}>
        <div className={styles.chapterSection}>
          {courseDetails.chapters.map((chapter, index) => {
            return (
              <Chapter
                key={index}
                chName={chapter.chapterName}
                chNumber={index}
              />
            );
          })}
        </div>

        <div className={styles.courseHighlights}>
          <div
            className={styles.highlightImage}
            style={{
              background: `linear-gradient(to right, #0c0c0cc2 40%,#0c0c0cc2 100%), url(${courseDetails.imgSrc})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {courseDetails.title}
          </div>

          <button>Join Now</button>

          <div className={styles.courseFeatures}>
            <div className={styles.featue}>
              <div className={styles.featureIcon}>
                <FiLayers />
              </div>
              <p>{courseDetails.chapters.length} Chapters</p>
            </div>
            <div className={styles.featue}>
              <div className={styles.featureIcon}>
                <IoVideocamOutline />
              </div>
              <p>Duration: {courseDetails.duration}</p>
            </div>
          </div>

          <div className={styles.features}>
            <p>What will you get</p>
            {whatWillYouGet.map((featureName, index) => {
              return (
                <div className={styles.whatToGet} key={index}>
                  <div className={styles.featureNameIcon}>
                    <TiTick />
                  </div>
                  <p>{featureName}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Add Testimonials Section */}

      <Certificate />

      <FAQs />

      <div className={styles.cardsContainer}>
        <MegaCourseContent
          key={courseDetails._id}
          tag={courseDetails.tag}
          title={courseDetails.title}
          imgSrc={courseDetails.imgSrc}
          description={courseDetails.description}
          details={courseDetails.details}
          join={true}
        />
      </div>

      <Footer />
    </div>
  );
};

export default page;
