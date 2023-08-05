// Copyright 2023 YOUR NAME HERE
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { TextField, FormControl, Grid, Typography, Button } from "@mui/material"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const Add = () => {
  return(
    <Grid
      container
      mt="40px"
      display="flex"
      direction="column"
      alignItems="center"
    >
      <Typography variant="h4">Add New Event</Typography>
      <FormControl>
        <TextField 
          margin="normal"
          id="event title"
          name="event title" 
          label="Event Title"
        />

        <TextField 
          margin="normal" 
          multiline
          id="location"
          name="location" 
          label="Location"
        />

        <DatePicker 
          label="Event Date"
          sx={{
            marginBottom: "20px",
            marginTop: "10px",
          }}
        />
        <TimePicker
          label="Event Time"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Add Event
        </Button>
      </FormControl>
    </Grid>
  )
}

export default Add