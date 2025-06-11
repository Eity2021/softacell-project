import { Box } from '@mui/material';

const CustomContainer = ({ children }) => {
  return (
  <Box
      disableGutters
      sx={{
        maxWidth: '1750px',    // Custom width
        width: '100%',
        margin: '0 auto',      // Center horizontally
        paddingX: 2,           // Horizontal padding
        paddingY: 3,           // Vertical padding
      }}
    >
      {children}
    </Box>
  );
};

export default CustomContainer;