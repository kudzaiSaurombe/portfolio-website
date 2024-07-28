import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };
//
//
//
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                'service_sag9its',
                'template_txrp48h',
                {
                    from_name: form.name,
                    to_name: "Kudzai Saurombe",
                    from_email: form.email,
                    to_email: "remasterd06@gmail.com",
                    message: form.message,
                },
                'iwEYQU-AH6vLqgmC3'
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thanks, I will get back to you as soon :) .");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ooops, Something went wrong. Please try again.");
                }
            );
    };

    return (
        <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='flex-[0.75] bg-white dark:bg-black-100 p-8 rounded-2xl'
            >
                <p className={`${styles.sectionSubText} text-black dark:text-white`}>Get in touch</p>
                <h3 className={`${styles.sectionHeadText} text-black-100 dark:text-white`}>Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-8'
                >
                    <label className='flex flex-col'>
                        <span className='text-black dark:text-white font-medium mb-4'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className='bg-gray-100 dark:bg-tertiary py-4 px-6 placeholder:text-gray-500 dark:placeholder:text-secondary text-black dark:text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-black dark:text-white font-medium mb-4'>Your email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your web address?"
                            className='bg-gray-100 dark:bg-tertiary py-4 px-6 placeholder:text-gray-500 dark:placeholder:text-secondary text-black dark:text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-black dark:text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What you want to say?'
                            className='bg-gray-100 dark:bg-tertiary py-4 px-6 placeholder:text-gray-500 dark:placeholder:text-secondary text-black dark:text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>

                    <button
                        type='submit'
                        className='bg-gray-300 dark:bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-black dark:text-white font-bold shadow-md shadow-primary'
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
