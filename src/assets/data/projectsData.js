import currencyConverter from "../projectImages/currencyConverter.png";
import foodApp from "../projectImages/foodApp.png";
import hobbit from "../projectImages/hobbit.png";
import lazyDevs from "../projectImages/lazyDevs.png";
import todos from "../projectImages/todoApp.png";
import meditation from "../projectImages/meditation.png";
import pig from "../projectImages/pig.png";
import guess from "../projectImages/guess.png";
import adminDashboard from "../projectImages/adminDashboard.png";
export const PROJECTS = [
  {
    id: 0,
    name: "Lazy Dev's",
    description: {
      technologies: "html, css, javaScript, ReactJS, nodeJS, expressJS",
      description:
        "Team project i have created with my colleges. It is an authentication tool for developers. It will create for you all the authentication backend and front-end forms that are necessary for a user to log in, register, and log out from your website.",
    },
    githubLink: "https://github.com/urieskenasy/LAZY-DEVS",
    live: "https://lazydevs.onrender.com/",
    img: lazyDevs,
  },
  {
    id: 1,
    name: "MUI Business Dashboard",
    description: {
      technologies: "Nivo, Material UI, React Date Picker, Redux Toolkit, Redux Toolkit Query, MongoDB, nodeJS, expressJS, ReactJS",
      description:
        "This is a mock business dashboard application. I created this application for businesses to track their sales, products, employees, and customers. The app contains charts, tables, and a map to provide a simple way for tracking business charts. The data that is in use in this demo app is a mock DB I created, just to demonstrate the business data I would probably use in a none demo application. This application can be applied for any type of business. Please feel free to check out the live version.",
    },
    githubLink: "https://github.com/urieskenasy/mui-business-dashboard",
    live: "https://uri-mui-business-dashboard.onrender.com/",
    img: adminDashboard,
  },
  {
    id: 2,
    name: "Hobbit",
    description: {
      technologies: "html, css, javaScript, ReactJS, fireBase, nodeJS, socket.IO", 
      description:
        "Team project i have created with my colleges. It is a small social media for people to meet each-other according to their shared hobbies. You will be able to sign up and share your hobbies. On the main dashboard you will only see people who share with you the same hobbies. You have the option to chat with them, get to know them and hopefully become friends 🤙",
    },
    githubLink: "https://github.com/urieskenasy/HOBBIT",
    live: "https://hobbit-xi.vercel.app/",
    img: hobbit,
  },
  {
    id: 3,
    name: "The Recipe center",
    description: {
      technologies: "html, css, javaScript, ReactJS, Axios, styledComponents",
      description:
        "A project I created using open-source api, javascript and React. The app gives you the access to thousands of recipes. You will be able to search according to deferent cousins. In each recipe you will have a full description of the dish.",
    },
    githubLink: "https://github.com/urieskenasy/deliciuss-app",
    live: "https://delicius-food-czd2000ex-urieskenasy.vercel.app/",
    img: foodApp,
  },
  {
    id: 4,
    name: "Currency Converter",
    description: {
      technologies: "html, css, javaScript, ReactJS",
      description:
        "Team project i have created with my colleges. It is an authentication tool for developers. It will create for you all the authentication backend and front-end forms that are necessary for a user to log in, register, and log out from your website.",
    },

    githubLink:
      "https://github.com/urieskenasy/curreny-converter/settings/pages",
    live: "https://urieskenasy.github.io/curreny-converter/",
    img: currencyConverter,
  },
  {
    id: 5,
    name: "To-Do's",
    description: {
      technologies: "html, css, javaScript, ReactJS",
      description:
        "A app i created that gives you an option to create a to-do list. you will be able to group your todo's, edit, delete or mark as done.",
    },
    githubLink: "https://github.com/urieskenasy/todos-mini-app",
    live: "https://urieskenasy.github.io/todos-mini-app/",
    img: todos,
  },
  {
    id: 6,
    name: "Meditation App",
    description: {
      technologies: "Javascript, Css, and HTML",
      description:
        "A simple small app i created using vanilla javascript. User can change the duration time and also change the background theme, from rainy cozy day to the waves on the beach.",
    },
    githubLink: "https://github.com/urieskenasy/meditation-mini-app",
    live: "https://meditation-uris.netlify.app/",
    img: meditation,
  },
  {
    id: 7,
    name: "Pig Game",
    description: {
      technologies: "Javascript, Css, and HTML",
      description:
        "A simple small game I created. Users can play in pairs, each player gets his turn to roll the dice, once a player is satisfied with his score he clicks on hold to hold hid score, then the next play gets to play. The one who gets first to 18 is the winner!",
    },
    githubLink: "https://github.com/urieskenasy/pig-game",
    live: "https://pig-game-uri.netlify.app/",
    img: pig,
  },
  {
    id: 8,
    name: "Guess My Number",
    description: {
      technologies: "Javascript, Css, and HTML",
      description:
        "A simple small game I created. Users can guess the given number. when the user submits his guess he will get clues about whether he should go higher with his guess or lower.",
    },
    githubLink: "https://github.com/urieskenasy/Guess-My-Number",
    live: "https://guess-my-number-uri.netlify.app/",
    img: guess,
  },
  
];
