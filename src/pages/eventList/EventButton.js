import {
  Box,
  Grid,
  MenuItem,
  Button,
  TextField,
  InputAdornment,
  Select,
} from "@mui/material";
import { Search } from "lucide-react";
import { useState } from "react";

export default function EventButton() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 6, md: 8 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 6, md: 3 }}>
            <TextField
              fullWidth
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search color="#2196f3" />
                  </InputAdornment>
                ),
                sx: {
                    borderRadius: "33px", 
                  borderColor: "1px solid #0195FF" ,
                  borderColor: "#2196f3",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#2196f3",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#2196f3",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#2196f3",
                    borderWidth: "1px",
                  },
                  color: "#2196f3",
                },
              }}
            />
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Select
              displayEmpty
              fullWidth
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              sx={{
                pr: 4,
                borderRadius: "50px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2196f3",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2196f3",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2196f3",
                  borderWidth: "1px",
                },

                "& .MuiSelect-select": {
                  color: "#2196f3",
                },

                "& .MuiSelect-icon": {
                  color: "#2196f3",
                },
              }}
            >
              <MenuItem value="">Select Category</MenuItem>
              <MenuItem value="dubai">Dubai</MenuItem>
              <MenuItem value="uae">UAE</MenuItem>
              <MenuItem value="usa">USA</MenuItem>
            </Select>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Select
              displayEmpty
              fullWidth
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              sx={{
                pr: 4,
                borderRadius: "50px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2196f3",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2196f3",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2196f3",
                  borderWidth: "1px",
                },

                "& .MuiSelect-select": {
                  color: "#2196f3",
                },

                "& .MuiSelect-icon": {
                  color: "#2196f3",
                },
              }}
            >
              <MenuItem value="">Select Sub Category</MenuItem>
              <MenuItem value="business">Business</MenuItem>
              <MenuItem value="technology">Technology</MenuItem>
              <MenuItem value="education">Education</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={{ xs: 6, md: 4 }}>
        <Box   sx={{display:"flex", gap:2 ,ml:2}}>
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
            }}
          >
            Event Calendar
          </Button>
          <Button
            variant="contained"
            fullWidth
            sx={{
              width: "218px",
              height: "60px",
              borderRadius: "12px",
              backgroundColor: "#0195FF",
              fontWeight: 400,
              fontSize: "18px",
              fontFamily: "poppins",
            }}
          >
            Create Event
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
