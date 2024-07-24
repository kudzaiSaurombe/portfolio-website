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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
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
        title: "Mobile Developer",
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
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];
export { services, technologies, experiences, projects };