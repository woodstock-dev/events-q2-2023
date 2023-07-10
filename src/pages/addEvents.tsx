import './addEvents.css'
import Button from '@mui/material/Button';
//import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
//import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
//import { ReactNode } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const AddEvents = () => {
  return(
      <Paper className="paper" elevation={3}>
        <Grid container direction="row" justifyContent="space-between" spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h5" align="center" className="add-event-text">Create a Plan</Typography>
          </Grid>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid item xs={6}>
            <TimePicker className=" input-item" label="Time" />
          </Grid>
          <Grid item xs={6}>
            <DatePicker className=" input-item" label="Date" />
          </Grid>
            <Grid item xs={12}>
              <TextField className="input-item" fullWidth variant="outlined" label="Event" type="text" required/>
            </Grid>
            <Grid item xs={12}>
              <TextField className="input-item" fullWidth variant="outlined" label="Location" type="text" />
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize className="input-item" style={{ width: "100%" }} minRows="7" placeholder="Notes"/> 
            </Grid>
          </LocalizationProvider>
          <Grid item xs={3}>
            <Button className="submit" variant="contained">Add</Button>
          </Grid>
        </Grid>
      </Paper>
  )
}

export default AddEvents;

/*const MyCard = ({children}:{children:ReactNode}) => {
  return(
    <Card className="card">
      {children}
    </Card>
  )
}*/