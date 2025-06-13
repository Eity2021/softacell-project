import {
    Box,
    Typography,
    Button,
    useMediaQuery,
    useTheme,
    Stack,
} from '@mui/material';
import person from "../../image/banner/person.png";
import vector from "../../image/banner/Vector.png";
import whatsApp from "../../image/icons/whatsapp.png";
import phone from "../../image/icons/phone.png";

export default function ContactPerson({perEvent}) {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <> 
        
            <Box sx={{ mt: 6 }}>
            <Typography sx={{
                color: '#161616',
                fontFamily: 'poppins', fontWeight: 500, fontSize: { xs: '20px', md: '32px' },
            }}
            >
                Meet your Contact Person & Details
            </Typography>
            <Box>
                <img src={vector} alt="" style={{ width: "30%", height: "30%" }} />
            </Box>

            <Box
                elevation={4}
                sx={{
                    width: '100%',
                    p: 4,
                    borderRadius: 4,
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'center' : 'flex-end',
                    gap: 4,
                }}
            >


                {/* Contact Details */}
                <Box zIndex={1} flex={1} textAlign={isMobile ? 'center' : 'left'}>

                    <Box/>
                    <Typography sx={{
                        fontWeight: 500,
                        fontSize: { xs: '30px', md: '48px' },
                        fontFamily: 'poppins', color: '#0195FF'
                    }}>
                        Jessica Daniel
                    </Typography>
                    <Typography vsx={{
                        fontWeight: 400,
                        fontSize: { xs: '18px', md: '24px' },
                        fontFamily: 'poppins', color: '#666666'
                    }} gutterBottom>
                        Your Property Expert
                    </Typography>

                    <Stack spacing={1} mt={2} color="text.primary">
                        <Typography sx={{
                            fontWeight: 400,
                            fontSize: '24px',
                            fontFamily: 'poppins', color: '#333333'
                        }}>
                            <span
                                style={{
                                    color: '#666666',
                                    fontFamily: 'poppins'
                                }}>Phone:</span> 0952480820</Typography>
                        <Typography sx={{
                            fontWeight: 400,
                            fontSize: '24px',
                            fontFamily: 'poppins', color: '#333333'
                        }}><span style={{
                            color: '#666666',
                            fontFamily: 'poppins'
                        }}>Email:</span> emailaddress@gmail.com</Typography>
                        <Typography sx={{
                            fontWeight: 400,
                            fontSize: '24px',
                            fontFamily: 'poppins', color: '#333333'
                        }}><span style={{
                            color: '#666666',
                            fontFamily: 'poppins'
                        }}>Company:</span> Royal Property</Typography>
                    </Stack>

                    <Stack direction={isMobile ? 'column' : 'row'} spacing={2} mt={4} mb={8}>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<img src={whatsApp} alt="" />}
                            sx={{ textTransform: 'none', background: '#0195FF', px: 10, py: 1 }}
                        >
                            WhatsApp
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<img src={phone} alt="" />}
                            sx={{ textTransform: 'none', px: 10, py: 1 }}
                        >
                            Call
                        </Button>
                    </Stack>
                </Box>

                {/* Profile Image */}
                <Box
                    sx={{

                        flexShrink: 0,
                        borderRadius: 4,

                        overflow: 'hidden',
                        zIndex: 1,
                    }}
                >
                    <img src={person} alt="" style={{ width: "100%", height: "100%" }} />
                </Box>
            </Box>
        </Box>
   
        </>
    )
}
