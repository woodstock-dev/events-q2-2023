import "./eventDetails.css";
//import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
//import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import { LocalizationProvider, TimePicker, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button, TextField, TextareaAutosize, Grid, Paper } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useLocation } from "react-router-dom";
import { Plan } from "../data/sampleData";
import dayjs from "dayjs";
import { v4 as uuid } from "uuid";

const EventDetails = () => {
  const loc = useLocation();
  const ruuid = uuid();
  const now = new Date(Date.now());
  const state = loc.state ? (loc.state as Plan) : ({ id: ruuid, startDate: now, endDate: now, name: "" } as Plan);
  const startDate = dayjs(state.startDate);

  function confirmDelete() {
    window.confirm("Are you sure you want to remove your plan?")
  }

  return (
    <Paper className="paper" elevation={3}>
      <Grid container direction="row" justifyContent="space-between" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h5" align="center" className="add-event-text">
            Create a Plan
          </Typography>
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid item xs={6}>
            <TimePicker
              className=" input-item"
              label="Time"
              slotProps={{ textField: { size: "small" } }}
              value={startDate}
            />
          </Grid>
          <Grid item xs={6}>
            <DatePicker
              className=" input-item"
              label="Date"
              slotProps={{ textField: { size: "small" } }}
              value={startDate}
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
            required
            value={state.name}
            InputProps={{readOnly: false}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField className="input-item" fullWidth variant="outlined" label="Location" type="text" size="small" />
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize className="input-item" style={{ width: "100%" }} minRows="5" placeholder="Notes" />
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

export default EventDetails;

/*const MyCard = ({children}:{children:ReactNode}) => {
  return(
    <Card className="card">
      {children}
    </Card>
  )
}*/

//onClick={() => nav(`/events/${d.id}`)}
