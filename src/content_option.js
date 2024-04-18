import { Link } from "react-router-dom";

import bgImage from "./assets/images/bgImage.jpg"
import rideSharingImage from './assets/images/rideSharing.png'
import eshopImage from './assets/images/eshop.png'
import eCommPaypal from './assets/images/eCommercePaypal.png'
import knockJokesImage from './assets/images/knockJokes.png'
import pathFindGameVideo from './assets/videos/pathfindergame.mp4'
const logotext = "YH";
const knockJokesPH = "3103560131"
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
const dataportfolio = [
    {
        img: rideSharingImage,
        title: "Ride Sharing App - Ridely",
        overview: "As a passionate full-stack developer, I designed and implemented a ride-sharing application akin to Uber, aiming to showcase my proficiency in modern web technologies and application development. This project serves as a cornerstone of my portfolio, demonstrating my ability to develop a comprehensive, user-friendly service from the ground up. It features real-time location tracking, dynamic pricing algorithms, and an intuitive user interface for both riders and drivers. Through this application, I've applied my skills in React.js for the frontend, Node.js and Express for the backend, with MongoDB for data management, and integrated Google Cloud Platform for deployment.",
        learnings: ["Rapidly Time to Market: built and launched a MVP full stack app with multiple microservices within days, utilizing AI as the coding coach.", "Gained proficiency in a wide array of technologies across the development spectrum, from front-end to back-end, AI, and cloud services."],
        technologies: ["NodeJS", 'React', 'MongoDB', 'Google Cloud Platform', 'Kubernetes', 'Dockers', 'Jest', 'Supertest'],
        link: "http://www.yan-hu.com",
        button: "View App" 
    },
    {
        img: eshopImage,
        title: "E-commerce Demo Site - with Google User Auth",
        overview: "An eCommerce site using React front end, Express web server and Firebase user authentication. Through this project I intend to become more familiar with the use of various React hooks such as createContext, useContext, useState, useNavigate, useReducer, especially useReducer, for which I learned and used for the first time. There were a few other firsts: the use of CRA to set up the React app - In all my previous React projects, I’ve deliberately set up the project manually so I could be more exposed and become familiar with the dev ops side of things; the use of Material UI; the use of Firebase user authentication to name a few.",
        learnings: ["Built a full stack ecommerce app using React as the front end, utlizing REACT hooks such as useState, useEffect, useContext, useReducer hook. Backend using NodeJS, Express server, product catalog via an external API, user auth using Google Firebase Auth API, and styling using MUI."],
        technologies: ["NodeJS", 'React', 'JSON feed', 'Firebase Auth', 'MUI'],
        link: "https://yanhackcode15.github.io/eshop/",
        button: "View App" 


    },
    {
        img: eCommPaypal,
        title: "E-commerce Site with Paypal Integration",
        overview: "Product Browse Page, Cart Page, Confirmation page. Ability to add a product to favorite and cart from the product browse page. Ability to delete product from the cart page. *No backend (DB). Product cataloge via JSON feed.",
        learnings: ["React one page app, integration with third party API,React hooks - useEffect, useState"],
        technologies: ["NodeJS", 'React', 'JSON feed'],
        link: "https://yanhackcode15.github.io/react-ecommerce-app-v2",
        button: "View App" 


    },
    {
        img: knockJokesImage,
        title: "Knock Jokes App with Twilio Voice API",
        overview: "Call for a fun laughter with a knock joke with the jokebot",
        learnings: ["React one page app, integration with Twilio Voice API, React hooks - useEffect, useState"],
        technologies: ["NodeJS", 'React', 'Express', 'Twilio Voice API'],
        link: `tel: ${knockJokesPH}`,
        button: "Call For Jokes" 

    },
    {
        video: pathFindGameVideo,
        title: "Path Finder Game (A star)",
        overview: "Call for a fun laughter with a knock joke with the jokebot",
        learnings: ["A simple game build on Node, Express, p5.js. I started this as I was learning A* search algorithm which I stumbled upon solving codewar challenges. Found p5.js from codetrain youtube channel.  My kids are always curious about what I code so my project is only relevant to them if I make it into a game. So I added buttons and interactivity."],
        reference: () => (
            <span>Read more about A* search <a href="https://en.wikipedia.org/wiki/A*_search_algorithm" target="_blank" rel="noopener noreferrer">here</a></span>), 
        technologies: ["NodeJS", 'React', 'Express', 'p5.js', 'A star Search Algo'],
        link: "https://yanhackcode15.github.io/pathFinder/",
        button: "Start Game" 

    }  ]

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