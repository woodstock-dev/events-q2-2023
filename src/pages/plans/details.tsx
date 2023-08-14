import "./details.css";
//import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
//import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import { LocalizationProvider, TimePicker, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button, TextField, TextareaAutosize, Grid, Paper } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import { v4 as uuid } from "uuid";
import { Plan } from "../../model/plan";

const Details = () => {
  const loc = useLocation();
  const ruuid = uuid();
  const now = new Date(Date.now());
  const state = loc.state ? (loc.state as Plan) : ({ id: ruuid, startDate: now, endDate: now, name: "" } as Plan);
  const startDate = dayjs(state.startDate);
  const endDate = dayjs(state.endDate);
  let ro = false;
  if (loc.state) {
    ro = true;
  }

  function confirmDelete() {
    window.confirm("Are you sure you want to remove your plan?");
  }

  return (
    <Paper className="paper" elevation={3}>
      <Grid container direction="row" justifyContent="space-between" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h5" align="center" className="add-event-text" sx={{ mb: 2 }}>
            Create a Plan
          </Typography>
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid item xs={6}>
            <TimePicker
              className=" input-item"
              label="Start Time"
              slotProps={{ textField: { size: "small" } }}
              value={startDate}
              readOnly={ro}
            />
          </Grid>
          <Grid item xs={6}>
            <TimePicker
              className=" input-item"
              label="End Time"
              slotProps={{ textField: { size: "small" } }}
              value={endDate}
              readOnly={ro}
            />
          </Grid>
          <Grid item xs={6}>
            <DatePicker
              className=" input-item"
              label="Start Date"
              slotProps={{ textField: { size: "small" } }}
              value={startDate}
              readOnly={ro}
            />
          </Grid>
          <Grid item xs={6}>
            <DatePicker
              className=" input-item"
              label="End Date"
              slotProps={{ textField: { size: "small" } }}
              value={endDate}
              readOnly={ro}
            />
          </Grid>
        </LocalizationProvider>
        <Grid item xs={12}>
          <TextField
            className="input-item"
            fullWidth
            variant="outlined"
            label="Event"
            type="text"
            size="small"
            defaultValue={state.name}
            InputProps={{readOnly: ro}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            className="input-item" 
            fullWidth variant="outlined" 
            label="Location" 
            type="text" 
            size="small"
            InputProps={{readOnly: ro}} />
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize 
            className="input-item" 
            style={{ width: "100%" }} 
            minRows="5" 
            placeholder="Notes"
            readOnly={ro}
             />
        </Grid>
        <Grid item xs={3}>
          {loc.state ? (
            <Button variant="contained" color="secondary" onClick={confirmDelete}>
              <DeleteOutlineIcon />
            </Button>
          ) : null}
        </Grid>
        <Grid item xs={3}>
          <Button className="submit" variant="contained" color="secondary">
            {loc.state ? "EDIT" : "ADD"}{" "}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Details;

/*const MyCard = ({children}:{children:ReactNode}) => {
  return(
    <Card className="card">
      {children}
    </Card>
  )
}*/

//onClick={() => nav(`/events/${d.id}`)}
