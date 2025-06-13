import React from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import { MapPin, Star } from "lucide-react";
import MeetingLinks from "./MeetingLinks";
export default function Videos() {
  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Grid container spacing={10}>
        <Grid size={5}>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 500,
                color: "#161616",
                fontSize: { xs: "22px", md: "32px" },
                fontFamily: "poppins",
                mb: 0.5,
              }}
            >
              Event Videos
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 400,
                color: "#161616",
                fontSize: { xs: "13px", md: "16px" },
                fontFamily: "poppins",
                mb: 2,
              }}
            >
              For Better Understand
            </Typography>

            <Box
              sx={{
                width: "100%",
                height: { xs: "200px", sm: "256px", md: "256px" },
                backgroundColor: "#000",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1&modestbranding=1&rel=0&showinfo=0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video Placeholder"
              ></iframe>

              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: 8, sm: 12 },
                  left: { xs: 8, sm: 12 },
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "rgba(0,0,0,0.6)",
                  borderRadius: "4px",
                  px: 1.5,
                  py: 0.5,
                  fontSize: { xs: "0.7rem", sm: "0.85rem" },
                  fontWeight: 500,
                }}
              >
                Azura Residences
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: { xs: 50, sm: 70 },
                  height: { xs: 50, sm: 70 },
                  backgroundColor: "rgba(255,0,0,0.8)",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    width: 0,
                    height: 0,
                    borderLeft: {
                      xs: "15px solid #fff",
                      sm: "20px solid #fff",
                    },
                    borderTop: {
                      xs: "10px solid transparent",
                      sm: "12px solid transparent",
                    },
                    borderBottom: {
                      xs: "10px solid transparent",
                      sm: "12px solid transparent",
                    },
                    marginLeft: { xs: "3px", sm: "5px" },
                  }}
                />
              </Box>
              <Typography
                sx={{
                  position: "absolute",
                  bottom: { xs: 8, sm: 12 },
                  right: { xs: 8, sm: 12 },
                  color: "#fff",
                  fontSize: { xs: "0.65rem", sm: "0.75rem" },
                  backgroundColor: "rgba(0,0,0,0.6)",
                  borderRadius: "4px",
                  px: 0.8,
                  py: 0.3,
                }}
              >
                Watch on YouTube
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid size={7}>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                color: "#161616",
                fontSize: { xs: "22px", md: "32px" },
                fontFamily: "poppins",
                mb: 0.5,
              }}
            >
              <MapPin
                sx={{ verticalAlign: "middle", mr: 1, color: "#3f51b5" }}
              />
              Event Location
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#161616",
                fontSize: { xs: "13px", md: "16px" },
                fontFamily: "poppins",
                mb: 2,
                ml: 3,
              }}
            >
              Find our place easily
            </Typography>

            <Box
              sx={{
                width: "100%",
                height: { xs: "250px", sm: "2560px", md: "256px" },
                backgroundColor: "#e0e0e0",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.170669280654!2d55.27961121498189!3d25.26922988386348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f432a90000001%3A0x8f2a2e4c0a5b8a0!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1678880000000!5m2!1sen!2sae"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Event Location Map"
              ></iframe>

              <Box
                sx={{
                  position: "absolute",
                  top: { xs: 8, sm: 16 },
                  left: { xs: 8, sm: 16 },
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  p: { xs: 1.5, sm: 2 },
                  boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
                  minWidth: { xs: "calc(100% - 32px)", sm: "250px" },
                  maxWidth: "500px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    color: "#161616",
                    fontSize: { xs: "12px", sm: "12px" },
                  }}
                >
                  Azura By IGO
                </Typography>
                <Box sx={{ display: "flex", gap: 3 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#666",
                      fontSize: { xs: "12px", sm: "12px" },
                      mt: 0.5,
                    }}
                  >
                    77JW-9JF-Dubai Pro - Dubai Islands -Front -
                    <br /> Dubai United Arab Emirates
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{
                      ml: 1,
                      backgroundColor: "transparent",
                      color: "#0195FF",
                      textTransform: "none",
                      fontWeight: 600,
                      fontSize: { xs: "0.8rem", sm: "0.9rem" },
                      boxShadow: "none",
                      px: { xs: 1.5, sm: 2 },

                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    Directions
                  </Button>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      sx={{
                        fontSize: "12px",
                        color: i < 5 ? "#F5C60D" : "#F5C60D",
                      }}
                      color="#F5C60D"
                      size={12}
                    />
                  ))}
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#0195FF",
                      ml: 0.5,
                      fontSize: { xs: "0.75rem", sm: "0.85rem" },
                    }}
                  >
                    5.0 • 2 reviews
                  </Typography>
                </Box>
                <Button
                  variant="text"
                  sx={{
                    mt: 1.5,
                    color: "#0195FF",
                    textTransform: "none",
                    fontWeight: 500,
                    fontSize: { xs: "12px", sm: "12px" },
                    p: 0,
                    minWidth: 0,
                  }}
                >
                  View larger map
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box>
        <MeetingLinks></MeetingLinks>
      </Box>
    </Box>
  );
}
