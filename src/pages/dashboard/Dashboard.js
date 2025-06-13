import { useState,useEffect } from "react";
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
  Checkbox,
  FormGroup,
  FormControlLabel
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Calender from "../../image/icons/calenderIcon.png";
import { Upload } from "lucide-react";
import CustomSelect from "../../components/customSelect/CustomSelect";
import useDatePicker from "../../components/customDatePicker/useDatePicker";
import { useForm, Controller } from 'react-hook-form';

const categoriesData = 
{
"real_estate": [
"property_showcase_launch",
"investor_summit",
"developer_meetup",
"real_estate_expo_trade_show",
"government_legal_update"
],
"luxury_asset": [
"luxury_car_exhibition",
"yacht_jet_showcase",
"luxury_watch_collectible"
],
"educational_and_training": [
"real_estate_sales_training",
"investment_financial_workshop",
"luxury_market_insight",
"marketing_digital_growth_training"
],
"networking_and_business_growth": [
"vip_networking_event",
"b2b_collaboration_meetup",
"industry_panel_discussion"
],
"webinars_online": [
"live_real_estate_webinar",
"luxury_market_insight_webinar",
"developer_qa_session",
"training_academy_webinar"
],
"social_and_exclusive": [
"private_invitation_only_event",
"exclusive_property_tour",
"propadya_community_meetup"
]
}



const CustomCalendarIcon = () => (
  <img src={Calender} alt="calendar" style={{ width: 20, height: 20 }} />
);

export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subCategoryOptions, setSubCategoryOptions] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [showRegistrationLinkInput, setShowRegistrationLinkInput] = useState(false);
   const { control, handleSubmit } = useForm();
  const [preview, setPreview] = useState(null);
  const [subCategory, setSubCategory] = useState("");
  const datePicker = useDatePicker();

  useEffect(() => {
    if (selectedCategory) {
      setSubCategoryOptions(categoriesData[selectedCategory] || []);
      setSelectedSubCategory(''); 
    } else {
      setSubCategoryOptions([]);
      setSelectedSubCategory('');
    }
  }, [selectedCategory]);

  const [line, setLine] = useState('');
   console.log("line" , line)
  const handleChange = (event) => {
    setLine(event.target.value);
  };

  const onSubmit = (data) => {
    console.log("Submitted image file:", data.image[0]);
  };
  return (
    <Box sx={{ margin: "auto", p: 3, bgcolor: "white" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
  <Box sx={{display:'flex', gap:2}}>
        <Typography
        sx={{
          fontWeight: 600,
          color: "#F5BE30",
          fontSize: { xs: "12px", md: "14px" },
          fontFamily: "poppins",
          display:'flex',
          alignItems:'center'
        }}
      >
        You are creating event as
      </Typography>
   
               <TextField
               sx={{
                width:'30%'
               }}
          id="outlined-read-only-input"
          label="Not Changeable"
          defaultValue="Real Estate Developer"
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
        />
  </Box>
      <Box mb={4}>
        <Typography
          sx={{
            fontWeight: 600,
            color: "#0195FF",
            fontSize: { xs: "18px", md: "24px" },
            fontFamily: "poppins",
          }}
        >
          Event Cover Image
        </Typography>

        <Typography
          sx={{
            fontWeight: 600,
            color: "#30394D",
            fontSize: { xs: "13px", md: "16px" },
            fontFamily: "poppins",
            mt: 4,
          }}
        >
          Images
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            color: "#A8B0BF",
            fontSize: { xs: "12px", md: "14px" },
            fontFamily: "poppins",
          }}
        >
          Upload image file (max size 10 MB) and 16:9 ratio
        </Typography>


<Box>
              <Controller
        name="image"
        control={control}
        defaultValue={[]}
        render={({ field: { onChange, ...field } }) => (
          <Box
            component="label"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: 200,
              border: '2px dashed #ccc',
              borderRadius: 2,
              cursor: 'pointer',
              position: 'relative',
              textAlign: 'center',
              p: 2,
              mb: 2,
              mt:2,
              overflow: 'hidden',
            }}
          >
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                style={{ maxHeight: '30%', maxWidth: '30%', objectFit: 'contain' }}
              />

            ) : (
              <>
                <Typography variant="body1" fontWeight={600}>
                  Drag image or <span style={{ color: '#0195FF' }}>Browse</span>
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Max. file size: 3MB
                </Typography>
              </>
            )}
   <input
  type="file"
  accept="image/*"
  hidden
  onChange={(e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file)); 
      onChange(e.target.files); 
    }
  }}
/>
          </Box>
        )}
      />
