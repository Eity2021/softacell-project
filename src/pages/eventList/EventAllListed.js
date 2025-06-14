
import {
  Box, Paper, Typography, Stack, IconButton,
} from '@mui/material';
import {
  Eye as Visibility,
  DownloadIcon,
  Pencil as Edit,
  Trash2 as Delete,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setSelectedEventId } from '../../features/event/eventSlice';
export default function EventAllListed({ event }) {

  let allEvent = event?.results;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const singlePage = (id) => {
    dispatch(setSelectedEventId(id));
    navigate(`/detailsMainIndex/${id}`)

  }

  return (
    <Box    
      sx={{
    overflowX: {
      xs: 'auto',  
      md: 'auto',
      lg: 'visible' 
    },
    WebkitOverflowScrolling: 'touch', 
    scrollbarWidth: 'none', 
    '&::-webkit-scrollbar': {
      display: 'none', 
    },
  }}>
      <Box sx={{ mt: 5 ,width: '1450px' }} >
        {/* Table Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4,
            px: 3,
          }}
        >
          {/* Adjusted flexGrow values to roughly match visual distribution */}
          <Typography variant="body2" sx={{ width: '15px', fontSize: '20px', fontWeight: 500, fontFamily: 'poppins', color: '#161616' }}>SL</Typography>
          <Typography variant="body2" sx={{ width: '200px', fontSize: '20px', fontWeight: 500, fontFamily: 'poppins', color: '#161616' }}>Event Name</Typography>
          <Typography variant="body2" sx={{ width: '150px', fontSize: '20px', fontWeight: 500, fontFamily: 'poppins', color: '#161616' }}>Event Date</Typography>
          <Typography variant="body2" sx={{ width: '200px', fontSize: '20px', fontWeight: 500, fontFamily: 'poppins', color: '#161616' }}>Event Location</Typography>
          <Typography variant="body2" sx={{ width: '100px', fontSize: '20px', fontWeight: 500, fontFamily: 'poppins', color: '#161616' }}>Country</Typography>
          <Typography variant="body2" sx={{ width: '80px', fontSize: '20px', fontWeight: 500, fontFamily: 'poppins', color: '#161616' }}>Status</Typography>
          <Typography variant="body2" sx={{ width: '160px', fontSize: '20px', fontWeight: 500, fontFamily: 'poppins', color: '#161616' }}>Actions</Typography>
        </Box>

        {/* Event Rows */}
        <Stack spacing={2}>
          {allEvent?.map((event) => (
            <Paper
              key={event.id}
              sx={{
                p: 4,
                borderRadius: '8px',
                border: event?.bg_color !== 'transparent' ? `1px solid ${event?.bg_color}` : '1px solid #CCCCCC',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.0)',
                '&:hover': {
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.0)',
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                {/* SL */}


                <Typography variant="body1" sx={{ fontWeight: 'medium', width: '15px' }}>
                  {event.id}
                </Typography>

                {/* Event Name */}
                <Box sx={{ width: '200px' }}>
                  <Typography variant="body1" sx={{ fontSize: '16px', fontWeight: 500, fontFamily: 'poppins', color: '#000' }}>
                    {event?.title || "Ajmon Brokers Event"}
                  </Typography>
                  <Typography variant="caption" sx={{ fontSize: '10px', fontWeight: 400, fontFamily: 'poppins', color: '#666666' }}>
                    Powered by {event.poweredBy}
                  </Typography>
                </Box>

                {/* Event Date */}
                <Box sx={{ width: '150px' }}>
                  <Typography variant="body1" sx={{ fontSize: '16px', fontWeight: 500, fontFamily: 'poppins', color: '#000' }}>
                    {new Date(event?.start_date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </Typography>
                  <Typography variant="caption" sx={{ fontSize: '10px', fontWeight: 400, fontFamily: 'poppins', color: '#333333' }}>
                    {new Date(`1970-01-01T${event?.start_time}`).toLocaleTimeString('en-US', {
                      hour: 'numeric',
                      minute: '2-digit',
                      hour12: true,
                    })} -{' '}
                    {new Date(`1970-01-01T${event?.end_time}`).toLocaleTimeString('en-US', {
                      hour: 'numeric',
                      minute: '2-digit',
                      hour12: true,
                    })}
                  </Typography>
                </Box>
                {/* Event Location */}
                <Box sx={{ width: '200px' }}>
                  <Typography variant="body1" sx={{ fontSize: '16px', fontWeight: 500, fontFamily: 'poppins', color: '#000' }}>
                    {event?.location || "Dubai"}
                  </Typography>
                  <Typography variant="caption" sx={{ fontSize: '10px', fontWeight: 400, fontFamily: 'poppins', color: '#333333' }}>
                    {event?.SubLocation || 'UAE'}
                  </Typography>
                </Box>
                {/* Country */}
                <Box sx={{ width: '100px' }}>
                  <Typography variant="body1" sx={{ flexGrow: 1, fontSize: '16px', fontWeight: 500, fontFamily: 'poppins', color: '#000' }}>
                    {event?.location || "Dubai"}
                  </Typography>
                  <Typography variant="caption" sx={{ fontSize: '10px', fontWeight: 400, fontFamily: 'poppins', color: '#333333' }}>
                    {event?.SubLocation || 'UAE'}
                  </Typography>
                </Box>
                {/* Status Chip */}
                <Box sx={{ width: '80px' }}>
                  {
                    event?.status === "approved" ? (
                      <Typography size="small"
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '18px', width: '134px', height: '36px', fontSize: '16px', fontWeight: 300, fontFamily: 'poppins', border: '1px solid #22D106', color: "#22D106" }} >
                        {event.status}

                      </Typography>
                    ) : event.status === "pending" ? (
                      <Typography size="small"
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '18px', width: '134px', height: '36px', fontSize: '16px', fontWeight: 300, fontFamily: 'poppins', border: '1px solid #F5BE30', color: "#F5BE30" }} >
                        {event.status}

                      </Typography>
                    ) : event.status === "rejected" ? (
                      <Typography size="small"
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '18px', width: '134px', height: '36px', fontSize: '16px', fontWeight: 300, fontFamily: 'poppins', border: '1px solid #FF1F00', color: "#FF1F00" }} >
                        {event.status}

                      </Typography>
                    ) :
                      (
                        <Typography size="small" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '18px', width: '134px', height: '36px', fontSize: '16px', fontWeight: 300, fontFamily: 'poppins' }} >
                          {event.status}
                        </Typography>
                      )
                  }
                </Box>
                {/* Actions */}
                <Stack direction="row" spacing={0.5} sx={{ width: '160px', justifyContent: 'flex-end' }}>
                  <IconButton size="small" sx={{ color: '#161616' }} onClick={() => { singlePage(event?.id) }}>
                    <Visibility fontSize="small" />
                  </IconButton>
                  <IconButton size="small" sx={{ color: '#161616' }}>
                    <DownloadIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" sx={{ color: '#161616' }}>
                    <Edit fontSize="small" />
                  </IconButton>
                  <IconButton size="small" sx={{ color: '#161616' }}>
                    <Delete fontSize="small" />
                  </IconButton>
                </Stack>
              </Box>
            </Paper>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}
