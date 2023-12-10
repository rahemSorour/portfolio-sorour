import {HiHome,HiMiniRectangleGroup,HiRectangleStack,HiEnvelope} from "react-icons/hi2";
import { IoMdChatboxes } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import charity from "public/charity.png";
import rottenpotato from 'public/rottenpotato.png';

export const navData=[
    {name:"home",path:"/",icon: <HiHome/>},
    {name:"about",path:"/about",icon: <FaUser />},
    {name:"services",path:"/services",icon: <HiMiniRectangleGroup/>},
    {name:"work",path:"/work",icon: <HiRectangleStack />},
    {name:"testimonials",path:"/testimonials",icon: <IoMdChatboxes/>},
    {name:"contact",path:"/contact",icon:<HiEnvelope />},
];

export const workData={
    // slide3s:[
    //     {name:"rotenpotato",images:{url:"/https://github.com/202306-NEA-DZ-FEW/movie-project-rottenpotato"},image:{rottenpotato}},
    //     {name:"charity",url:"/https://github.com/202306-NEA-DZ-FEW/team-a", image:{charity}},
    //     {name:"alibabalite",url:"/https://github.com/202306-NEA-DZ-FEW/e-commerce-project-alibabalite",image:{rottenpotato}},
    //     {name:"madlibs",url:"/https://github.com/202306-NEA-DZ-FEW/madlibs-404-brain-not-found",image:{rottenpotato}},
    // ],
   slides: [
        {
          images: [
            {
              title: 'rotenpotato',
              url:charity
            },
            {
              title: "charity",
              url: rottenpotato,
            },
            // {
            //   title: "alibabalite",
            //   path: rottenpotato,
            // },
            // {
            //   title: "madlibs",
            //   path: rottenpotato,
            // },

          ],
        },
        {
          images: [
            {
              title: "alibabalite",
              path: rottenpotato,
            },
            {
              title: "madlibs",
              path: rottenpotato,
            },
          ],
        }
      ]
}