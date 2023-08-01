import { Search, Add } from "@mui/icons-material";
import { Container, Fab, FilledInput, FormControl, Grid, InputAdornment, InputLabel, Typography } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useNavigate } from "react-router-dom";
import { NewTask } from "../model";

const TaskFilter = () => {
  const nav = useNavigate()
  
  const createTask = () => {
    const now = new Date(Date.now())
    nav('/tasks/create', {state: {task: NewTask(undefined, "", "", now, now)}})
  }

  return (
    <Container sx={{width: '100%', pb: 2}}>
      <Typography variant="h6">Filter</Typography>
      <Grid container spacing={1}>
        <Grid item xs={6} md={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label='Start'/>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={6} md={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label='End' onChange={(v) => console.log(v)}/>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={11} md={5}>
          <FormControl fullWidth variant="filled">
            <InputLabel htmlFor="filled-adornment-amount">Search</InputLabel>
            <FilledInput
              id="filled-adornment-amount"
              endAdornment={
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={1}>
            <Fab color="secondary" aria-label="add" onClick={createTask}>
              <Add fontSize="large" />
            </Fab>
        </Grid>
      </Grid>
      </Container>
  );
};

export default TaskFilter;
