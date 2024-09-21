import styles from "./FAQs.module.css";

const FAQs = () => {
  const frequentlyAskedQuestions = [
    {
      question: "How do I enroll in a course?",
      answer: `To enroll in a course, simply navigate to the course page you're interested in and click the "Join Now" button. You’ll be guided through the payment process, and once completed, you'll receive immediate access to the course materials.`,
    },
    {
      question: "Are the courses self-paced, or do they have a set schedule?",
      answer: `Most of our courses are self-paced, allowing you to learn at your own convenience. However, some courses may include scheduled live sessions or deadlines for assignments, which will be clearly indicated on the course page.`,
    },
    {
      question: "Do I receive a certificate upon completing a course?",
      answer: `Yes, upon successfully completing the course, you will receive a Certificate of Completion that you can add to your resume, LinkedIn profile, or share with your employer to showcase your new skills.`,
    },
    {
      question: "What kind of support is available during a course?",
      answer: `We provide dedicated instructor support throughout your course. You can ask questions via email, participate in live Q&A sessions, or access 24/7 support via chat or discussion forums to ensure you stay on track.`,
    },
    {
      question:
        "Can I access the course materials after I complete the course?",
      answer: `Yes, once you enroll in a course, you have lifetime access to all the course materials. This allows you to revisit the content whenever needed, even after you've completed the course.`,
    },
  ];

  return (
    <div className={styles.faqContainer}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.faqs}>
        {frequentlyAskedQuestions.map((faq, index) => {
          return (
            <div className={styles.faq}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQs;
