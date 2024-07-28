import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className='xs:w-[250px] w-full'>
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full bg-gradient-to-r from-blue-500 to-wh p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    options={{ max: 45, scale: 1, speed: 450 }}
                    className="bg-white dark:bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img src={icon} alt={title} className="w-16 h-16 object-contain transition-all duration-300 dark:filter-none filter grayscale" />
                    <h3 className="text-black dark:text-white text-[20px] font-bold text-center">
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
}

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-6 text-white-100 dark:text-secondary text-[17px] max-w-7xl leading-[30px]"
            >
                As a hardworking and enthusiastic computer science student, I am driven by a passion for tackling challenging problems and finding innovative solutions.
                My interests in data science, AI, and machine learning are the driving forces behind my career aspirations, and I am excited to apply my skills and knowledge in these fields to make a positive impact.
                I am always eager to learn new things and take on new challenges, whether it's exploring the latest trends in technology or taking on a new project. I believe that my strong work ethic and dedication to excellence will serve me well as I pursue my goals, creating solutions that change life for the good of humanity whilst creating value.
                If you're looking for someone who is passionate, committed, and eager to take on new challenges, I would love to connect with you. Let's work together to make the most of the exciting opportunities in the world of data science, AI, and machine learning.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
}

export default SectionWrapper(About, "about");
