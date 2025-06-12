import React from "react";
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  Typography,
  Paper,

} from "@mui/material";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import EventButton from "./EventButton";
import EventAllListed from "./EventAllListed";


export default function EventSearch() {

  return (
    <Box>
    <Box sx={{display:'flex',mt:2}}>
        <Typography sx={{fontWeight:500,fontSize:'20px', fontFamily:'poppins',color:'#0195FF',pr:.5}}> 100,000+   </Typography> 
      <Typography sx={{fontWeight:500,fontSize:'20px', fontFamily:'poppins',color:'#003255' ,mb:2}} >
          events happening this month
        </Typography>
     </Box>
<EventButton></EventButton>
 <Box sx={{display:'flex', gap:1, justifyContent:'flex-end' ,mt:3}}>
   <Button
  variant="outlined" 
  sx={{
    width:'130px',
   fontSize:'16px',
   fontWeight:'poppins',
    borderRadius: "33px",
    borderColor: "#0195FF", 
    color: "#0195FF", 
    "&:hover": {
      borderColor: "#2196f3", 
    },
    "&:focus": {
      borderColor: "#2196f3", 
      borderWidth: "1px", 
     
    },
  }}
>
  Filter
</Button>
     <Button        
     variant="outlined"
            fullWidth
            sx={{
              width: "218px",
              height: "60px",
              borderRadius: "12px",
              backgroundColor: "#F4F8EE",
              fontWeight: 400,
              fontSize: "18px",
              fontFamily: "poppins",
            }}>My Events</Button>
    </Box>


     <EventAllListed></EventAllListed>

        {/* Pagination */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="body2">Rows per page:</Typography>
            <Select size="small" defaultValue={10}>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
            </Select>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="body2">1-2 of 2</Typography>
            <IconButton disabled><ChevronLeft fontSize="small" /></IconButton>
            <IconButton disabled><ChevronRight fontSize="small" /></IconButton>
          </Box>
        </Box>
    </Box>
  )
}




