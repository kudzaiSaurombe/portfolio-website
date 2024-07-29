import React, { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
});

const Contact = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        setLoading(true);
        emailjs
            .send(
                "service_sag9its",
                "template_txrp48h",
                {
                    from_name: values.name,
                    to_name: "Kudzai Saurombe",
                    from_email: values.email,
                    to_email: "remasterd06@gmail.com",
                    message: values.message,
                },
                "iwEYQU-AH6vLqgmC3"
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thanks, I will get back to you soon :).");
                    resetForm();
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    alert("Oops, something went wrong. Please try again.");
                }
            )
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (
        <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-white dark:bg-black-100 p-8 rounded-2xl"
            >
                <p className={`${styles.sectionSubText} text-black dark:text-white`}>Get in touch</p>
                <h3 className={`${styles.sectionHeadText2} text-black-100 dark:text-white`}>Contact.</h3>

                <Formik
                    initialValues={{ name: "", email: "", message: "" }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, errors, touched }) => (
                        <Form className="mt-12 flex flex-col gap-8">
                            <label className="flex flex-col">
                                <span className="text-black dark:text-white font-medium mb-4">Your Name</span>
                                <Field
                                    type="text"
                                    name="name"
                                    placeholder="What's your name?"
                                    className={`bg-gray-100 dark:bg-tertiary py-4 px-6 placeholder:text-gray-500 dark:placeholder:text-secondary text-black dark:text-white rounded-lg outline-none border-none font-medium ${
                                        errors.name && touched.name ? "border-red-500 border-2" : ""
                                    }`}
                                />
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </label>
                            <label className="flex flex-col">
                                <span className="text-black dark:text-white font-medium mb-4">Your email</span>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="What's your web address?"
                                    className={`bg-gray-100 dark:bg-tertiary py-4 px-6 placeholder:text-gray-500 dark:placeholder:text-secondary text-black dark:text-white rounded-lg outline-none border-none font-medium ${
                                        errors.email && touched.email ? "border-red-500 border-2" : ""
                                    }`}
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </label>
                            <label className="flex flex-col">
                                <span className="text-black dark:text-white font-medium mb-4">Your Message</span>
                                <Field
                                    as="textarea"
                                    rows={7}
                                    name="message"
                                    placeholder="What you want to say?"
                                    className={`bg-gray-100 dark:bg-tertiary py-4 px-6 placeholder:text-gray-500 dark:placeholder:text-secondary text-black dark:text-white rounded-lg outline-none border-none font-medium ${
                                        errors.message && touched.message ? "border-red-500 border-2" : ""
                                    }`}
                                />
                                <ErrorMessage
                                    name="message"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </label>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`bg-gray-300 dark:bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-black dark:text-white font-bold shadow-md shadow-primary ${
                                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            >
                                {loading ? "Sending..." : "Send"}
                            </button>
                        </Form>
                    )}
                </Formik>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");