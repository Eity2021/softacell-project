import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Paper,
  Badge as MuiBadge,
} from "@mui/material";

import {
  Search,
 FilterIcon,
  Eye as Visibility,
DownloadIcon,
  Pencil as Edit,
  Trash2 as Delete,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import EventButton from "./EventButton";

const events = [
  { id: 1, name: "Ajman Brokers Event", date: "March 18, 2025", location: "Dubai", country: "Dubai", status: "Approved" },
  { id: 2, name: "Ajman Brokers Event", date: "March 18, 2025", location: "Dubai", country: "Dubai", status: "Pending" },
  { id: 3, name: "Ajman Brokers Event", date: "March 18, 2025", location: "Dubai", country: "Dubai", status: "Rejected", highlighted: "red" },
  { id: 4, name: "Ajman Brokers Event", date: "March 18, 2025", location: "Dubai", country: "Dubai", status: "Approved", highlighted: "blue" },
  { id: 5, name: "Ajman Brokers Event", date: "March 18, 2025", location: "Dubai", country: "Dubai", status: "Approved" },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Approved":
      return "success";
    case "Pending":
      return "warning";
    case "Rejected":
      return "error";
    default:
      return "default";
  }
};

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


 <Box sx={{display:'flex', gap:1, justifyContent:'flex-end'}}>
    <Button variant="outlined" >Filter</Button>
     <Button variant="outlined">My Events</Button>
    </Box>















        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sl</TableCell>
                <TableCell>Event Name</TableCell>
                <TableCell>Event Date</TableCell>
                <TableCell>Event Location</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {events.map((event, index) => (
                <TableRow
                  key={event.id}
                  sx={{
                    backgroundColor:
                      event.highlighted === "red"
                        ? "#fdecea"
                        : event.highlighted === "blue"
                        ? "#e3f2fd"
                        : "inherit",
                    borderLeft: event.highlighted ? `4px solid ${event.highlighted === "red" ? "#f44336" : "#2196f3"}` : undefined,
                  }}
                >
                  <TableCell>{String(index + 1).padStart(2, "0")}</TableCell>
                  <TableCell>{event.name}</TableCell>
                  <TableCell>{event.date}</TableCell>
                  <TableCell>{event.location}</TableCell>
                  <TableCell>{event.country}</TableCell>
                  <TableCell>
                    <MuiBadge
                      badgeContent={event.status}
                      color={getStatusColor(event.status)}
                      sx={{ '& .MuiBadge-badge': { right: -5, top: 10 } }}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton><Visibility fontSize="small" /></IconButton>
                    <IconButton><DownloadIcon fontSize="small" /></IconButton>
                    <IconButton><Edit fontSize="small" /></IconButton>
                    <IconButton><Delete fontSize="small" /></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

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




