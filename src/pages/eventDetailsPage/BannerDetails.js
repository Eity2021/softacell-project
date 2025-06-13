import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { MapPin ,Share ,Navigation  } from 'lucide-react';
import detailsEvent from "../../image/banner/detailsEvent.png";
import tablerLocation from "../../image/icons/tabler_location.png";
import Vector from "../../image/icons/Vector.png";
export default function BannerDetails () {
  return (
    <Box sx={{height:'66vh'}}>
   
      <Box
        sx={{
          width: '100%',
          height:'391px',
          borderRadius: '12px', 
          // overflow: 'hidden', 
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {/* Banner Image */}
        <Box
          sx={{
            width: '100%',
            height:'391px',
            backgroundImage: `url(${detailsEvent})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius:'8px'
          }}
        />

        {/* Content Area */}
        <Box sx={{pt:4}}>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 500, 
                color: '#000',
                fontSize: { xs: '22px', md: '32px' }, 
                lineHeight: 1.2,
                fontFamily:'poppins'
              }}
            >
              Ajmon Brokers Event
            </Typography>
            <Box sx={{ backgroundColor:'transparent' ,display: 'flex', alignItems: 'center',gap:1 ,flexShrink: 0}}>
         
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 400,
                  color: '#0195FF',
                  fontSize: { xs: '18px', md: '20px' },
                  whiteSpace: 'nowrap',
                      fontFamily:'poppins'
                }}
              >
                Al Ain 
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  color: '##161616',
                  fontSize: { xs: '20px', md: '24px' },
                  whiteSpace: 'nowrap',
                      fontFamily:'poppins'
                }}
              >
                Dubai
              </Typography>
              
            <Box>
           <img src={tablerLocation} alt="" />
            </Box>
            </Box>
            
          </Box>

          {/* Sub-location / Additional info */}
          <Typography
            variant="body2"
            sx={{
              fontWeight:300,
              color: '#161616',
              fontSize: { xs: '14', md: '16px' },
              mt: -1, 
              display:'flex',
              justifyContent:'flex-end',
              fontFamily:'poppins'
            }}
          >
            Another District or anything name need
          </Typography>

          {/* Date/Time and Powered By */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-start',gap:4 ,alignItems: 'center', flexWrap: 'wrap'}}>
          <Box  sx={{ display: 'flex', gap:1}}>
              <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                color: '#333333', 
                fontSize: { xs: '16px', md: '20px' },
                whiteSpace: 'nowrap',
                mb: { xs: 1, md: 0 }, 
              }}
            >
              10:00 am - 7:00 pm at
            </Typography>
              <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                color: '#0195FF', 
                fontSize: { xs: '16px', md: '20px' },
                whiteSpace: 'nowrap',
                mb: { xs: 1, md: 0 }, 
              }}
            >
              21'st March-2025
            </Typography>
            </Box>
           <Box  sx={{ display: 'flex', gap:1}}>
          <Typography
              variant="body2"
              sx={{
                color: '#666666',
                fontWeight:400,
                fontSize: { xs: '16px', md: '20px' },
                whiteSpace: 'nowrap',
              }}
            >
              Powered by 
            </Typography>
             <Typography
              variant="body2"
              sx={{
                color: '#B3B3B3',
                fontWeight:400,
                fontSize: { xs: '16px', md: '20px' },
                whiteSpace: 'nowrap',
              }}
            >
              RAK Properties
            </Typography>
          </Box>
          </Box>







          {/* Section: REAL ESTATE EVENTS */}
      <Box  sx={{ mt: 2, mb: 1,display:'flex',justifyContent:'space-between' }}>
            <Box>
            <Typography
              sx={{

                color: '#333333', 
                fontWeight: 600,
                fontSize: { xs: '16px', md: '20px' },
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              REAL ESTATE EVENTS
            </Typography>
            <Typography
              sx={{
                fontWeight: 300,
                color: '#0195FF',
                fontSize: { xs: '14px', md: '18px' },
                mt: 0.5,
              }}
            >
              Property Showcases & Launches
            </Typography>
          </Box >
                    <Button
              variant="outlined"
              
              sx={{
                textTransform: 'none', 
                borderRadius: '8px',
                borderColor: '#0195FF',
                color: '#0195FF',
                fontWeight: 400,
                 backgroundColor: '#F4F8EE',
                fontSize: { xs: '14px', md: '18px' },
                padding: { xs: '8px 16px', md: '10px 40px' },
                '&:hover': {
                  backgroundColor: '#F4F8EE',
                  borderColor: '#0195FF',
                  fontFamily:'poppins'
                },
              }}
            >
              Share event
              
            <img src={Vector} alt=""/>
            </Button>
      </Box>
          {/* Description and Share Button */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' }, mt: 2 }}>
            <Typography
              variant="body1"
              sx={{
                color: '#333',
                 fontWeight: 400,
                fontSize: { xs: '16px', md: '20px' },
                lineHeight: 1.6,
                flexGrow: 1,
                mb: { xs: 2, md: 0 }, 
                pr: { md: 2 }, 
                fontFamily:'poppins'
              }}
            >
              A once in a generation opportunity to secure a luxury custom built home in what will be one of Sydney's great waterfront estates with a large private marina pen in the heart of Pittwater
            </Typography>
  
          </Box>
        </Box>
      </Box>
    </Box>
  );
};


