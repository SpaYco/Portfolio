interface Project {
  name: string;
  link: string;
  description: string;
  liveDemo: string;
  stacks: string[];
  image: string;
}

const projectsList: Project[] = [
  {
    name: "BetterBase",
    link: "https://github.com/SpaYco/BetterBase",
    description:
      "A web page that can take JSON files (mainly from MetaBase), and render them in a table, where you can filter, sort, and do many other things without needing to fetch from the server again, or to write queries.",
    liveDemo: "https://betterbase.netlify.app/",
    stacks: ["JavaScript", "React", "Redux/RTK", "VSCode", "Ant Design"],
    image:
      "https://github.com/SpaYco/BetterBase/raw/main/screenshot.png",
  },
  {
    name: "UB Running",
    link: "https://github.com/Spayco/UB-Running",
    description:
      "A Platform game made with JavaScript using the Phaser framework",
    liveDemo: "https://ub-running.netlify.app/",
    stacks: ["HTML", "SASS/CSS", "JavaScript", "WebPack", "Babel", "Phaser"],
    image:
      "https://github.com/SpaYco/UB-Running/raw/master/screenshot2.png",
  },
  {
    name: "GTime",
    link: "https://github.com/Spayco/gtime-frontend",
    description:
      "This is the front-end of a website that tracks your game stats, so you can see how much you are improving. Built with JavaScript. (The link to the back-end API can be found in the GitHub repo)",
    liveDemo: "https://gtime.netlify.app/",
    stacks: ["HTML", "CSS", "JavaScript", "React", "redux", "Jest", "API"],
    image:
      "https://github.com/Spayco/gtime-frontend/raw/development/screenshot.png",
  },
  {
    name: "Weather App",
    link: "https://github.com/Spayco/Weather-App",
    description:
      "This is a responsive weather app made with JavaScript that displays the temperature, humidity and timezone for cities around the world.",
    liveDemo: "https://nostalgic-ardinghelli-b51cf2.netlify.app/",
    stacks: ["HTML", "SASS/CSS", "JavaScript", "WebPack", "Babel"],
    image:
      "https://github.com/Spayco/Weather-App/raw/developement/screenshot.png",
  },
  {
    name: "Conference Page",
    link: "https://github.com/Spayco/Conference-page",
    description: "This is a sample conference page made using HTML and CSS.",
    liveDemo: "https://raw.githack.com/Spayco/Conference-page/beta/index.html",
    stacks: ["HTML", "CSS", "SASS"],
    image:
      "https://github.com/Spayco/Conference-page/raw/master/screenshot.png",
  },
  {
    name: "Katchy",
    link: "https://github.com/Spayco/katchy",
    description: "This is a website for recipes made with Ruby on Rails",
    liveDemo: "https://hidden-fjord-31358.herokuapp.com/",
    stacks: ["Ruby", "Ruby on Rails", "HTML", "CSS", "ERB", "RSPec"],
    image:
      "https://github.com/Spayco/katchy/raw/developement/screenshot.PNG",
  },
];

export default projectsList;
