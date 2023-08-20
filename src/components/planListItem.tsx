import { TextField, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Plan } from "../model/plan";

const PlanListItem = (props: { plan: Plan }) => {
  //const sampleData = eventsData;
  const { name, startDate } = props.plan;
  const nav = useNavigate();
  const date = startDate.getMonth() + 1 + "/" + startDate.getDate() + "/" + startDate.getFullYear();

  return (
    <>
      <Grid container direction="row" spacing={1} sx={{ ml: 4, mr: 3 }}>
        <Grid item>
          <TextField
            variant="standard"
            className="input-item"
            label="Date"
            value={date}
            size="small"
            inputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item>
          <TextField
            className="input-item event"
            value={name}
            label="Event"
            fullWidth
            variant="standard"
            type="text"
            size="small"
            inputProps={{ readOnly: true }}
          />
        </Grid>
        <Grid item >
          <Button variant="contained" color="secondary" size="small" onClick={() => nav('update', {state: props.plan})}>
            Details
          </Button>
        </Grid>
      </Grid>
      <br />
    </>
  );
};

export default PlanListItem;

//<EditOutlinedIcon fontSize="medium" />
