import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".zuplae",
  `Grade: 61.4 %`,
  "National Institute of Open Schooling (NIOS)",
  "Gorakhpur, Uttar Pradesh",
  "2019 - 2020"
);

hoverChangeExperience(
  ".contweb",
  `Grade: 62.4 %`,
  "Kendriya Vidyalaya No.-2 FCI Campus",
  "Gorakhpur, Uttar Pradesh",
  "2017 - 2018"
);



hoverChangeExperience(
  ".digitalhouse",
    `B.Tech in Electronics & Communication Engineering
    
    CGPA: 7/10`,
  "Buddha Institute of Technology",
  "Gorakhpur, Uttar Pradesh",
  "2020 - 2024"
);

hoverChangeDescription(
  ".html",
  "HTML is a combination of Hypertext and Markup language. Hypertext defines the link between web pages. A markup language is used to define the text document within the tag which defines the structure of web pages. "
);
hoverChangeDescription(
  ".css",
  "CSS is a style sheet language made up of \"layers\", created for\n" +
    "the purpose of styling pages.CSS is used along with HTML and JavaScript in most websites to create user interfaces for web applications and user interfaces for many mobile applications."
);
hoverChangeDescription(
  ".js",
  "JavaScript is a scripting language, a lightweight programming language commonly used by web developers to add dynamic interactions to web pages, applications, servers, and even games."
);

hoverChangeDescription(
  ".react",
  "React is a framework that employs Webpack to automatically compile React, JSX, and ES6 code while handling CSS file prefixes. React is a JavaScript-based UI development library."
);
hoverChangeDescription(
  ".bootstrap",
  "Bootstrap is a free, open source front-end development framework for the creation of websites and web apps.Bootstrap utilizes Sass for a modular and customizable architecture."
);
hoverChangeDescription(
  ".java",
  "Java is a high-level, class-based, object-oriented programming language.Java is used to develop mobile apps, web apps, desktop apps, games and much more."
);
hoverChangeDescription(
  ".android",
  "Android Studio provides a complete IDE, including an advanced code editor and app templates. It also contains tools for development, debugging, testing, and performance that make it faster and easier to develop apps."
);
hoverChangeDescription(
  ".version-control",
  "Git is a distributed version control system that enables software development teams to have multiple local copies of the project's codebase independent of each other."
);
hoverChangeDescription(
  ".iot",
  "The Internet of Things (IoT) describes the network of physical objects—“things”—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the internet."
);

