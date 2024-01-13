import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';


const TemperatureWeatherDetail = (props) => {

  const [Data, setData]=useState(Math.round(props.temperature));
  const [temp, setTemp]=useState(true);
  const handleData=(event)=>{
  
  setTemp(true); 
    setData(Math.round(props.temperature));
  }
  const handleFehrenhite=()=>{
    setTemp(false);
    setData((Math.round(props.temperature)*9/5)+32);
  }
  return (
    <>
    <Box >
    <Button onClick={handleData}>c</Button>
    <Button onClick={handleFehrenhite}>F</Button></Box>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '100%',
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontWeight: '600',
          fontSize: { xs: '12px', sm: '14px', md: '16px' },
          color: 'white',
          textTransform: 'uppercase',
          lineHeight: 1,
          marginBottom: '8px',
          fontFamily: 'Poppins',
        }}
      >
        {Data} {temp? '°C':'°F'}
       
      </Typography>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          fontSize: { xs: '10px', sm: '12px', md: '14px' },
          color: 'rgba(255,255,255, .7)',
          lineHeight: 1,
          letterSpacing: { xs: '1px', sm: '0' },
          fontFamily: 'Roboto Condensed',
        }}
      >
        {props.description}
      </Typography>
    </Box>
    </>
  );
};

export default TemperatureWeatherDetail;
