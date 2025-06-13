import React from 'react';
import { Box } from '@mui/material';
import BannerDetails from "./BannerDetails";
import Videos from './Videos';
import SliderEvents from './SliderEvents';
import FeedBack from './FeedBack';
import ContactPerson from './ContactPerson';

export default function DetailsMainIndex () {
  return (
    <Box>
        <BannerDetails></BannerDetails>
        <Videos></Videos>
        <SliderEvents></SliderEvents>
        <FeedBack></FeedBack>
        <ContactPerson></ContactPerson>
        </Box>
  );
};


