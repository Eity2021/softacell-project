import React from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput
} from '@mui/material';

const CustomSelect = ({ label, value, onChange, options = [], placeholder = 'Choose here' }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <FormControl fullWidth variant="outlined">
        <InputLabel shrink sx={{ color: '#2196f3', fontSize:"16px", fontWeight: 400 }}>
          {label}
        </InputLabel>
        <Select
          value={value}
          displayEmpty
          onChange={onChange}
          input={<OutlinedInput notched label={label} />}
          sx={{
            borderRadius: '8px',
            bgcolor: '#fff',
            '& .MuiSelect-select': {
              fontStyle: 'italic',
              color: value ? '#000' : '#aaa',
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
          <MenuItem value="" disabled>
            <em>{placeholder}</em>
          </MenuItem>
          {options.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomSelect;





// import React from 'react';
// import {
//   Box,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   OutlinedInput
// } from '@mui/material';

// export default function CustomSelectDesign() {
//   return (
//     <Box sx={{ width: 300 }}>
//       <FormControl fullWidth variant="outlined">
//         <InputLabel
//           shrink
//           sx={{ color: '#2196f3', fontWeight: 500 }}
//           id="subcategory-label"
//         >
//           Sub category
//         </InputLabel>
//         <Select
//           labelId="subcategory-label"
//           value=""
//           displayEmpty
//           input={<OutlinedInput notched label="Sub category" />}
//           sx={{
//             borderRadius: '8px',
//             bgcolor: '#fff',
//             '& .MuiSelect-select': {
//               fontStyle: 'italic',
//               color: '#aaa',
//               padding: '12px',
//             },
//             '& .MuiOutlinedInput-notchedOutline': {
//               borderColor: '#ddd',
//             },
//             '&:hover .MuiOutlinedInput-notchedOutline': {
//               borderColor: '#ccc',
//             },
//             '& .MuiSelect-icon': {
//               color: '#2196f3',
//             },
//           }}
//         >
//           <MenuItem value="" disabled>
//             <em>Choose here</em>
//           </MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }
