import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    java,
    html,
    css,
    reactjs,
    cpp,
    tailwind,
    nodejs,
    git,
    carrent,
    dynamicprogramming,
    stockpredict,
    goonmart,
    logisticregression,
    threejs,
    sql,
    wits,
    python,
    qyf,
    wds,
    dik,
} from "../assets";
export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },

];
const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Data Scientist",
        icon: creator,
    },
];
const technologies = [
    {
        name: "c++",
        icon: cpp,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "python",
        icon: python,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "mySQL",
        icon: sql,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },


];
const experiences = [
    {
        title: "Math & Computer Science Tutor",
        company_name: "Dikanwa Tutors",
        icon: dik,
        iconBg: "#383E56",
        date: "Nov 2020 - Present",
        points: [
            "Provision of academic support to high school students across Cambridge A-Levels, Cambridge O-Levels, International Baccalaureate and other international examination boards.",
            "Mathematics tutor, ranging from primary school to first year university Algebra and Calculus.",
            "Computer Science tutor, ranging from primary school to first and even second year Computer Science.",

        ],
    },
    {
        title: "Data Science Intern",
        company_name: "QuantifyYourFuture Virtual Internship",
        icon: qyf,
        iconBg: "#ffffff",
        date: "Jan 2023 - Feb 2023",
        points: [
            "Exposure to real-life work experience with FirstRand, Absa, and Nedbank.",
            "Exposure to data: framing, exploration, interpretation, modelling, and visualization.",
            "Development of core skills: critical thinking, creativity, collaboration & communication.",
            "Team-based projects facilitated by FirstRand, Absa, and Nedbank.",
        ],
    },
    {
        title: "Company Partnerships and Events Team Member",
        company_name: "Wits Developer Society",
        icon: wds,
        iconBg: "#0a143d",
        date: "Feb 2023 - Preset",
        points: [
            "Maintain relationships with partnered companies.",
            "Planning of society events and making arrangements with partner companies.",
        ],
    },
    {
        title: "University of the Witwatersrand student tutor",
        company_name: "University of the Witwatersrand ",
        icon: wits,
        iconBg: "#ffffff",
        date: "March 2023 - Present",
        points: [
            "Provision of academic support to First year students .",
            "Introduction to Algorithms and programming tutor, tutoring python and C++ programming to first year students.",
            "Basic Computer Organisation tutor, tutoring theory of computer logic and functioning.",
            "Discrete Computational structures tutor, tutor of complex theory of computing.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Lab assistance, assessment invigilation and marking.",
        ],
    },
];

const projects = [
    {
        name: "Employee retention",
        description:
            "An Analysis of Employee Retention Using Regression Techniques.",
        tags: [
            {
                name: "pandas",
                color: "blue-text-gradient",
            },
            {
                name: "sklearn",
                color: "green-text-gradient",
            },
            {
                name: "matplotlib",
                color: "pink-text-gradient",
            },
            {
                name: "jupyter",
                color: "blue-text-gradient",
            },
        ],
        image: logisticregression,
        source_code_link: "https://github.com/kudzaiSaurombe06/Company-retention-logistic-regression",
    },
    {
        name: "Stock price Predictor",
        description:
            "A data project using an LSTM to predict the closing stock price for AAPL from historical stock price data of Apple Inc. using the yfinance library.",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "Keras",
                color: "green-text-gradient",
            },
            {
                name: "pandas",
                color: "pink-text-gradient",
            },
            {
                name: "jupyter",
                color: "blue-text-gradient",
            },
        ],
        image: stockpredict,
        source_code_link: "https://github.com/kudzaiSaurombe06/AAPL-LSTM-Predictor/tree/main",
    },
    {
        name: "ecommerce web app",
        description:
            "Web application that enables users to shop various products online.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "JS",
                color: "green-text-gradient",
            },
            {
                name: "Firebase",
                color: "pink-text-gradient",
            },
        ],
        image: goonmart,
        source_code_link: "https://github.com/GoonMart-Goons/GoonMart-Online-Store",
    },
    {
        name: "Dynamic Programming learning tool",
        description:
            "A dynamic programming web application that can be used by students who want to learn and practice the dynamic programming algorithms with unlimited questions and ability to keep their progress.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: dynamicprogramming,
        source_code_link: "https://github.com/GoonMart-Goons/Dynamic-Programming-Tool",
    },
];
export { services, technologies, experiences, projects };