</Box>

        <Box sx={{display:'flex', justifyContent:'space-between'}}>
          <Typography
            sx={{
              fontWeight: 600,
              color: "#0195FF",
              fontSize: { xs: "18px", md: "24px" },
              fontFamily: "poppins",
              mt: 5,
              borderBottom: "1px solid #0195FF",
              width: "24%",
              mb: 3,
            }}
          >
            Event Information
          </Typography>
          <FormGroup>
  <FormControlLabel control={<Checkbox 
             checked={showRegistrationLinkInput}
                onChange={(e) => setShowRegistrationLinkInput(e.target.checked)} />} 
                label="Registration Available" />
</FormGroup>
        </Box>

        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  fontFamily: "poppins",
                  color: "#161616",
                }}
              >
                Event Name <span style={{ color: "red" }}>*</span>
              </Typography>
            </Box>
          </Grid>
          <Grid size={9}>
            <Grid item xs={12} fullWidth>
              <Box
                sx={{ display: "flex", alignItems: "center", height: "100%" }}
              >
                <TextField
                  fullWidth
                  label="Type here"
                  required
                  variant="outlined"
                  InputLabelProps={{
                    required: false,
                    sx: {
                      fontStyle: "italic",
                      fontSize: "1.1rem",
                    },
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
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  fontFamily: "poppins",
                  color: "#161616",
                }}
              >
                Event Title* <span style={{ color: "red" }}>*</span>
              </Typography>
            </Box>
          </Grid>
          <Grid size={9}>
            <Grid item xs={12} fullWidth>
              <Box
                sx={{ display: "flex", alignItems: "center", height: "100%" }}
              >
                <TextField
                  fullWidth
                  label="Type here"
                  required
                  variant="outlined"
                  InputLabelProps={{
                    required: false,
                    sx: {
                      fontStyle: "italic",
                      fontSize: "1.1rem",
                    },
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
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  fontFamily: "poppins",
                  color: "#161616",
                }}
              >
                Event Short Description* <span style={{ color: "red" }}>*</span>
              </Typography>
            </Box>
          </Grid>

          <Grid size={9}>
            <Grid item xs={12} fullWidth>
              <Box
                sx={{ display: "flex", alignItems: "center", height: "100%" }}
              >
                <TextField
                  fullWidth
                  label="Type here"
                  required
                  variant="outlined"
                  InputLabelProps={{
                    required: false,
                    sx: {
                      fontStyle: "italic",
                      fontSize: "1.1rem",
                    },
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
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  fontFamily: "poppins",
                  color: "#161616",
                }}
              >
                Category* <span style={{ color: "red" }}>*</span>
              </Typography>
            </Box>
          </Grid>

          <Grid size={9}>
            <Grid container spacing={2}>
              <Grid size={6} fullWidth>
                <CustomSelect
                  label="Event category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  options={Object.keys(categoriesData)}
                />
              </Grid>

              <Grid size={6} fullWidth>
                <CustomSelect
                  label="Sub category"
                 value={selectedSubCategory}
                  onChange={(e) => setSelectedSubCategory(e.target.value)}
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
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  fontFamily: "poppins",
                  color: "#161616",
                }}
              >
                Event date <span style={{ color: "red" }}>*</span>
              </Typography>
            </Box>
          </Grid>

          <Grid size={9}>
            <Grid container spacing={2}>
              <Grid size={6} fullWidth>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={{
                      width:'100%'
                    }}
                    label="Starting Date"
                    value={datePicker.value}
                    onChange={datePicker.onChange}
                    format="YYYY-MM-DD"
                    slots={{
                      openPickerIcon: CustomCalendarIcon,
                    }}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid size={6} fullWidth>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                      sx={{
                      width:'100%'
                    }}
                    label="Ending Date"
                    value={datePicker.value}
                    onChange={datePicker.onChange}
                    format="YYYY-MM-DD"
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
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  fontFamily: "poppins",
                  color: "#161616",
                }}
              >
                Event Time* <span style={{ color: "red" }}>*</span>
              </Typography>
            </Box>
          </Grid>

          <Grid size={9}>
            <Grid container spacing={2}>
              <Grid size={6} fullWidth>
                <CustomSelect
                  label="Event category"
                   value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  options={Object.keys(categoriesData)}
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
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  fontFamily: "poppins",
                  color: "#161616",
                }}
              >
                Event Type* <span style={{ color: "red" }}>*</span>
              </Typography>
            </Box>
          </Grid>

          <Grid size={9}>
         
<FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Choose here</InputLabel>
  <Select
    labelId="id"
    id="select"
    placeholder="Choose here"
    label="event Type"
    onChange={handleChange}

         sx={{
            borderRadius: '8px',
            bgcolor: '#fff',
            '& .MuiSelect-select': {
              fontStyle: 'italic',
              color:'#aaa',
              padding: '18px',
              fontSize:"16px",
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ddd',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ccc',
            },
            '& .MuiSelect-icon': {
              color: '#2196f3',
            },
          }}
  >
    <MenuItem >Choose here</MenuItem>
    <MenuItem value="online">Online</MenuItem>
    <MenuItem value="offline">Offline</MenuItem>
  </Select>
</FormControl>


          </Grid>
        </Grid>
      </Box>
{
  line === "offline" && (
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  fontFamily: "poppins",
                  color: "#161616",
                }}
              >
                Enter Event location <span style={{ color: "red" }}>*</span>
              </Typography>
            </Box>
          </Grid>
          <Grid size={9}>
            <Grid item xs={12} fullWidth>
              <Box
                sx={{ display: "flex", alignItems: "center", height: "100%" }}
              >
                <TextField
                  fullWidth
                  label="Type here"
                  required
                  variant="outlined"
                  InputLabelProps={{
                    required: false,
                    sx: {
                      fontStyle: "italic",
                      fontSize: "1.1rem",
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
  )
}


{
  line === "offline" && (
        <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  fontFamily: "poppins",
                  color: "#161616",
                }}
              >
                Event location Link <span style={{ color: "red" }}>*</span>
              </Typography>
            </Box>
          </Grid>
          <Grid size={9}>
            <Grid item xs={12} fullWidth>
              <Box
                sx={{ display: "flex", alignItems: "center", height: "100%" }}
              >
                <TextField
                  fullWidth
                  label="Type here"
                  required
                  variant="outlined"
                  InputLabelProps={{
                    required: false,
                    sx: {
                      fontStyle: "italic",
                      fontSize: "1.1rem",
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>

  )
}





      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  fontFamily: "poppins",
                  color: "#161616",
                }}
              >
                Event Video link (YouTube)
                <span style={{ color: "red" }}>*</span>
              </Typography>
            </Box>
          </Grid>
          <Grid size={9}>
            <Grid item xs={12} fullWidth>
              <Box
                sx={{ display: "flex", alignItems: "center", height: "100%" }}
              >
                <TextField
                  fullWidth
                  label="Type here"
                  required
                  variant="outlined"
                  InputLabelProps={{
                    required: false,
                    sx: {
                      fontStyle: "italic",
                      fontSize: "1.1rem",
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>

{
  line === "online" && (
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  fontFamily: "poppins",
                  color: "#161616",
                }}
              >
                Event Meeting Link <span style={{ color: "red" }}>*</span>
              </Typography>
            </Box>
          </Grid>
          <Grid size={9}>
            <Grid item xs={12} fullWidth>
              <Box
                sx={{ display: "flex", alignItems: "center", height: "100%" }}
              >
                <TextField
                  fullWidth
                  label="Type here"
                  required
                  variant="outlined"
                  InputLabelProps={{
                    required: false,
                    sx: {
                      fontStyle: "italic",
                      fontSize: "1.1rem",
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
  )
}


{
  showRegistrationLinkInput && (
          <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  fontFamily: "poppins",
                  color: "#161616",
                }}
              >
                Registration Link<span style={{ color: "red" }}>*</span>
              </Typography>
            </Box>
          </Grid>
          <Grid size={9}>
            <Grid item xs={12} fullWidth>
              <Box
                sx={{ display: "flex", alignItems: "center", height: "100%" }}
              >
                <TextField
                  fullWidth
                  label="Type here"
                  required
                  variant="outlined"
                  InputLabelProps={{
                    required: false,
                    sx: {
                      fontStyle: "italic",
                      fontSize: "1.1rem",
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
  )
}


      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  fontFamily: "poppins",
                  color: "#161616",
                }}
              >
                Country* <span style={{ color: "red" }}>*</span>
              </Typography>
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
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  fontFamily: "poppins",
                  color: "#161616",
                }}
              >
                District* <span style={{ color: "red" }}>*</span>
              </Typography>
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
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  fontFamily: "poppins",
                  color: "#161616",
                }}
              >
                City* <span style={{ color: "red" }}>*</span>
              </Typography>
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

      <Box>
        <Typography
          sx={{
            fontWeight: 600,
            color: "#0195FF",
            fontSize: { xs: "18px", md: "24px" },
            fontFamily: "poppins",
            mt: 5,
            borderBottom: "1px solid #0195FF",
            width: "27%",
            mb: 3,
          }}
        >
          Contact Person Information
        </Typography>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  fontFamily: "poppins",
                  color: "#161616",
                }}
              >
                Name* <span style={{ color: "red" }}>*</span>
              </Typography>
            </Box>
          </Grid>
          <Grid size={9}>
            <Grid item xs={12} fullWidth>
              <Box
                sx={{ display: "flex", alignItems: "center", height: "100%" }}
              >
                <TextField
                  fullWidth
                  label="Type here"
                  required
                  variant="outlined"
                  InputLabelProps={{
                    required: false,
                    sx: {
                      fontStyle: "italic",
                      fontSize: "1.1rem",
                    },
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
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  fontFamily: "poppins",
                  color: "#161616",
                }}
              >
                Phone* <span style={{ color: "red" }}>*</span>
              </Typography>
            </Box>
          </Grid>
          <Grid size={9}>
            <Grid item xs={12} fullWidth>
              <Box
                sx={{ display: "flex", alignItems: "center", height: "100%" }}
              >
                <TextField
                  fullWidth
                  label="Type here"
                  required
                  variant="outlined"
                  InputLabelProps={{
                    required: false,
                    sx: {
                      fontStyle: "italic",
                      fontSize: "1.1rem",
                    },
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
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  fontFamily: "poppins",
                  color: "#161616",
                }}
              >
                Email* <span style={{ color: "red" }}>*</span>
              </Typography>
            </Box>
          </Grid>
          <Grid size={9}>
            <Grid item xs={12} fullWidth>
              <Box
                sx={{ display: "flex", alignItems: "center", height: "100%" }}
              >
                <TextField
                  fullWidth
                  label="Type here"
                  required
                  variant="outlined"
                  InputLabelProps={{
                    required: false,
                    sx: {
                      fontStyle: "italic",
                      fontSize: "1.1rem",
                    },
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
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "20px",
                  fontFamily: "poppins",
                  color: "#161616",
                }}
              >
                Company Name* <span style={{ color: "red" }}>*</span>
              </Typography>
            </Box>
          </Grid>
          <Grid size={9}>
            <Grid item xs={12} fullWidth>
              <Box
                sx={{ display: "flex", alignItems: "center", height: "100%" }}
              >
                <TextField
                  fullWidth
                  label="Type here"
                  required
                  variant="outlined"
                  InputLabelProps={{
                    required: false,
                    sx: {
                      fontStyle: "italic",
                      fontSize: "1.1rem",
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>


<Box>
  
        <Typography
          sx={{
            fontWeight: 600,
            color: "#30394D",
            fontSize: { xs: "13px", md: "16px" },
            fontFamily: "poppins",
            mt: 4,
          }}
        >
          Images
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            color: "#A8B0BF",
            fontSize: { xs: "12px", md: "14px" },
            fontFamily: "poppins",
          }}
        >
          Upload image file (max size 10 MB) and 16:9 ratio
        </Typography>

</Box>
<Box>
  

              <Controller
        name="perssonImage"
        control={control}
        defaultValue={[]}
        render={({ field: { onChange, ...field } }) => (
          <Box
            component="label"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: 200,
              border: '2px dashed #ccc',
              borderRadius: 2,
              cursor: 'pointer',
              position: 'relative',
              textAlign: 'center',
              p: 2,
              mb: 2,
              mt:2,
              overflow: 'hidden',
            }}
          >
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                style={{ maxHeight: '50%', maxWidth: '50%', objectFit: 'contain' }}
              />

            ) : (
              <>
                <Typography variant="body1" fontWeight={600}>
                  Drag image or <span style={{ color: '#0195FF' }}>Browse</span>
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Max. file size: 3MB
                </Typography>
              </>
            )}
   <input
  type="file"
  accept="image/*"
  hidden
  onChange={(e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file)); 
      onChange(e.target.files); 
    }
  }}
/>
          </Box>
        )}
      />
</Box>

      <Box   sx={{display:"flex", justifyContent:'flex-end',gap:2 ,ml:2}}>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              width: "400px",
              height: "60px",
              borderRadius: "12px",
              backgroundColor: "#F4F8EE",
              fontWeight: 400,
              fontSize: "18px",
              fontFamily: "poppins",
              textTransform: 'lowercase'
            }}
          >
            Save draft and Exit
          </Button>
          <Button
          type="submit"
            variant="contained"
            fullWidth
            sx={{
              width: "400px",
              height: "60px",
              borderRadius: "12px",
              backgroundColor: "#0195FF",
              fontWeight: 400,
              fontSize: "18px",
              fontFamily: "poppins",
              textTransform: 'lowercase'
            }}
          >
            Submit
          </Button>
    </Box>
      </form>

    </Box>
  );
}
