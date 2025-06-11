import React, { useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';

const CustomTimePicker = () => {
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');

  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

  return (
    <Box display="flex" alignItems="center" gap={2}>
      {/* Hour Picker */}
      <FormControl size="small" sx={{ minWidth: 100 }}>
        <InputLabel sx={{ fontSize: '14px' }}>Hour</InputLabel>
        <Select
          value={hour}
          onChange={(e) => setHour(e.target.value)}
          label="Hour"
          sx={{ fontSize: '14px' }}
        >
          {hours.map((hr) => (
            <MenuItem key={hr} value={hr}>
              {hr}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Minute Picker */}
      <FormControl size="small" sx={{ minWidth: 100 }}>
        <InputLabel sx={{ fontSize: '14px' }}>Minute</InputLabel>
        <Select
          value={minute}
          onChange={(e) => setMinute(e.target.value)}
          label="Minute"
          sx={{ fontSize: '14px' }}
        >
          {minutes.map((min) => (
            <MenuItem key={min} value={min}>
              {min}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Optional display */}
      {hour && minute && (
        <Typography fontSize="14px" color="text.secondary">
          Selected: {hour}:{minute}
        </Typography>
      )}
    </Box>
  );
};

export default CustomTimePicker;
