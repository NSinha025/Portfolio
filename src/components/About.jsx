import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard =({index, title, icon, details}) =>{
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          <p className="text-secondary text-sm text-center">{details}</p>

        </div>

      </motion.div>

    </Tilt>
  )

}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >About</p>
        <h2 className={styles.sectionHeadText}
        >Me</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]"
      >
        Hi there. I'm a passionate and versatile developer who has experimented with various domains and languages all through college. I have developed various web development projects using MERN stack and have a strong hold over AI/ML. My top languages include Python, Javascript, C/C++, and Java. Additionally, I have also worked with SQL and NoSQL databases to develop fullstack websites. I hope you like my portfolio and look forward to working with you on your next project!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) =>(
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")