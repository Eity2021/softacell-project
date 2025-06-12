import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormControl,
  Paper,

} from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Calender from "../../image/icons/calenderIcon.png";
import { Upload } from 'lucide-react';
import CustomSelect from '../../components/customSelect/CustomSelect';
import useDatePicker from '../../components/customDatePicker/useDatePicker';

const CustomCalendarIcon = () => (
  <img
    src={Calender}
    alt="calendar"
    style={{ width: 20, height: 20 }}
  />
);


export default function Dashboard() {
  const [subCategory, setSubCategory] = useState('');
  const datePicker = useDatePicker();
  const subCategoryOptions = [
    { value: 'design', label: 'Design' },
    { value: 'development', label: 'Development' },
    { value: 'marketing', label: 'Marketing' },
  ];



  return (
    <Box sx={{ margin: 'auto', p: 3, bgcolor: 'white' }}>
      <Typography variant="h5" gutterBottom>
        Event Management
      </Typography>

      <Box mb={4}>
        <Typography variant="h6" color="primary">
          Event Cover Image
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Upload image file (max size 10 MB) and 16:9 ratio
        </Typography>

        <Paper
          elevation={0}
          variant="outlined"
          // onDragEnter={handleDrag}
          // onDragLeave={handleDrag}
          // onDragOver={handleDrag}
          // onDrop={handleDrop}
          sx={{
            p: 6,
            mt: 2,
            textAlign: 'center',
            borderStyle: 'dashed',
            // // borderColor: dragActive ? 'primary.main' : 'grey.400',
            // backgroundColor: dragActive ? 'blue.50' : 'inherit',
          }}
        >
          <Upload style={{ marginBottom: '8px' }} />
          <Typography variant="body2">
            <strong>Drag image</strong> or <Button variant="text">Browse</Button>
          </Typography>
        </Paper>

      </Box>

      <Box>
        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <Typography sx={{ fontWeight: 500, fontSize: '20px', fontFamily: "poppins", color: '#161616' }}>Event Name <span style={{ color: "red" }}>*</span></Typography>
            </Box>

          </Grid>
          <Grid size={9}>
            <Grid item xs={12} fullWidth>
              <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <TextField fullWidth
                  label="Type here"
                  required
                  variant="outlined"
                  InputLabelProps={{
                    required: false,
                    sx: {
                      fontStyle: 'italic',
                      fontSize: '1.1rem',
                    }
                  }}
                />
              </Box>
            </Grid>
          </Grid>



        </Grid>
      </Box>


      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', }}>
              <Typography sx={{ fontWeight: 500, fontSize: '20px', fontFamily: "poppins", color: '#161616' }}>Event Title* <span style={{ color: "red" }}>*</span></Typography>
            </Box>

          </Grid>
          <Grid size={9}>
            <Grid item xs={12} fullWidth>
              <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <TextField fullWidth
                  label="Type here"
                  required
                  variant="outlined"
                  InputLabelProps={{
                    required: false,
                    sx: {
                      fontStyle: 'italic',
                      fontSize: '1.1rem',
                    }
                  }}
                />
              </Box>
            </Grid>
          </Grid>



        </Grid>
      </Box>


      <Box sx={{ mt: 2 }}>

        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <Typography sx={{ fontWeight: 500, fontSize: '20px', fontFamily: "poppins", color: '#161616' }}>Event Short Description* <span style={{ color: "red" }}>*</span></Typography>
            </Box>

          </Grid>


          <Grid size={9}>
            <Grid item xs={12} fullWidth>
              <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <TextField fullWidth
                  label="Type here"
                  required
                  variant="outlined"
                  InputLabelProps={{
                    required: false,
                    sx: {
                      fontStyle: 'italic',
                      fontSize: '1.1rem',
                    }
                  }}
                />
              </Box>
            </Grid>
          </Grid>



        </Grid>
      </Box>



      <Box sx={{ mt: 2 }}>

        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <Typography sx={{ fontWeight: 500, fontSize: '20px', fontFamily: "poppins", color: '#161616' }}>Category* <span style={{ color: "red" }}>*</span></Typography>
            </Box>

          </Grid>


          <Grid size={9}>
            <Grid container spacing={2}>
              <Grid size={6} fullWidth>
                <CustomSelect
                  label="Event category"
                  value={subCategory}
                  // onChange={(e) => setSubCategory(e.target.value)}
                  options={subCategoryOptions}
                />
              </Grid>


              <Grid size={6} fullWidth>
                <CustomSelect
                  label="Sub category"
                  value={subCategory}
                  // onChange={(e) => setSubCategory(e.target.value)}
                  options={subCategoryOptions}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>



      <Box sx={{ mt: 2 }}>

        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <Typography sx={{ fontWeight: 500, fontSize: '20px', fontFamily: "poppins", color: '#161616' }}>Category* <span style={{ color: "red" }}>*</span></Typography>
            </Box>

          </Grid>


          <Grid size={9}>
            <Grid container spacing={2}>
              <Grid size={6} fullWidth>
                <CustomSelect
                  label="Event category"
                  value={subCategory}
                  // onChange={(e) => setSubCategory(e.target.value)}
                  options={subCategoryOptions}
                />
              </Grid>


              <Grid size={6} fullWidth>
                <CustomSelect
                  label="Sub category"
                  value={subCategory}
                  // onChange={(e) => setSubCategory(e.target.value)}
                  options={subCategoryOptions}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>



      <Box sx={{ mt: 2 }}>

        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <Typography sx={{ fontWeight: 500, fontSize: '20px', fontFamily: "poppins", color: '#161616' }}>Event date <span style={{ color: "red" }}>*</span></Typography>
            </Box>

          </Grid>


          <Grid size={9}>
            <Grid container spacing={2}>
              <Grid size={6} fullWidth>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Starting Date"
            value={datePicker.value}
            onChange={datePicker.onChange}
            format="YYYY-MM-DD"
            slotProps={datePicker.getSlotProps('Choose here')}
              slots={{
          openPickerIcon: CustomCalendarIcon, 
        }}
          />
        </LocalizationProvider>
              </Grid>


              <Grid size={6} fullWidth>
             <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
            label="Ending Date"
            value={datePicker.value}
            onChange={datePicker.onChange}
            format="YYYY-MM-DD"
            slotProps={datePicker.getSlotProps('Choose here')}
              slots={{
          openPickerIcon: CustomCalendarIcon, 
        }}
          />
    </LocalizationProvider>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      



      <Box sx={{ mt: 2 }}>

        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <Typography sx={{ fontWeight: 500, fontSize: '20px', fontFamily: "poppins", color: '#161616' }}>Event Type* <span style={{ color: "red" }}>*</span></Typography>
            </Box>

          </Grid>


          <Grid size={9}>

      
                <CustomSelect
                 label="Event Type"
                  value={subCategory}
                  // onChange={(e) => setSubCategory(e.target.value)}
                  options={subCategoryOptions}
                />

          </Grid>
        </Grid>
      </Box>






      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', }}>
              <Typography sx={{ fontWeight: 500, fontSize: '20px', fontFamily: "poppins", color: '#161616' }}>Enter Event location* <span style={{ color: "red" }}>*</span></Typography>
            </Box>

          </Grid>
          <Grid size={9}>
            <Grid item xs={12} fullWidth>
              <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <TextField fullWidth
                  label="Type here"
                  required
                  variant="outlined"
                  InputLabelProps={{
                    required: false,
                    sx: {
                      fontStyle: 'italic',
                      fontSize: '1.1rem',
                    }
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', }}>
              <Typography sx={{ fontWeight: 500, fontSize: '20px', fontFamily: "poppins", color: '#161616' }}>Event location Link* <span style={{ color: "red" }}>*</span></Typography>
            </Box>

          </Grid>
          <Grid size={9}>
            <Grid item xs={12} fullWidth>
              <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <TextField fullWidth
                  label="Type here"
                  required
                  variant="outlined"
                  InputLabelProps={{
                    required: false,
                    sx: {
                      fontStyle: 'italic',
                      fontSize: '1.1rem',
                    }
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', }}>
              <Typography sx={{ fontWeight: 500, fontSize: '20px', fontFamily: "poppins", color: '#161616' }}>Event Video link (YouTube)* <span style={{ color: "red" }}>*</span></Typography>
            </Box>
          </Grid>
          <Grid size={9}>
            <Grid item xs={12} fullWidth>
              <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <TextField fullWidth
                  label="Type here"
                  required
                  variant="outlined"
                  InputLabelProps={{
                    required: false,
                    sx: {
                      fontStyle: 'italic',
                      fontSize: '1.1rem',
                    }
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', }}>
              <Typography sx={{ fontWeight: 500, fontSize: '20px', fontFamily: "poppins", color: '#161616' }}>Event Meeting Link* <span style={{ color: "red" }}>*</span></Typography>
            </Box>
          </Grid>
          <Grid size={9}>
            <Grid item xs={12} fullWidth>
              <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <TextField fullWidth
                  label="Type here"
                  required
                  variant="outlined"
                  InputLabelProps={{
                    required: false,
                    sx: {
                      fontStyle: 'italic',
                      fontSize: '1.1rem',
                    }
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', }}>
              <Typography sx={{ fontWeight: 500, fontSize: '20px', fontFamily: "poppins", color: '#161616' }}>Registration Link* <span style={{ color: "red" }}>*</span></Typography>
            </Box>
          </Grid>
          <Grid size={9}>
            <Grid item xs={12} fullWidth>
              <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <TextField fullWidth
                  label="Type here"
                  required
                  variant="outlined"
                  InputLabelProps={{
                    required: false,
                    sx: {
                      fontStyle: 'italic',
                      fontSize: '1.1rem',
                    }
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>



      <Box sx={{ mt: 2 }}>

        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <Typography sx={{ fontWeight: 500, fontSize: '20px', fontFamily: "poppins", color: '#161616' }}>Country* <span style={{ color: "red" }}>*</span></Typography>
            </Box>

          </Grid>


          <Grid size={9}>

      
                <CustomSelect
                 label="Country"
                  value={subCategory}
                  // onChange={(e) => setSubCategory(e.target.value)}
                  options={subCategoryOptions}
                />

          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 2 }}>

        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <Typography sx={{ fontWeight: 500, fontSize: '20px', fontFamily: "poppins", color: '#161616' }}>District* <span style={{ color: "red" }}>*</span></Typography>
            </Box>

          </Grid>


          <Grid size={9}>

      
                <CustomSelect
                 label="District"
                  value={subCategory}
                  // onChange={(e) => setSubCategory(e.target.value)}
                  options={subCategoryOptions}
                />

          </Grid>
        </Grid>
      </Box>


      <Box sx={{ mt: 2 }}>

        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <Typography sx={{ fontWeight: 500, fontSize: '20px', fontFamily: "poppins", color: '#161616' }}>City* <span style={{ color: "red" }}>*</span></Typography>
            </Box>
          </Grid>
          <Grid size={9}>
                <CustomSelect
                 label="City"
                  value={subCategory}
                  // onChange={(e) => setSubCategory(e.target.value)}
                  options={subCategoryOptions}
                />

          </Grid>
        </Grid>
      </Box>

    </Box>
  )
}
