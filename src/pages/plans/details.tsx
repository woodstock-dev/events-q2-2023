import "./details.css";
import Typography from "@mui/material/Typography";
import { LocalizationProvider, TimePicker, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button, TextField, TextareaAutosize, Grid, Paper } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import { useState } from "react";
import usePlans from "../../hooks/planHook";



const Details = ({writable}:  {writable: boolean}) => {

  const planManager = usePlans();
  const loc = useLocation();
  const [plan, setPlan] = useState(loc.state.plan);
  const [edit, setEdit] = useState(!writable);
  const buttonAction = plan.name == "" ? "ADD" : edit ? "EDIT" : "UPDATE"

  console.log("Name: " + plan.name);
  console.log(JSON.stringify(loc.state));
  console.log(JSON.stringify(plan));
  function handleButtonClick(action: string) {
    switch(action) {
      case "EDIT":
        setEdit(false)
        break;
      case "ADD":
        planManager.create(plan)
        break;
      case "UPDATE":
        break;
    }
  }


  function confirmDelete() {
    window.confirm("Are you sure you want to remove your plan?");
  }

  const handleStartTimeChange = (event: dayjs.Dayjs | null, context: unknown) => {
    if(event != null) {
      setPlan({...plan, startDate: event.toDate()})
    }
  }

  const handleEndTimeChange = (event: dayjs.Dayjs | null, context: unknown) => {
    if(event != null) {
      setPlan({...plan, endDate: event.toDate()})
    }
  }

  const handleStartDateChange = (event: dayjs.Dayjs | null, context: unknown) => {
    if(event != null) {
      setPlan({...plan, startDate: event.toDate()})
    }
  }

  const handleEndDateChange = (event: dayjs.Dayjs | null, context: unknown) => {
    if(event != null) {
      setPlan({...plan, endDate: event.toDate()})
    }
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if(event != null) {
      setPlan({...plan, name: event.target.value})
    }
  }

  const handleNotesChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event != null) {
      setPlan({...plan, notes: event.target.value})
    }
  }


  return (
    <Paper className="paper" elevation={3}>
      <Grid container direction="row" justifyContent="space-between" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h5" align="center" className="add-event-text" sx={{ mb: 2 }}>
            {plan.name != "" && !edit ? "CHANGE THE PLAN" : "PLAN DETAILS"}
          </Typography>
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid item xs={6}>
            <TimePicker
              className=" input-item"
              label="Start Time"
              slotProps={{ textField: { size: "small" } }}
              defaultValue={dayjs(plan.startDate)}
              readOnly={edit}
              onChange={handleStartTimeChange}
            
            />
          </Grid>
          <Grid item xs={6}>
            <TimePicker
              className=" input-item"
              label="End Time"
              slotProps={{ textField: { size: "small" } }}
              defaultValue={dayjs(plan.endDate)}
              readOnly={edit}
              onChange={handleEndTimeChange}
            />
          </Grid>
          <Grid item xs={6}>
            <DatePicker
              className=" input-item"
              label="Start Date"
              slotProps={{ textField: { size: "small" } }}
              defaultValue={dayjs(plan.startDate)}
              readOnly={edit}
              onChange={handleStartDateChange}
            />
          </Grid>
          <Grid item xs={6}>
            <DatePicker
              className=" input-item"
              label="End Date"
              slotProps={{ textField: { size: "small" } }}
              defaultValue={dayjs(plan.endDate)}
              readOnly={edit}
              onChange={handleEndDateChange}
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
            defaultValue={plan.name}
            InputProps={{ readOnly: edit }}
            onChange={handleNameChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className="input-item"
            fullWidth
            variant="outlined"
            label="Location"
            type="text"
            size="small"
            InputProps={{ readOnly: edit }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize
            className="input-item"
            style={{ width: "100%" }}
            minRows="5"
            placeholder="Notes"
            readOnly={edit}
            onChange={handleNotesChange}
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
          <Button className="submit" variant="contained" color="secondary" onClick={() => handleButtonClick(buttonAction)}>
            {buttonAction}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Details;
