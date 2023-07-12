import React from 'react'
import EventFilter from '../components/eventFilter'
import { sampleData } from '../data/model'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'start', headerName: 'Start', width: 90 },
  { field: 'end', headerName: 'End', width: 90 },
  { field: 'name', headerName: 'Start' },
  { field: '', headerName: 'Actions', width: 90 },
]

const Events = () => {

  const data = sampleData;

  return(
  <React.Fragment>
    <EventFilter />

    <Box sx={{width: '100%', pt: 2, textAlign: 'center', justifyContent: 'center'}}>
      <DataGrid
        rows={data}
        columns={columns} 
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}/>
    </Box>

  </React.Fragment>
  )
}

export default Events

