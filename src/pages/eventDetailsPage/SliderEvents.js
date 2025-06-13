import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import sliderImage from "../../image/banner/sliderImage.png";
// Your events array
const events = [
  {
    id: 1,
    image:sliderImage,
    title: 'Ajmon Brokers Event',
    time: '10:00am - 7:00pm',
    powerdedBy: 'Powered by',
    rak: 'RAK Properties',
    description: 'A once in a generation opportunity to secure a luxury custom built home in what will be one of Sydney\'s great waterfront estates with a large private marina pen in the heart of Pittwater.',
  },
  {
    id: 2,
    image: sliderImage,
    title: 'Grand Annual Conference',
    time: '9:00am - 5:00pm',
        powerdedBy: 'Powered by',
    rak: 'RAK Properties',
    description: 'A once in a generation opportunity to secure a luxury custom built home in what will be one of Sydney\'s great waterfront estates with a large private marina pen in the heart of Pittwater.',
  },
  {
    id: 3,
    image: sliderImage,
    title: 'Tech Innovation Summit',
    time: '11:00am - 6:00pm',
        powerdedBy: 'Powered by',
    rak: 'RAK Properties',
    description: 'A once in a generation opportunity to secure a luxury custom built home in what will be one of Sydney\'s great waterfront estates with a large private marina pen in the heart of Pittwater.',
  },
  {
    id: 4,
    image:sliderImage,
    title: 'Art Exhibition Opening',
    time: '6:00pm - 9:00pm',
        powerdedBy: 'Powered by',
    rak: 'RAK Properties',
    description: 'A once in a generation opportunity to secure a luxury custom built home in what will be one of Sydney\'s great waterfront estates with a large private marina pen in the heart of Pittwater.',
  },
  {
    id: 5,
    image:sliderImage,
    title: 'Food Festival Extravaganza',
    time: '12:00pm - 10:00pm',
        powerdedBy: 'Powered by',
    rak: 'RAK Properties',
    description: 'A once in a generation opportunity to secure a luxury custom built home in what will be one of Sydney\'s great waterfront estates with a large private marina pen in the heart of Pittwater.',
  },
  {
    id: 6,
    image: sliderImage,
    title: 'Community Fun Run',
    time: '8:00am - 12:00pm',
        powerdedBy: 'Powered by',
    rak: 'RAK Properties',
    description: 'A once in a generation opportunity to secure a luxury custom built home in what will be one of Sydney\'s great waterfront estates with a large private marina pen in the heart of Pittwater.',
  },
  {
    id: 7,
    image:sliderImage,
    title: 'Digital Marketing Workshop',
    time: '9:30am - 4:30pm',
        powerdedBy: 'Powered by',
    rak: 'RAK Properties',
    description: 'A once in a generation opportunity to secure a luxury custom built home in what will be one of Sydney\'s great waterfront estates with a large private marina pen in the heart of Pittwater.',
  },
  {
    id: 8,
    image: sliderImage,
    title: 'Jazz Night Live',
    time: '7:00pm - 11:00pm',
        powerdedBy: 'Powered by',
    rak: 'RAK Properties',
    description:'A once in a generation opportunity to secure a luxury custom built home in what will be one of Sydney\'s great waterfront estates with a large private marina pen in the heart of Pittwater.',
  },
];

export default function EventSlider() {
    const [activeDirection, setActiveDirection] = useState("next");
const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const cardsPerPage = isMobile ? 1 : 5;

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPages = Math.ceil(events.length / cardsPerPage);

 const goToPrevious = () => {
  setActiveDirection("prev");
  setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
};

const goToNext = () => {
  setActiveDirection("next");
  setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
};


  return (
     <Box sx={{mt:6}}>
      <Box
        sx={{
          mx: "auto",
          mb: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
        }}
      >
        <Typography sx={{color:'#161616', fontSize:{xs:'24px', md:'32px'} , fontWeight:500}}>
          Explore some similar Events
        </Typography>
        <Box display="flex" gap={1}>
<Button
  onClick={goToPrevious}
  variant="outlined"
  sx={{
    minWidth: 0,
    p: 1.5,
    borderRadius: "50%",
    background:
      activeDirection === "next"
        ? "#e0e0e0"
        : "linear-gradient(135deg, #0F8CE9, #66B3FB)",
    color: "#fff",
    border: "none",
    "&:hover": {
      background:
        activeDirection === "next"
          ? "#d6d6d6"
          : "linear-gradient(135deg, #0F8CE9, #66B3FB)",
    },
  }}
>
  <ChevronLeft  />
</Button>

<Button
  onClick={goToNext}
  variant="contained"


    sx={{
    minWidth: 0,
    p: 1.5,
    borderRadius: "50%",
    background:
      activeDirection === "prev"
        ? "#e0e0e0"
        : "linear-gradient(135deg, #0F8CE9, #66B3FB)",
    color: "#fff",
    border: "none",
    "&:hover": {
      background:
        activeDirection === "prev"
          ? "#d6d6d6"
          : "linear-gradient(135deg, #0F8CE9, #66B3FB)",
    },
  }}
>
  <ChevronRight />
</Button>

        </Box>
      </Box>


      <Box
        sx={{
          overflow: "hidden",
          position: "relative",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.5s ease",
            width: `${(events.length / cardsPerPage) * 100}%`,
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {events.map((event, i) => (
            <Box
              key={event.id}
              sx={{
                flex: `0 0 ${100 / cardsPerPage}%`,
                px: 2,
                boxSizing: "border-box",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#fff",
                  borderRadius: 2,
                  boxShadow: 2,
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  style={{ width: "100%", height: '300px', objectFit: "cover" }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/400x250/CCCCCC/666666?text=Image+Error";
                  }}
                />
                <Box p={2} display="flex" flexDirection="column" flexGrow={1}>
                  <Typography  sx={{fontSize:'24px', fontWeight:500,fontFaimily:'poppins',color:'#000' }}>
                   {event.title}
                  </Typography>



              <Box>
                    <Typography
                    variant="caption"
                    sx={{ mt: 0.5 ,fontSize:'14px', fontWeight:400,fontFaimily:'poppins',color:'#333333' }}
                  >
                    {event.time}
                  </Typography>

                  
                  <Box sx={{mt:0.5}} >
                      <Typography
                    variant="caption"
                    sx={{ mt: 0.5 ,fontSize:'14px', fontWeight:400,fontFaimily:'poppins',color:'#333333' }}
                  >
                    {event.powerdedBy}
                  </Typography>{" "}
                      <Typography
                    variant="caption"
                    sx={{ mt: 0.5 ,fontSize:'14px', fontWeight:400,fontFaimily:'poppins',color:'#B3B3B3' }}
                  >
                    {event.rak}
                  </Typography>
                    </Box>
                </Box>


                  <Typography sx={{ fontSize:'16px', fontWeight:400,fontFaimily:'poppins',color:'#161616' }} flexGrow={1}>
                    {event.description}
                  </Typography>

                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
