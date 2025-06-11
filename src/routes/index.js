import  { Suspense } from 'react';
import EventList from '../pages/eventList/EventList';
import Dashboard from '../pages/dashboard/Dashboard';
import { Circle } from 'lucide-react';




const routes= [
  {
    path: '/',
    name:"Dashboard",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Dashboard />
      </Suspense>
    ),
    
  },
  {
    // path: '/ECommerce',
    name:"E-Commerce",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <EventList />
      </Suspense>
    ),
    children: [
      {
      path: 'productLists', 
       name:"Product List",
       icon:<Circle size={16} /> ,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <EventList />
          </Suspense>
        ),
      },
      {
        path: 'addProduct', 
       name:"Add Product",
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
    name:"Category",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
           <EventList />
      </Suspense>
    ),
    children: [
      {
        path: 'categoryLists', 
       name:"Category Lists",
       icon:<Circle size={16} /> ,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
                <EventList />
          </Suspense>
        ),
      },
      {
        path: 'newCategory', 
       name:"New Category",
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
    name:"SubCategory",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
            <EventList />
      </Suspense>
    ),
    children: [
      {
        path: 'subCategoryLists', 
       name:"SubCategory Lists",
       icon:<Circle size={16} /> ,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
                  <EventList />
          </Suspense>
        ),
      },
      {
        path: 'newSubCategory', 
       name:"New SubCategory",
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
    name:"Orders",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
             <EventList />
      </Suspense>
    ),
    children: [
      {
        path: 'orderList', 
       name:"Order List",
       icon:<Circle size={16} /> ,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
               <EventList />
          </Suspense>
        ),
      },

    
    ],
  },
];

export default routes;
