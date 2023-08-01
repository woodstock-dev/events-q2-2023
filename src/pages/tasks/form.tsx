import { DateTimePicker, LocalizationProvider, renderTimeViewClock } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Task } from "../../model";
import dayjs, { Dayjs } from "dayjs";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useTasks } from "../../hooks/tasks";

const Form = () => {
  const nav = useNavigate();
  const loc = useLocation();
  const stateEvent = loc.state.task as Task;
  const tasks = useTasks();

  const [id] = useState<string | undefined>(stateEvent.id);
  const [start, setStart] = useState<Dayjs>(dayjs(stateEvent.start));
  const [end, setEnd] = useState<Dayjs>(dayjs(stateEvent.end));
  const [name, setName] = useState<string>(stateEvent.name);
  const [description, setDescription] = useState<string | undefined>(stateEvent.description);
  const [address] = useState<Geolocation | undefined>(stateEvent.address);
  const [notes, setNotes] = useState<string | undefined>(stateEvent.notes);

  const update = () => {
    tasks.updateTask({
      id: id,
      start: start.toDate(),
      end: end.toDate(),
      name: name,
      description: description,
      address: address,
      notes: notes,
    });
    nav("/tasks/");
  };

  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <DateTimePicker 
                label="Start" 
                value={start} 
                onChange={(v) => setStart(v as Dayjs)} 
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                  seconds: renderTimeViewClock,
                }}/>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <DateTimePicker label="End" 
                              value={end} 
                              onChange={(v) => setEnd(v as Dayjs)}
                              viewRenderers={{
                                hours: renderTimeViewClock,
                                minutes: renderTimeViewClock,
                                seconds: renderTimeViewClock,
                              }}/>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="tf-name"
                label="Name"
                defaultValue={name}
                fullWidth
                onChange={(v) => setName(v.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="tf-description"
                label="Description"
                defaultValue={description}
                fullWidth
                onChange={(v) => setDescription(v.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField id="tf-address" label="Address" defaultValue={address} fullWidth multiline maxRows={3} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="tf-notes"
                label="Notes"
                variant="outlined"
                defaultValue={notes}
                fullWidth
                onChange={(v) => setNotes(v.target.value)}
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "right" }}>
              <Button onClick={update}>Save</Button>
            </Grid>
          </Grid>
        </Box>
      </LocalizationProvider>
    </React.Fragment>
  );
};

export default Form;
