import "./details.css";
import Typography from "@mui/material/Typography";
import { LocalizationProvider, TimePicker, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button, TextField, TextareaAutosize, Grid, Paper } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import { v4 as uuid } from "uuid";
import { NewPlan, Plan } from "../../model/plan";
import { ReactNode, useState } from "react";
import usePlans from "../../hooks/planHook";

const Details = ({writable}:  {writable: boolean}) => {
  const ruuid = uuid();
  const planManager = usePlans();
  const now = new Date(Date.now());
  const loc = useLocation();
  const [canEdit, setCanEdit] = useState(false);
  const [newPlan, setNewPlan] = useState<Plan>(NewPlan(ruuid, "", now, now));
  const state = loc.state?.plan as Plan;
  const [onlyRead, setOnlyRead] = useState(!writable);
  let sDate = dayjs(state.startDate);
  let eDate = dayjs(state.endDate);
  let planName = state.name;

  function handleEdit() {
    setCanEdit(!canEdit);
    setOnlyRead(false);
  }

  const handleAddClick = () => {
    if(newPlan != null) {
      planManager.create(newPlan)
    }
  }

  let button: ReactNode;
  if (loc.state) {
    if (canEdit) {
      button = (
        <Button className="submit" variant="contained" color="secondary" onClick={handleEdit}>
          UPDATE
        </Button>
      );
    } else {
      button = (
        <Button className="submit" variant="contained" color="secondary" onClick={handleEdit}>
          EDIT
        </Button>
      );
    }
  } else {
    button = (
      <Button className="submit" variant="contained" color="secondary" onClick={handleAddClick}>
        ADD
      </Button>
    );
  }

  function confirmDelete() {
    window.confirm("Are you sure you want to remove your plan?");
  }

  const handleStartTimeChange = (event: dayjs.Dayjs | null, context: unknown) => {
    if(event != null) {
      setNewPlan({...newPlan, startDate: event.toDate()})
      sDate = event;
    }
  }

  const handleEndTimeChange = (event: dayjs.Dayjs | null, context: unknown) => {
    if(event!= null) {
      setNewPlan({...newPlan, endDate: event.toDate()})
      eDate = event;
    }
  }

  const handleStartDateChange = (event: dayjs.Dayjs | null, context: unknown) => {
    if(event != null) {
      sDate = event;
      setNewPlan({...newPlan, startDate: event.toDate()})
    }
  }

  const handleEndDateChange = (event: dayjs.Dayjs | null, context: unknown) => {
    if(event != null) {
      eDate = event;
      setNewPlan({...newPlan, endDate: event.toDate()})
    }
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if(event != null) {
      setNewPlan({...newPlan, name: event.target.value})
      planName = event.target.value;
    }
  }

  const handleNotesChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event != null) {
      setNewPlan({...newPlan, notes: event.target.value})
    }
  }


  return (
    <Paper className="paper" elevation={3}>
      <Grid container direction="row" justifyContent="space-between" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h5" align="center" className="add-event-text" sx={{ mb: 2 }}>
            {loc.state && !onlyRead ? "CHANGE THE PLAN" : "PLAN DETAILS"}
          </Typography>
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid item xs={6}>
            <TimePicker
              className=" input-item"
              label="Start Time"
              slotProps={{ textField: { size: "small" } }}
              defaultValue={sDate}
              readOnly={onlyRead}
              onChange={handleStartTimeChange}
            
            />
          </Grid>
          <Grid item xs={6}>
            <TimePicker
              className=" input-item"
              label="End Time"
              slotProps={{ textField: { size: "small" } }}
              defaultValue={eDate}
              readOnly={onlyRead}
              onChange={handleEndTimeChange}
            />
          </Grid>
          <Grid item xs={6}>
            <DatePicker
              className=" input-item"
              label="Start Date"
              slotProps={{ textField: { size: "small" } }}
              defaultValue={sDate}
              readOnly={onlyRead}
              onChange={handleStartDateChange}
            />
          </Grid>
          <Grid item xs={6}>
            <DatePicker
              className=" input-item"
              label="End Date"
              slotProps={{ textField: { size: "small" } }}
              defaultValue={eDate}
              readOnly={onlyRead}
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
            defaultValue={planName}
            InputProps={{ readOnly: onlyRead }}
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
            InputProps={{ readOnly: onlyRead }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize
            className="input-item"
            style={{ width: "100%" }}
            minRows="5"
            placeholder="Notes"
            readOnly={onlyRead}
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
          {button}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Details;
