import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

// import profileImg  from '../assets/profile.avif';
// import projectImg1 from '../assets/project1.avif';
// import projectImg2 from '../assets/project2.avif';
// import projectImg3 from '../assets/project3.avif';
// import projectImg4 from '../assets/project4.avif';
// import projectImg5 from '../assets/project5.avif';
// import projectImg6 from '../assets/project6.avif';
// export const assets = {
//     profileImg,
// }


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'Tailwind', 'HTML', 'CSS','JavaScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB',  'MySQL', 'Firebase']
  },
  {
  title: 'Creative Tools',
  icon: FaTools,
  description: 'Using modern tools to design and enhance digital experiences efficiently.',
  tags: ['Figma', 'Canva', 'VN', 'CapCut']
},
  
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'VS code ','Vercel', 'Figma', 'Matlab','Multisim']
  }
];



export const projects = [
 {
  title: "InfoGlobe Chatbot",
  description: "A smart chatbot that provides real-time news and information using APIs with an interactive user interface.",
  tech: ["HTML", "CSS", "JavaScript", "News API", "OpenAI"],
  // icons: [ FaCss3Alt, FaJs, FaRobot],
  demo: "https://github.com/deepika14-rd/news-chatbot.git",
  code: "https://github.com/deepika14-rd/news-chatbot.git",
},
{
  title: "Food Ordering Website",
  description: "A responsive food ordering and restaurant showcase platform with modern UI and smooth user experience.",
  tech: ["React", "HTML", "CSS", "API Integration"],
  // icons: [FaReact, FaHtml5, FaCss3Alt, FaDatabase],
  demo: "#",
  code: "#",
},
{
  title: "Firebase Contact App",
  description: "A contact management application with real-time database integration and clean UI design.",
  tech: ["React", "Firebase", "Tailwind CSS"],
  // icons: [FaReact, FaFire, FaDatabase],
  demo: "#",
  code: "#",
},
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    // image: projectImg4,
    tech: ["React", "Tailwind CSS", "Framer Motion", "Markdown"],
    // icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  ];


export const workData = [
    {
  role: "Campus Ambassador",
  company: "Google Developer Programs",
  duration: "Sep 2024 - Dec 2024",
  description:
    "Represented developer programs on campus, organized tech sessions, and increased student engagement through community building and social media outreach.",
  color: "purple"
},{
  role: "LLM Intern",
  company: "Ethara AI",
  duration: "Mar 2026 - May 2026",
  description:
    "Worked on Large Language Model (LLM) applications, contributing to AI-based solutions such as chatbots and intelligent systems, with a focus on real-world use cases and user interaction.",
  color: "green"
},
{
  role: "Cybersecurity Intern",
  company: "Gurugram Police (GPCSSI’25)",
  duration: "Jun 2025 - Jul 2025",
  description:
    "Worked on cybersecurity awareness initiatives, analyzed real-world cyber threats, and contributed to digital safety campaigns and reporting practices.",
  color: "pink"
},
{
  role: "Research Intern",
  company: "SRIVIPRA, Sri Venkateswara College",
  duration: "Jul 2024 - Oct 2024",
  description:
    "Conducted research and data analysis under faculty mentorship, assisted in documentation, and presented findings in collaborative discussions.",
  color: "blue"
},{
  role: "President",
  company: "Electronics Department",
  duration: "Oct 2025 - Present",
  description:
    "Leading departmental activities, managing student initiatives, and organizing academic and technical events.",
  color: "red"
}
];
