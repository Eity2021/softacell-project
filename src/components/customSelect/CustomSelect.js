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
     
             {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
          </MenuItem>
        ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomSelect;





