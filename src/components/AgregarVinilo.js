import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AgregarVinilos() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Box sx={{ marginTop: '0px', marginLeft:'1400px' }}>
            <Button variant='contained' color='primary' onClick={handleOpen}>Agregar Vinilo</Button>
        </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Nuevo Vinilo
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Para agregar un vinilo rellena los campos según corresponda.
          </Typography>
            <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '30ch' },}} noValidate autoComplete="off">
            <div>
                 <TextField
                    id="outlined-textarea"
                    label="Nombre"
                    placeholder="Placeholder"
                    multiline
                />
                <TextField
                    id="outlined-textarea"
                    label="Artista"
                    placeholder="Placeholder"
                    multiline
                />
                <TextField
                    id="outlined-textarea"
                    label="Género"
                    placeholder="Placeholder"
                    multiline
                />
                <TextField
                    id="outlined-textarea"
                    label="Año"
                    placeholder="Placeholder"
                    multiline
                />
                <TextField
                    id="outlined-textarea"
                    label="Descripción"
                    placeholder="Placeholder"
                    multiline
                />
                <TextField
                    id="outlined-textarea"
                    label="Peso"
                    placeholder="Placeholder"
                    multiline
                />
                <TextField
                    id="outlined-textarea"
                    label="Precio"
                    placeholder="Placeholder"
                    multiline
                />
                <TextField
                    id="outlined-textarea"
                    label="Stock"
                    placeholder="Placeholder"
                    multiline
                />
            </div>
            </Box>
        </Box>
      </Modal>
    </div>
  );
}