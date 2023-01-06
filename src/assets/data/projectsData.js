import currencyConverter from "../projectImages/currencyConverter.png";
import foodApp from "../projectImages/foodApp.png";
import hobbit from "../projectImages/hobbit.png";
import lazyDevs from "../projectImages/lazyDevs.png";
import todos from "../projectImages/todoApp.png";

export const PROJECTS = [
  {
    id: 0,
    name: "Lazy Dev's",
    description: {
      technologies: "html, css, javaScript, ReactJS, nodeJS, expressJS",
      description:
        "Team project i have created with my colleges. It is an authentication tool for developers. It will create for you all the authentication backend and front-end forms that are necessary for a user to log in, register, and log out from your website.",
    },
    githubLink: "https://github.com/Code-Generator-Sufaz/lazy-devs-v3",
    live: "https://lazydevs.onrender.com/",
    img: lazyDevs,
  },
  {
    id: 1,
    name: "Hobbit",
    description: {
      technologies: "html, css, javaScript, ReactJS, fireBase, nodeJS, socket.IO", 
      description:
        "Team project i have created with my colleges. It is a small social media for people to meet each-other according to their shared hobbies. You will be able to sign up and share your hobbies. On the main dashboard you will only see people who share with you the same hobbies. You have the option to chat with them, get to know them and hopefully become friends 🤙",
    },
    githubLink: "https://github.com/Fridabug/hobbit",
    live: "https://hobbit-xi.vercel.app/",
    img: hobbit,
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
];
