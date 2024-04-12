import bgImage from "./assets/images/bgImage.jpg"
import rideSharingImage from './assets/images/rideSharing.png'
const logotext = "YH";
const meta = {
    title: "Yan Hu",
    description: "I’m Yan Hu, Full stack devloper,currently working in LA",
};

const introdata = {
    title: "I’m Yan Hu",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
    },
    description: "Full Stack Dev with a Passion for Problem-Solving | Node JS, Python, React, Data Analytics | Experienced Product Manager & Entrepreneur",
    your_img: bgImage,
};

const dataabout = {
    title: "about me",
    aboutme: "Hi there! I'm pursuing a Node.js | React full-stack dev role to create innovative products. My career path has been diverse - with over a decade working in both startups and mature companies as a product lead, followed by the most recent 5 years as an entrepreneur, where I have built a thriving business from scratch, to now where I’m keenly focused on pursuing a full stack developer role.",
};
const worktimeline = [{
        jobtitle: "Full Stack Developer",
        where: "Self Employed",
        date: "2017 - Present",
    },
    {
        jobtitle: "Owner/Operator",
        where: "Snip-its Kids Hair Salon",
        date: "2016 - Present",
    },
    {
        jobtitle: "Senior Product Manager",
        where: "RentPath/Lovely",
        date: "2014 - 2016",
    },
    {
        jobtitle: "Director of Ecommerce",
        where: "JustFab",
        date: "2012 - 2013",
    },
    {
        jobtitle: "Senior Product Manager",
        where: "Hautelook, A Nordstrom Company",
        date: "2011 - 2012",
    },
    {
        jobtitle: "Product Manager",
        where: "Live Nation Entertainment",
        date: "2006 - 2011",
    },
];

const skills = [{
        name: "Laungage:",
        value: "Node JS, Python, Typescript, HTML, CSS",
    },
    {
        name: "APIs/Libraries:",
        value: "React, Bootstrap, Firebase, Twilio Programmable Voice, Twilio SMS, Alexa API, OpenAI API",
    },
    {
        name: "Design Tools",
        value: "Figma, Photoshoop, Canva",
    },
    {
        name: "Dev Ops",
        value: "Git, Heroku, VS Code",
    },
    {
        name: "Others",
        value: "Slack, Jira, Trello, Kanban, Scrum",
    },
];
const dataportfolio = [{
    img: rideSharingImage,
    description: "xxxxxx",
    link: "",
}]
// const dataportfolio = [{
//         img: "https://picsum.photos/400/?grayscale",
//         description: "The wisdom of life consists in the elimination of non-essentials.",
//         link: "#",
//     },
//     {
//         img: "https://picsum.photos/400/800/?grayscale",
//         description: "The wisdom of life consists in the elimination of non-essentials.",
//         link: "#",
//     },
//     {
//         img: "https://picsum.photos/400/?grayscale",
//         description: "The wisdom of life consists in the elimination of non-essentials.",
//         link: "#",
//     },
//     {
//         img: "https://picsum.photos/400/600/?grayscale",
//         description: "The wisdom of life consists in the elimination of non-essentials.",
//         link: "#",
//     },
//     {
//         img: "https://picsum.photos/400/300/?grayscale",
//         description: "The wisdom of life consists in the elimination of non-essentials.",
//         link: "#",
//     },
//     {
//         img: "https://picsum.photos/400/700/?grayscale",
//         description: "The wisdom of life consists in the elimination of non-essentials.",
//         link: "#",
//     },

//     {
//         img: "https://picsum.photos/400/600/?grayscale",
//         description: "The wisdom of life consists in the elimination of non-essentials.",
//         link: "#",
//     },
//     {
//         img: "https://picsum.photos/400/300/?grayscale",
//         description: "The wisdom of life consists in the elimination of non-essentials.",
//         link: "#",
//     },
//     {
//         img: "https://picsum.photos/400/?grayscale",
//         description: "The wisdom of life consists in the elimination of non-essentials.",
//         link: "#",
//     },
//     {
//         img: "https://picsum.photos/400/550/?grayscale",
//         description: "The wisdom of life consists in the elimination of non-essentials.",
//         link: "#",
//     },
//     {
//         img: "https://picsum.photos/400/?grayscale",
//         description: "The wisdom of life consists in the elimination of non-essentials.",
//         link: "#",
//     },
//     {
//         img: "https://picsum.photos/400/700/?grayscale",
//         description: "The wisdom of life consists in the elimination of non-essentials.",
//         link: "#",
//     },
// ];

const contactConfig = {
    YOUR_EMAIL: "ibuildcoolthings@gmail.com",
    YOUR_FONE: "(310)876-9607",
    description: "I would love to connect with you",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/yanhackcode15",
    linkedin: "https://linkedin.com/in/yanhu1",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};