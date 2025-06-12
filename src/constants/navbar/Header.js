import  { useState } from 'react';
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
   Avatar 
} from '@mui/material';
import { Bell  ,SunDim ,Search } from 'lucide-react';

export default function Header({routes}) {


  return (
<Box>
    <Box
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      px={2}
      py={1}
      mb={3}
    >
      {/* Search Button */}
      <IconButton
        sx={{
          bgcolor: '#F4F8EE',
          color: '#000000',
          mr: 2,
          '&:hover': { bgcolor: '#e3f1dc' }
        }}
      >
        <Search  fontSize="small" />
      </IconButton>

      {/* bell Button */}
   <Box sx={{position:'relative'}}>
       <IconButton
        sx={{
          bgcolor: '#F4F8EE',
          color: '#000000',
          mr: 2,
          '&:hover': { bgcolor: '#fbdad4' }
        }}
      >
        <Bell   fontSize="small" />
      </IconButton>

      <Box sx={{position:"absolute",top:'10px',left:'23px',width:'5px', height:'5px', background:"#F73A25",borderRadius:"50%"}}>
        </Box>
   </Box>

      {/* Theme Toggle Button */}
    <Box sx={{ width:'77px',bgcolor:'#CCCCCC',borderRadius:"32px",p:'4px' , mr:2}}>
        <IconButton
        sx={{
          bgcolor: '#fff',
          color: '##333333',
          mr: 1,
          '&:hover': { bgcolor: '#fff' }
        }}
      >
        <SunDim  size={20} />
      </IconButton>
     </Box>

      {/* User Avatar */}
      <Avatar
        alt="User"
        src="https://i.pravatar.cc/300" // Replace with your user image
        sx={{ width: '60px', height: '60px' }}
      />
    </Box>
  
    </Box>
  )
}
