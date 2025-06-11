// hooks/useDatePicker.js
import { useState } from 'react';
import dayjs from 'dayjs';

export default function useDatePicker(initialValue = null) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const getSlotProps = (placeholder = 'Choose here') => ({
    textField: {
      fullWidth: true,
      InputLabelProps: {
        shrink: true,
      },
      placeholder,
      inputProps: {
        placeholder,
        style: {
          fontStyle: value ? 'normal' : 'italic',
        },
      },
      sx: {
        '& .MuiInputLabel-root': {
          color: '#2196f3',
          fontWeight: 500,
          fontSize: '16px',
        },
        '& .MuiOutlinedInput-root': {
          borderRadius: '8px',
          backgroundColor: '#fff',
          '& fieldset': {
            borderColor: '#ccc',
          },
          '&:hover fieldset': {
            borderColor: '#2196f3',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#2196f3',
          },
        },
      },
    },
  });

  return {
    value,
    onChange: handleChange,
    getSlotProps,
  };
}
