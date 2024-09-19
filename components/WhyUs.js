import styles from "./WhyUs.module.css";
import Image from "next/image";
import graph from "@/public/images/3d-graph.png";
import WhyUsCard from "./WhyUsCard";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineBookmark } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { SiAlwaysdata } from "react-icons/si";

const WhyUs = () => {
  return (
    <div className={styles.whyContainer}>
      <div className={styles.leftImg}>
        <Image src={graph} />
      </div>

      <div className={styles.rightText}>
        <WhyUsCard
          icon={<GrTechnology />}
          title="GOVERNMENT RECOGNIZED"
          description="All our courses are recognized by major certitifying Global & Government agencies such as NSDC-Skill India, ISO, NIELIT, Microsoft, Certiport & Google."
        />

        <WhyUsCard
          icon={<MdOutlineBookmark />}
          title="MICROSOFT AUTHORIZED"
          description="MS Tech Campus is Authorized by Certiport, to conduct Microsoft and Adobe global certification exams and to provide training related to such exams."
        />

        <WhyUsCard
          icon={<FaHeart />}
          title="ISO 9001:2015 CERTIFIED"
          description="Our training methodology & quality standards are certified by ISO 9001:2015 accreditation by USAC LLC, Miami, Florida, USA."
        />

        <WhyUsCard
          icon={<SiAlwaysdata />}
          title="ONLINE & OFFLINE"
          description="We have both the options for you to choose from - Classroom Training OR Online classes with LIVE trainers. For classroom training we have centers all over Mumbai."
        />
      </div>
    </div>
  );
};

export default WhyUs;
