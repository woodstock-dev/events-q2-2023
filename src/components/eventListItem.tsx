import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { TextField, Paper, Grid, Button, Stack } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./eventListItem.css";

const EventListItem = () => {
  return (
    <Paper className="list-item" elevation={3}>
      <Grid container direction="row" justifyContent="space-between" spacing={1}>
        <Grid item xs={5}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker className="input-item" label="Date" slotProps={{ textField: { size: "small" } }} />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={5}>
          <TextField className="input-item event" fullWidth variant="outlined" label="Event" type="text" size="small" />
        </Grid>
        <Grid item xs={2}>
          <Stack direction="row" spacing={-4} className="stack">
            <Button className="edit-delete" color="secondary">
            <EditOutlinedIcon fontSize="medium" />
          </Button>
          <Button className="edit-delete">
            <DeleteOutlinedIcon fontSize="medium" style={{ color: "#D10000" }} />
          </Button>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default EventListItem;
