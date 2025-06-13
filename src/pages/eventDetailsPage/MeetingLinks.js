import { Box, Typography, TextField, Button,Grid} from '@mui/material';
 export default function  MeetingLinks() {
  return (
  <Box sx={{ mt:4}}>
<Grid container spacing={2}>
  <Grid size={3}>
          <Box sx={{ flexShrink: 0 }}> 
            <Typography
              variant="h5" 
              sx={{
                fontWeight: 600,
                color: '#001E33',
                fontSize: { xs: '18px', md: '20px' },
                fontFamily: 'poppins',
                mb: 0.5,
              }}
            >
              Event
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                color: '#0195FF', 
                fontSize: { xs: '28px', md: '32px' },
                fontFamily: 'poppins',
                mt: -0.5, 
              }}
            >
              Meeting Link
            </Typography>
          </Box>
  </Grid>



  <Grid size={9}>

<Grid container spacing={2}>
  <Grid size={8}>
       <TextField
            variant="outlined"
            fullWeight
            defaultValue="meet.google.com/abc/defg/hij" 
            sx={{
                width:'100%',
                fontStyle: 'italic',
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                backgroundColor: '#fff',
                '& fieldset': {
                  borderColor: '#CCCCCC', 
                },
                '&:hover fieldset': {
                  borderColor: '#CCCCCC', 
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#CCCCCC', 
                  borderWidth: '2px',
                },
              },
              '& .MuiInputBase-input': {
                fontSize: { xs: '14px', md: '20px' },
                fontFamily: 'poppins',
                color: '#56B8FF',
                padding: '12px 14px',
              },
              flexGrow: 1, 
            }}
            InputProps={{
                readOnly: true, 
            }}
          />
  </Grid>
  <Grid size={4}>
         <Button
            variant="contained"
            sx={{
              backgroundColor: '#0195FF', 
              color: '#fff',
              textTransform: 'none',
              fontWeight: 500,
              fontSize: { xs: '12px', md: '16px' },
              borderRadius: '8px',
              px: { xs: 3, md: 14 }, 
              py: { xs: 1.2, md: 1.5 }, 
              '&:hover': {
                backgroundColor: '#0056b3', 
              },
              flexShrink: 0, 
              width: { xs: '100%', sm: 'auto' }, 
            }}
          >
            Register Now
          </Button>
  </Grid>

</Grid>
  </Grid>

</Grid>


        </Box>
  );
};























