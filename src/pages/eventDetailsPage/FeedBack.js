import { Box, Typography, TextField, Grid } from "@mui/material";
export default function FeedBack() {
  return (
    <Box sx={{ mt: 6 }}>
      <Grid container spacing={2}>
        <Grid size={2}>
          <Box sx={{ flexShrink: 0 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                color: "#001E33",
                fontSize: { xs: "18px", md: "20px" },
                fontFamily: "poppins",
                mb: 0.5,
              }}
            >
              Event
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                color: "#0195FF",
                fontSize: { xs: "28px", md: "32px" },
                fontFamily: "poppins",
                mt: -0.5,
              }}
            >
              Meeting Link
            </Typography>
          </Box>
        </Grid>

        <Grid size={10}>
          <Grid container spacing={2}>
            <Grid size={8}>
              <TextField
                variant="outlined"
                fullWeight
                placeholder="Type your feedback here"
                sx={{
                  width: "100%",
                  fontStyle: "italic",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    backgroundColor: "#fff",
                    "& fieldset": {
                      borderColor: "#CCCCCC",
                    },
                    "&:hover fieldset": {
                      borderColor: "#CCCCCC",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#CCCCCC",
                      borderWidth: "2px",
                    },
                  },
                  "& .MuiInputBase-input": {
                    fontSize: { xs: "14px", md: "20px" },
                    fontFamily: "poppins",
                    color: "#B3B3B3",
                    padding: "12px 14px",
                  },
                  flexGrow: 1,
                }}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid size={4}>
        
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
