import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant} from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  const subtitle = [designation, company].filter(Boolean).join(" • ");

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      {/* wrapper isi: kolom penuh agar footer nempel bawah */}
      <div className="flex flex-col h-full">
        <p className="text-white font-black text-[48px] leading-none">“</p>

        {/* konten utama dibuat flex-1 supaya mendorong footer */}
        <div className="mt-2 flex-1">
          <p className="text-white tracking-wider text-[18px] leading-relaxed">
            {testimonial}
          </p>
        </div>

        {/* footer (nama + avatar) akan selalu di bawah */}
        <div className="mt-7 flex justify-between items-center gap-3">
          <div className="flex-1 flex flex-col min-w-0">
            <p className="text-white font-medium text-[16px] truncate">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px] truncate">
              {subtitle}
            </p>
          </div>

          {/* <img
            src={image}
            alt={`feedback-by-${name}`}
            className="w-10 h-10 rounded-full object-cover shrink-0"
          /> */}
        </div>
      </div>
    </motion.div>
  );
};



const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding}
      bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonial</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
          key={testimonial.name}
          index={index}
          {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")