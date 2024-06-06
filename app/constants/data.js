import {HiHome,HiMiniRectangleGroup,HiRectangleStack,HiEnvelope} from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import charity from '@/public/charity.png'
import potato from '@/public/potato.png'
import alibaba from '@/public/alibaba.png'

export const navData=[
    {name:"home",path:"/",icon: <HiHome/>},
    {name:"about",path:"/about",icon: <FaUser />},
    {name:"services",path:"/services",icon: <HiMiniRectangleGroup/>},
    {name:"work",path:"/work",icon: <HiRectangleStack />},
    {name:"contact",path:"/contact",icon:<HiEnvelope />},
];

export const workData={
   slides: [
        {
          images: [
            {
              title: 'rottenpotato website',
              desc:'Developed a responsive movie website for immersive user experiences, seamless navigation, and engaging content delivery.',
              img:potato,
              url:"https://github.com/202306-NEA-DZ-FEW/movie-project-rottenpotato",
            },
            {
              title: "Unify",
              desc:'Unify. is a website that encourages people who live in the same region to share their daily extra food, clothes, furniture, etc',
              img: charity,
              url:"https://github.com/202306-NEA-DZ-FEW/team-a",
            },

          ],
        },
        {
          images: [
            {
              title: "alibabalite website",
              desc:'This Next.js-based e-commerce website allows users to browse, filter, and purchase',
              img: alibaba,
              url:"https://github.com/202306-NEA-DZ-FEW/e-commerce-project-alibabalite",

            },
            // {
            //   title: "404-brain-not-found",
            //   desc:'Mad Libs is a word game that prompts players to fill in blanks with words to create hilarious stories. Our website provides a platform for users to create and share their own Mad Libs stories with others',
            //   img: charity,
            //   url:"https://github.com/202306-NEA-DZ-FEW/madlibs-404-brain-not-found",
            // },
          ],
        },
      ]
}


import { FaJs, FaReact,} from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si"
import { FaGithub } from "react-icons/fa";


//aboutData
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <AiOutlineHtml5 key='key'/>,
          <TbBrandCss3 key='key'/>,
          <FaJs key='key'/>,
          <SiTailwindcss key='key' />,
          <FaReact key='key'/>,
          <FaPython key='key'/>,
          <FaGithub key='key'/>
          
        ],
      },
    ],
  },

  {
    title: 'Education',
    info: [
      {
        title: 'Web Development Re:Coded Bootcamp - Online Immersive Bootcamp',
        stage: '07/2023 - 12/2023',
      },
      {
        title: "Bachelor's degree in Computer Science - University of Mostafa BENBOULAID-BATNA 2",
        stage: '2017- 2020',
      },
      {
        title: "master's degree in Artificial Intelligent - University of Mostafa BENBOULAID-BATNA 2 ",
        stage: '2020 - 2022',
      },
    ],
  },
  {
    title: 'Languages',
    info: [
      {
        title:'• Arabic - Native',  
      },
      {
        title: "• english - Advanced"
      },
      {
        title: "• frensh - Advanced"
      },
    ],
  },
];


import {
  RxCrop,
  RxPencil2,
  RxDesktop,
} from "react-icons/rx";


// serviceData
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Responsive Web Design:',
    description: 'Craft adaptive interfaces for optimal user experience across devices.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Interactive UI Development:',
    description: 'Develop dynamic, engaging interfaces using cutting-edge and technologies.',
  },
  {
    icon: <RxDesktop />,
    title: 'Performance Optimization',
    description: 'Optimize speed and efficiency for a seamless, responsive user experience.',
  },


];