import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
  return (
    <Paper sx={{ p: 2, margin: '30px 5px 50px 300px', maxWidth: 1000, flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 300, height: 400 }}>
            <Img alt="complex" src="images/vin4.jpg" />
          </ButtonBase>
        </Grid>
        <Box sx={{ marginLeft: '50px', marginTop: '30px' }}>
          <Grid item xs={12} sm container >
            <Grid item xs container direction="column" spacing={4}>
              <Grid item xs>
                <Typography gutterBottom variant="h4" component="div">
                  Thriller
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Michael Jackson
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Canciones: 9
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Año: 1982
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Peso: 180 gramos
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Género: Pop
                </Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color='success'>Comprar</Button>
                  <Button variant="contained" color='primary'>Reservar</Button>
                </Stack>
              </Grid>
            </Grid>
            <Box sx={{marginLeft: '200px'}}>
            <Grid item>
              <Typography variant="h4" component="div">
                $25.900
              </Typography>
            </Grid>
            </Box>
          </Grid>
        </Box>        
      </Grid>

    </Paper>
  );
}