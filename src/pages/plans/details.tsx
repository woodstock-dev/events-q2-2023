/**
 * Copyright 2023 Josilyn McGuinness
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import "./details.css";
import Typography from "@mui/material/Typography";
import { LocalizationProvider, TimePicker, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Button,
  TextField,
  TextareaAutosize,
  Grid,
  Paper,
  Dialog,
  DialogTitle,
  DialogActions,
  Slide,
  Stack,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useLocation, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { forwardRef, useEffect, useState } from "react";
import usePlans from "../../hooks/planHook";
import { v4 as uuid } from "uuid";
import { TransitionProps } from "@mui/material/transitions";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Details = ({ writable }: { writable: boolean }) => {
  
  const planManager = usePlans();
  const loc = useLocation();
  const nav = useNavigate();
  const [plan, setPlan] = useState(loc.state.plan);
  const [edit, setEdit] = useState(!writable);
  const buttonAction = plan.id == undefined ? "ADD" : edit ? "EDIT" : "UPDATE";

  function handleButtonClick(action: string) {
    switch (action) {
      case "EDIT":
        setEdit(false);
        break;
      case "ADD":
        plan.id = uuid();
        planManager.create(plan);
        nav("/plans");
        break;
      case "UPDATE":
        planManager.update(plan);
        nav("/plans");
        break;
    }
  }

  useEffect(() => {
    console.log(JSON.stringify(plan))
  }, [plan])

  //state variable for showing confirm delete box
  const [open, setOpen] = useState(false);

  const handleConfirmDeleteOpen = () => {
    setOpen(true);
  };

  const handleCancelDeleteClose = () => {
    setOpen(false);
  };

  //if delete is confirmed, call delete function, return to the plan list, and close the delete window
  const handleDeleteClose = () => {
    planManager.delete(plan);
    nav("/plans");
    setOpen(false);
  };

  /*function confirmDelete() {
    if (confirm("Are you sure you want to remove your plan?")) {
      planManager.delete(plan);
      nav("/plans");
    }
  }*/

  const handleStartTimeChange = (event: dayjs.Dayjs | null) => {
    if (event != null) {
      const d = dayjs(plan.startDate)

      d.set("hour", event.get("hour"))
       .set("minute", event.get("minute"))

      const nd = d.toDate()
      console.log(`Start Date Observed: ${nd}`)
      setPlan({...plan, startDate: nd})
    }
  };

  const handleEndTimeChange = (event: dayjs.Dayjs | null) => {
    if (event != null) {
      const d = dayjs(plan.endDate)
      console.log(`End Date Observed: ${d}`)
      d.set("hour", event.get("hour"))
      d.set("minute", event.get("minute"))
      setPlan({...plan, endDate: d.toDate()})
    }
  };

  const handleStartDateChange = (event: dayjs.Dayjs | null) => {
    if (event != null) {
      setPlan({ ...plan, startDate: event.toDate() });
    }
  };

  const handleEndDateChange = (event: dayjs.Dayjs | null) => {
    if (event != null) {
      setPlan({ ...plan, endDate: event.toDate() });
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event != null) {
      setPlan({ ...plan, name: event.target.value });
      console.log(plan.name)
    }
  };

  const handleNotesChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event != null) {
      setPlan({ ...plan, notes: event.target.value });
    }
  };

  return (
    <Paper className="paper" elevation={3} style={{ padding: 0 }}>
      <Typography variant="h6" align="center" className="add-event-text" sx={{ mb: 3, bgcolor: "#abd1b5" }}>
        {plan.id != undefined && !edit ? "CHANGE THE PLAN" : "PLAN DETAILS"}
      </Typography>
      <Grid container direction="row" justifyContent="space-between" style={{ padding: 15, paddingTop: 5 }} spacing={1}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid item xs={6}>
            <TimePicker
              className="input-item"
              label="Start Time"
              slotProps={{ textField: { size: "small" } }}
              defaultValue={dayjs(plan.startDate)}
              readOnly={edit}
              onChange={handleStartTimeChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TimePicker
              className="input-item"
              label="End Time"
              slotProps={{ textField: { size: "small" } }}
              defaultValue={dayjs(plan.endDate)}
              readOnly={edit}
              onChange={handleEndTimeChange}
            />
          </Grid>
          <Grid item xs={6}>
            <DatePicker
              className="input-item"
              label="Start Date"
              disablePast
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
              disablePast
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
          {plan.id != undefined ? (
            <Button variant="contained" color="secondary" onClick={handleConfirmDeleteOpen}>
              <DeleteOutlineIcon />
            </Button>
          ) : null}
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleCancelDeleteClose}
            aria-describedby="alert-dialog-slide-description">
            <DialogTitle>{"Delete the Plan?"}</DialogTitle>
            <DialogActions>
              <Stack direction="row" sx={{ mr: 1 }}>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={handleCancelDeleteClose}
                  sx={{ mr: 1 }}>
                  Cancel
                </Button>
                <Button size="small" variant="contained" color="secondary" onClick={handleDeleteClose} sx={{ ml: 1 }}>
                  Delete
                </Button>
              </Stack>
            </DialogActions>
          </Dialog>
        </Grid>
        <Grid item xs={3}>
          <Button
            className="submit"
            variant="contained"
            color="secondary"
            onClick={() => handleButtonClick(buttonAction)}>
            {buttonAction}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Details;
