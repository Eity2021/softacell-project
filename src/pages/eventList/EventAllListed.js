
import {
  Box, Paper, Typography, Stack, IconButton,
} from '@mui/material';
import {
  Eye as Visibility,
  DownloadIcon,
  Pencil as Edit,
  Trash2 as Delete,
} from "lucide-react";

const events = [
  {
    id: '01',
    eventName: 'Ajmon Brokers Event',
    poweredBy: 'RAK Properties',
    eventDate: 'March 18, 2025',
    eventTime: '10:00 a.m. - 7:00 p.m.',
    eventLocation: 'Dubai',
    eventSubLocation: 'Al Ain',
    country: 'UAE',
    status: 'Approved',
    borderColor: 'transparent',
  },
  {
    id: '02',
    eventName: 'Ajmon Brokers Event',
    poweredBy: 'RAK Properties',
    eventDate: 'March 18, 2025',
    eventTime: '10:00 a.m. - 7:00 p.m.',
    eventLocation: 'Dubai',
    eventSubLocation: 'Al Ain',
    country: 'UAE',
    status: 'Pending',
    borderColor: 'transparent',
  },
  {
    id: '03',
    eventName: 'Ajmon Brokers Event',
    poweredBy: 'RAK Properties',
    eventDate: 'March 18, 2025',
    eventTime: '10:00 a.m. - 7:00 p.m.',
    eventLocation: 'Dubai',
    eventSubLocation: 'Al Ain',
    country: 'UAE',
    status: 'Rejected',
    borderColor: '#EF5350',
  },
  {
    id: '04',
    eventName: 'Ajmon Brokers Event',
    poweredBy: 'RAK Properties',
    eventDate: 'March 18, 2025',
    eventTime: '10:00 a.m. - 7:00 p.m.',
    eventLocation: 'Dubai',
    eventSubLocation: 'Al Ain',
    country: 'UAE',
    status: 'Approved',
    borderColor: '#42A5F5',
  },
  {
    id: '05',
    eventName: 'Ajmon Brokers Event',
    poweredBy: 'RAK Properties',
    eventDate: 'March 18, 2025',
    eventTime: '10:00 a.m. - 7:00 p.m.',
    eventLocation: 'Dubai',
    eventSubLocation: 'Al Ain',
    country: 'UAE',
    status: 'Approved',
    borderColor: 'transparent',
  },
];


export default function EventAllListed() {
  return (
    <Box >
      <Box sx={{ p: 4}}>
        {/* Table Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
            px: 2,
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
          {events.map((event) => (
            <Paper
              key={event.id}
              sx={{
                p: 2,
                borderRadius: '8px',
                border: event.borderColor !== 'transparent' ? `1px solid ${event.borderColor}` : '1px solid transparent',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)', 
                '&:hover': {
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
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


                <Typography variant="body1" sx={{ fontWeight: 'medium', width: '15px'  }}>
                  {event.id}
                </Typography>

                {/* Event Name */}
                <Box sx={{  width: '200px'}}>
                  <Typography variant="body1" sx={{ fontSize: '16px', fontWeight: 500, fontFamily: 'poppins', color: '#000' }}>
                    {event.eventName}
                  </Typography>
                  <Typography variant="caption" sx={{ fontSize: '10px', fontWeight: 400, fontFamily: 'poppins', color: '#666666' }}>
                    Powered by {event.poweredBy}
                  </Typography>
                </Box>

                {/* Event Date */}
                <Box sx={{ width: '150px'}}>
                  <Typography variant="body1" sx={{ fontSize: '16px', fontWeight: 500, fontFamily: 'poppins', color: '#000' }}>
                    {event.eventDate}
                  </Typography>
                  <Typography variant="caption" sx={{ fontSize: '10px', fontWeight: 400, fontFamily: 'poppins', color: '#333333' }}>
                    {event.eventTime}
                  </Typography>
                </Box>


                {/* Event Location */}
                <Box sx={{ width: '200px' }}>
                  <Typography variant="body1" sx={{ fontSize: '16px', fontWeight: 500, fontFamily: 'poppins', color: '#000' }}>
                    {event.eventLocation}
                  </Typography>
                  <Typography variant="caption" sx={{ fontSize: '10px', fontWeight: 400, fontFamily: 'poppins', color: '#333333' }}>
                    {event.eventSubLocation}
                  </Typography>
                </Box>
                {/* Country */}
                <Box sx={{ width: '100px'}}>
                  <Typography variant="body1" sx={{ flexGrow: 1, fontSize: '16px', fontWeight: 500, fontFamily: 'poppins', color: '#000' }}>
                    {event.eventLocation}
                  </Typography>
                  <Typography variant="caption" sx={{ fontSize: '10px', fontWeight: 400, fontFamily: 'poppins', color: '#333333' }}>
                    {event.country}
                  </Typography>
                </Box>
                {/* Status Chip */}
                <Box sx={{  width: '80px'}}>
                  {
                    event.status === "Approved" ? (
                      <Typography size="small"
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '18px', width: '134px', height: '36px', fontSize: '16px', fontWeight: 300, fontFamily: 'poppins', border: '1px solid #22D106', color: "#22D106" }} >
                        {event.status}

                      </Typography>
                    ) : event.status === "Pending" ? (
                      <Typography size="small"
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '18px', width: '134px', height: '36px', fontSize: '16px', fontWeight: 300, fontFamily: 'poppins', border: '1px solid #F5BE30', color: "#F5BE30" }} >
                        {event.status}

                      </Typography>
                    ) : event.status === "Rejected" ? (
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
                  <IconButton size="small" sx={{ color: '#9E9E9E' }}>
                    <Visibility fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color='#161616'>
                    <DownloadIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color='#161616'>
                    <Edit fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color='#161616'>
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
