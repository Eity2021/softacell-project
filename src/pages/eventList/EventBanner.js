import {Box,Typography,} from "@mui/material";
import banner from "../../image/banner/eventBanner.png";
export default function EventBanner() {

  return (
<Box
  sx={{
    position: "relative",
    height: "276px",
    width: "100%",
    overflow: "hidden",
    textAlign: "center",
    color: "white",
      borderRadius:'10px',
  }}
>

  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      backgroundImage: `url(${banner})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
     borderRadius:'10px',
      filter: "blur(6px)", 
      zIndex: 0,
    }}
  />


  <Box
    sx={{
      position: "relative",
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.2)", 
        borderRadius:'10px',
      zIndex: 1,
    }}
  >
    <Box>
          <Typography  sx={{fontWeight:700,fontSize:'48px', fontFamily:'poppins'}}>Get your best deals with</Typography>
          <Typography sx={{fontWeight:700,fontSize:'48px', fontFamily:'poppins'}}>Propadaya Events!</Typography>
        </Box>
  </Box>
</Box>


  )
}
