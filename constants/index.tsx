import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as GrIcons from 'react-icons/gr';

export const IconData = [
  {
    text: 'JavaScript',
    Icon: SiIcons.SiJavascript,
    doc: 'https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript',
  },
  {
    text: 'TypeScript',
    Icon: SiIcons.SiTypescript,
    doc: 'https://www.typescriptlang.org/',
  },
  {
    text: 'React',
    Icon: FaIcons.FaReact,
    doc: 'https://pt-br.reactjs.org/docs/getting-started.html',
  },
  {
    text: 'Redux',
    Icon: SiIcons.SiRedux,
    doc: 'https://redux.js.org/',
  },
  {
    text: 'Next',
    Icon: SiIcons.SiNextdotjs,
    doc: 'https://pt-br.reactjs.org/docs/getting-started.html',
  },
  {
    text: 'Ember',
    Icon: FaIcons.FaEmber,
    doc: 'https://pt-br.reactjs.org/docs/getting-started.html',
  },
  {
    text: 'AntDesign',
    Icon: SiIcons.SiAntdesign,
    doc: 'https://pt-br.reactjs.org/docs/getting-started.html',
  },
  {
    text: 'Bootstrap',
    Icon: FaIcons.FaBootstrap,
    doc: 'https://pt-br.reactjs.org/docs/getting-started.html',
  },
  {
    text: 'JQuery',
    Icon: SiIcons.SiJquery,
    doc: 'https://pt-br.reactjs.org/docs/getting-started.html',
  },
  {
    text: 'Styled components',
    Icon: SiIcons.SiStyledcomponents,
    doc: 'https://styled-components.com/docs',
  },
  {
    text: 'Tailwind',
    Icon: SiIcons.SiTailwindcss,
    doc: 'https://tailwindcss.com/docs/installation',
  },
  {
    text: 'Chart.js',
    Icon: SiIcons.SiChartdotjs,
    doc: 'https://pt-br.reactjs.org/docs/getting-started.html',
  },
  {
    text: 'Less',
    Icon: FaIcons.FaLess,
    doc: 'https://pt-br.reactjs.org/docs/getting-started.html',
  },
  {
    text: 'Sass',
    Icon: FaIcons.FaSass,
    doc: 'https://pt-br.reactjs.org/docs/getting-started.html',
  },
  // {
  //   text: 'Jest',
  //   Icon: SiIcons.SiJest,
  //   doc: 'https://jestjs.io/pt-BR/',
  // },
  {
    text: 'CSS3',
    Icon: FaIcons.FaCss3Alt,
    doc: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
  },
  {
    text: 'HTML5',
    Icon: FaIcons.FaHtml5,
    doc: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
  },
  {
    text: 'Git',
    Icon: FaIcons.FaGitAlt,
    doc: 'https://git-scm.com/docs/git/pt_BR',
  },
  {
    text: 'Bitbucket',
    Icon: FaIcons.FaBitbucket,
    doc: 'https://docs.github.com/en/get-started',
  },
  {
    text: 'Jira',
    Icon: FaIcons.FaJira,
    doc: 'https://docs.github.com/en/get-started',
  },
  {
    text: 'Vercel',
    Icon: SiIcons.SiVercel,
    doc: 'https://docs.github.com/en/get-started',
  },
  {
    text: 'Heroku',
    Icon: SiIcons.SiHeroku,
    doc: 'https://docs.github.com/en/get-started',
  },
  {
    text: 'Netlify',
    Icon: SiIcons.SiNetlify,
    doc: 'https://docs.github.com/en/get-started',
  },
  {
    text: 'Node.js',
    Icon: FaIcons.FaNodeJs,
    doc: 'https://nodejs.org/en/docs/',
  },
  {
    text: 'Express',
    Icon: SiIcons.SiExpress,
    doc: 'https://expressjs.com/pt-br/',
  },
  {
    text: 'MySql',
    Icon: GrIcons.GrMysql,
    doc: 'https://dev.mysql.com/doc/',
  }
];


export const projects = [
  {
    title: 'Universal+ Streaming Web and CTV apps',
    description: "A project ordered by Universal to build it's streaming service on all platforms. I was in charge of building the web and ctv.",
      image: '/images/8.png',
      tags: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Accedo (CMS)'],
    source: '#',
    visit: false,
    isPrivate: true,
    id: 0,
  },
  {
    title: 'Carters Store',
    description: "Renewal of the old Carters website to a modern React version.",
      image: '/images/10.png',
      tags: ['React.js', 'Chakra UI', 'TypeScript'],
    source: '#',
    visit: 'https://carters.com/',
    isPrivate: true,
    id: 0,
  },
  {
    title: 'LTD Commodities Store',
    description: "Renewal of the old LTD website to a modern React version",
      image: '/images/9.png',
      tags: ['React.js', 'SCSS', 'Oracle CMS', 'TypeScript'],
    source: '#',
    visit: 'https://ltdcommodities.com/',
    isPrivate: true,
    id: 0,
  },
  {
    title: 'Crypto Data',
    description: "A Frontend dashboard that uses a public API to pull out data about the world of Crypto Coins.",
      image: '/images/1.png',
      tags: ['React.js', 'AntDesign', 'Chart.js', 'Redux'],
    source: 'https://github.com/feliperucunha/crypto-data',
    visit: 'https://crypto-data-iota.vercel.app',
    id: 1,
  },
  {
    title: 'Average Blog',
    description:"This is a Medium Blog clone built for learning purposes. It uses a CMS to handle the posts easily.",
    image: '/images/6.png',
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'Sanity CMS', 'TypeScript'],
    source: 'https://github.com/feliperucunha/avarage-blog',
    visit: 'https://avarege-blog.vercel.app',
    id: 2,
  },
  {
    title: 'This Portfolio',
    description: "Well, I guess you can take a look around.",
    image: '/images/5.jpeg',
    tags: ['React.js', 'Next.js', 'Styled Components', 'Context API', 'Themes'],
    source: 'https://github.com/feliperucunha/next-portfolio',
    visit: 'https://felipe-cunha.vercel.app/',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2017, text: 'Came from Vet School to the Computer Engineering course at UFPA', },
  { year: 2018, text: 'Started studying the basics of C, C++, Java and Python at the Internship at the Public Ministry as a FullStack Developer', },
  { year: 2019, text: 'Chose JavaScript as my main language during the internship and started working with ReactJs', },
  { year: 2020, text: 'Started working at a Startup called Cosmobots and later on at a company called Viasoft', },
  { year: 2021, text: `Got a job at Brazil's greatest software house: Compass.UOL`, },
  { year: 2022, text: 'Joined the biggest company on building streaming applications: Accedo', },
  { year: 'Now', text: 'Currently I am improving my skills and delivering the best software I can while sharing knowledge', },
];

const currentYear = new Date().getFullYear()

export const AccomplishmentsData = [
  { number: (currentYear - 2019), text: 'Years of professional experience' },
  { number: (currentYear - 2017), text: 'Years of coding experience', },
  { number: 10, text: 'Frameworks and tools used over time', },
  { number: 1000, text: 'Pull Requests on Bitbucket and Gitlab', }
];

export const ImageData = {
  image: '/images/eyes.gif',
  image2: '/images/margit.jpeg',
  image3: '/images/worthy.png',
  image4: '/images/praise.png',
  image5: '/images/footer_img.jpeg'
};