// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1", // TODO: i think just one color lol (pink or blue or orange)
  firstName: "Anya",
  middleName: "",
  lastName: "Gu",
  message: "TechSis in Texas 👩🏻‍💻 ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/anyaguuu",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/anyagu/",
    },
    {
      image: "fa-youtube",
      url: "https://www.youtube.com/watch?v=EWsLKGUdUhk&ab_channel=RiceUniversity",
    },
    {
      image: "fas fa-star",
      url: "https://24.anyagu.com",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/anyagu.JPG"), // TODO: change
  imageSize: 375,
  message:
    "Hello! I'm Anya Gu, a junior at Rice University studying Computer Science and Mathematics.",
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
  gitHubUsername: "anyaguuu",
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
      🎉 I am the proud founder & President of the Rice University Ice Skating
      Club! ⛸️ Since its inception in 2021, our club has been making the holiday
      season extra special at Rice by hosting two popular Christmas events that
      have quickly become a cherished tradition among students. Check out the
      excitement and joy of our Christmas events{" "}
      <a href="https://www.youtube.com/watch?v=EWsLKGUdUhk&t=1s&ab_channel=RiceUniversity">
        here
      </a>
      . You can also explore the President's holiday card featuring the club{" "}
      <a href="https://www.youtube.com/watch?v=3LPQBcuSOSQ&ab_channel=RiceUniversity">
        here
      </a>
      ! Beyond spreading holiday cheer, our club is dedicated to promoting the
      love of ice skating. We organize ice skating clinics and offer engaging
      lessons for students, ensuring they can have a wonderful time on the ice
      and improve their skills. But that's not all! My passion for dance shines
      through as I am also an active member of Rice University's BASYK dance
      team.🎊
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
      img: require("../editable-stuff/competition.png"),
      // label: "Second slide label",
      size: {
        width: "400",
        height: "550",
      },
    },
    {
      img: require("../editable-stuff/img1.JPG"),
      label: "2022 Christmas Event!", // TODO: make prettier
      size: {
        width: "400",
        height: "550",
      },
    },
    {
      img: require("../editable-stuff/img2.jpg"),
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
  email: "anya.gu@ymail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Summer Analyst",
      companylogo: require("../assets/img/citi.png"),
      date: "June 2023 – Present",
    },
    {
      role: "Techcomm Tools Developer Co-op",
      companylogo: require("../assets/img/nokia.png"),
      date: "May 2022 – May 2023",
    },
    {
      role: "Technical Lead - OwlMart (coming soon!)",
      companylogo: require("../assets/img/riceapps.png"),
      date: "May 2023 - Present",
    },
    {
      role: "Team Developer - carpool.riceapps.org",
      companylogo: require("../assets/img/riceapps.png"),
      date: "Sept 2021 - Sept 2022",
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
