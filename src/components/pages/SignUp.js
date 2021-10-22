import * as React from 'react';
import Vinilos from '../Vinilos';
import AgregarVinilos from '../AgregarVinilo';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function SignUp() {
  return (
    <div>
    <Box sx={{marginLeft:'150px', marginTop: '10px'}}>
    <Typography variant="h4" gutterBottom component="div">
        Vinilos
      </Typography>
    </Box>
    <AgregarVinilos/>
    <Vinilos/>
    </div>
  );
}