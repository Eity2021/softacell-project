import React from 'react';
import { Box } from '@mui/material';
import BannerDetails from "./BannerDetails";
import Videos from './Videos';
import SliderEvents from './SliderEvents';
import FeedBack from './FeedBack';
import ContactPerson from './ContactPerson';
import { useGetPerEventQuery } from '../../features/perEvent/perEventApi';
import { useSelector } from 'react-redux';
export default function DetailsMainIndex () {
  const selectedId = useSelector((state) => state.event.selectedEventId);
  const {data:perEvent, isLoading,isError} = useGetPerEventQuery(selectedId);
    console.log("perEvent" ,perEvent)

  return (
    <Box>
        <BannerDetails perEvent={perEvent}></BannerDetails>
        <Videos perEvent={perEvent}></Videos>
        <SliderEvents></SliderEvents>
        <FeedBack perEvent={perEvent}></FeedBack>
        <ContactPerson></ContactPerson>
        </Box>
  );
};


