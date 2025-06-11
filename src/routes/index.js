import  { Suspense } from 'react';
import EventList from '../pages/eventList/EventList';
import Dashboard from '../pages/dashboard/Dashboard';
import { Circle } from 'lucide-react';

import Category from "../image/icons/Category.png";
import user from "../image/icons/3_user.png";
import Calling from "../image/icons/Calling.png";
import fluentNet from "../image/icons/fluent_net.png";
import Frame from "../image/icons/Frame.png";
import Group from "../image/icons/Group.png";
import letsIcons from "../image/icons/lets-icons.png";
import mynauiBriefcase from "../image/icons/mynaui_briefcase.png";
import solarBuildingsLineDuotone from "../image/icons/solar_buildings-line-duotone.png";
import solarGraphUpBroken from "../image/icons/solar_graph-up-broken.png";
import streamlineQualityEducation from "../image/icons/streamline_quality-education.png";
import uimGraphBar from "../image/icons/uim_graph-bar.png";
import Setting from "../image/icons/Setting.png";


const routes= [
  {
    path: '/',
    name:"Dashboard",
    icon: <img src={Category} alt="dashboard icon" />,
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Dashboard />
      </Suspense>
    ),
    
  },
  



  {
    path: '/eventList', 
    name:"Properties",
    icon: <img src={solarBuildingsLineDuotone} alt="dashboard icon" />,
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <EventList />
      </Suspense>
    ),
    children: [
      {
        path: 'demo', 
        name:"demo1",
       icon:<Circle size={16} /> ,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <EventList />
          </Suspense>
        ),
      },
      {
        path: 'demo', 
       name:"demo2",
       icon:<Circle size={16} /> ,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
             <EventList />
          </Suspense>
        ),
      },
    
    ],
  },
  {
    // path: '/ECommerce',
    name:"Luxury Asset",
     icon: <img src={letsIcons} alt="dashboard icon" />,
    element: (
      <Suspense fallback={<p>Loading...</p>}>
           <EventList />
      </Suspense>
    ),
    children: [
      {
        path: 'demo', 
       name:"Demo 1",
       icon:<Circle size={16} /> ,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
                <EventList />
          </Suspense>
        ),
      },
      {
        path: 'demo', 
       name:"Demo 2",
       icon:<Circle size={16} /> ,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
        <EventList />
          </Suspense>
        ),
      },
    
    ],
  },

    {
   path: '/eventList',
    name:"Market Insights",
        icon: <img src={solarGraphUpBroken} alt="dashboard icon"  />,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
             <EventList />
      </Suspense>
    ),
    
  },
  
  {
    path: '/eventList',
    name:"Marketing Tool",
    icon: <img src={uimGraphBar} alt="dashboard icon" />,
    element: (
      <Suspense fallback={<p>Loading...</p>}>
             <EventList />
      </Suspense>
    ),
    
  },
  
  {
    path: '/eventList',
    name:"Professional Service",
    icon: <img src={Group} alt="dashboard icon"  />,
    element: (
      <Suspense fallback={<p>Loading...</p>}>
             <EventList />
      </Suspense>
    ),
    
  },
  
  {
    path: '/eventList',
    name:"Tenantor",
    icon: <img src={Frame} alt="dashboard icon" />,
    element: (
      <Suspense fallback={<p>Loading...</p>}>
             <EventList />
      </Suspense>
    ),
    
  },


    {
      path: '/eventList',
      name:"Networking & event",
      icon: <img src={fluentNet} alt="dashboard icon"  />,
      element: (
        <Suspense fallback={<p>Loading...</p>}>
             <EventList />
      </Suspense>
    ),
    
  },
  {
    path: '/eventList',
    name:"Education & resource",
    icon: <img src={streamlineQualityEducation} alt="dashboard icon" />,
    element: (
      <Suspense fallback={<p>Loading...</p>}>
             <EventList />
      </Suspense>
    ),
    
  },
  
  
  
  {
    // path: '/',
    name:"Market Players",
    icon: <img src={mynauiBriefcase} alt="dashboard icon"  />,
    element: (
      <Suspense fallback={<p>Loading...</p>}>
            <EventList />
      </Suspense>
    ),
    children: [
      {
        path: 'demo', 
        name:"Demo 1",
        icon:<Circle size={16} /> ,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
                  <EventList />
          </Suspense>
        ),
      },
      {
        path: 'demo', 
        name:"Demo 2",
        icon:<Circle size={16} /> ,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <EventList />
          </Suspense>
        ),
      },
      
    ],
  },
  
  
  {
    path: '/eventList',
    name:"Referral & Reward",
    icon: <img src={user} alt="dashboard icon"  />,
    element: (
      <Suspense fallback={<p>Loading...</p>}>
             <EventList />
      </Suspense>
    ),
    
  },
  
  {
    path: '/eventList',
    name:"Support & Feedback",
    icon: <img src={Calling} alt="dashboard icon"/>,
    element: (
      <Suspense fallback={<p>Loading...</p>}>
             <EventList />
      </Suspense>
    ),

  },
  {
    path: '/eventList',
    name:"Settings",
    icon: <img src={Setting} alt="dashboard icon" />,
    element: (
      <Suspense fallback={<p>Loading...</p>}>
             <EventList />
      </Suspense>
    ),

  },
];

export default routes;
