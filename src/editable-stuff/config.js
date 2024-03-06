// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1", // TODO: i think just one color lol (pink or blue or orange)
  firstName: "Jenna",
  middleName: "",
  lastName: "Gu",
  message: "Coding the Future 👩🏻‍💻 ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/jennaguu",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jenna-gu-738060124/",
    },
    {
      image: "fa-youtube",
      url: "https://www.youtube.com/watch?v=P_jzreiSOoA&ab_channel=CornellFigureSkating",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/jennagu.jpeg"), // TODO: change
  imageSize: 375,
  message:
    "Hello! I'm Jenna Gu, a junior at Cornell University studying Computer and Information Science.",
  resume: require("../editable-stuff/resume.pdf"),
  // "https://docs.google.com/document/d/16GQrBZ0vZKnIKoLpwZ7dt72i3PPGN3WqRv8AzasTkY8/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Passion Projects ⭐️",
  gitHubUsername: "jennaguu",
  reposLength: 5, // TODO: change this
  specificRepos: ["24", "pomodoro"],
};

// Leadership SECTION
// TODO: message include more about skating
// TODO: include links to skating vids

const leadership = {
  //TODO: change this
  show: true,
  heading: "Extracurriculars :)",
  message: (
    <p>
      🎉 Whatever you want to say here!!! Like about ice skating and TAing and
      everything <a href="https://www.google.com">here</a>
    </p>
  ),
  images: [
    // {
    //   img: require("../editable-stuff/anyagu.JPG"), // TODO: make this show up better
    //   // label: "First slide label",
    //   // paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    //   size: {
    //     width: "400",
    //     height: "550",
    //   },
    // },
    {
      img: require("../editable-stuff/jennagu.jpeg"),
      // label: "Second slide label",
      size: {
        width: "400",
        height: "550",
      },
    },
    {
      img: require("../editable-stuff/jennagu.jpeg"),
      label: "2022 Christmas Event!", // TODO: make prettier
      size: {
        width: "400",
        height: "550",
      },
    },
    {
      img: require("../editable-stuff/jennagu.jpeg"),
      // label: "Second slide label",
      size: {
        width: "400",
        height: "550",
      },
    },

    // {
    //   img: require("../editable-stuff/skating_logo.JPG"),
    //   size: {
    //     width: "400",
    //     height: "550",
    //   },
    // },
  ],
  imageSize: {
    width: "400",
    height: "550",
  },
};

// SKILLS SECTION
const skills = {
  // TODO:
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java /OOP", value: 90 }, // TODO: do i really want rankings like this?
    { name: "Python", value: 90 },
    { name: "Javascript", value: 90 },
    { name: "MongoDB", value: 80 },
    { name: "GraphQL", value: 75 },
    { name: "SQL", value: 60 },
    { name: "C", value: 65 },
    { name: "Spring Boot", value: 50 },
    { name: "React.js", value: 90 },
    { name: "Node.js", value: 80 },
    { name: "HTML/CSS", value: 80 },
    { name: "Robot/Gherkin", value: 90 },
  ],
  softSkills: [
    // TODO: get rid of this or change better
    // { name: "Goal-Oriented", value: 80 },
    // { name: "Collaboration", value: 90 },
    // { name: "Positivity", value: 75 },
    // { name: "Adaptability", value: 85 },
    // { name: "Problem Solving", value: 75 },
    // { name: "Empathy", value: 90 },
    // { name: "Organization", value: 70 },
    // { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "I'd love to get in touch!",
  message: "Email:",
  email: "jenna.gu@ymail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Software Engineer Intern Analyst",
      companylogo: require("../assets/img/verisk.png"),
      date: "June 2022 – Present",
    },
  ],
};

// Blog SECTION
const blog = {
  show: false,
};

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
