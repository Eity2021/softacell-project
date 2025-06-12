import React from 'react';
import { Box } from '@mui/material';
import BannerDetails from "./BannerDetails";
import Videos from './Videos';

export default function DetailsMainIndex () {
  return (
    <Box>
        <BannerDetails></BannerDetails>
        <Videos></Videos>
        </Box>
  );
};


