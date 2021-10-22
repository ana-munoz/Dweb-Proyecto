import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'nombre',
    headerName: 'Nombre',
    width: 150,
    editable: true,
  },
  {
    field: 'artista',
    headerName: 'Artista',
    width: 150,
    editable: true,
  },
  {
    field: 'genero',
    headerName: 'Género',
    width: 150,
    editable: true,
  },
  {
    field: 'año',
    headerName: 'Año',
    width: 110,
    editable: true,
  },
  {
    field: 'descripcion',
    headerName: 'Descripción',
    width: 160,
    editable: true,
  },
  {
    field: 'peso',
    headerName: 'Peso',
    width: 120,
    editable: true,
  },
  {
    field: 'precio',
    headerName: 'Precio',
    type: 'number',
    width: 125,
    editable: true,
  },
  {
    field: 'stock',
    headerName: 'Stock',
    type: 'number',
    width: 125,
    editable: true,
  },
  {
    field: 'action',
    headerName: 'Acción',
    width: 150,
    renderCell: (params: GridCellParams)=> (
      <strong>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="edit" size="small">
          <EditIcon fontSize="small" />
        </IconButton>
      </strong>
    )},
];

const rows = [
  { id: 1, nombre: 'Vinilo 1', artista: 'Artista 1', genero: 'Género 1', año: 1999, descripcion: 'descripcion 1', peso: 150, precio: 111, stock: 2},

];


export default function Vinilos() {
  return (

    <Grid container justifyContent="center">
      <div style={{ height: 400, width: '85%', display: 'flex'}}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </Grid>

  );
}