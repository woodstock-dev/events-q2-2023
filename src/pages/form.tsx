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
import dayjs from "dayjs";
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import { useLocation } from "react-router-dom";
import { useState } from "react";


const Form = () => {
  const location = useLocation();
  const locObject = location.state.event

  const [detail, setDetail] = useState(locObject)
  
  console.log(detail)

  return(
    <Grid
      container
      mt="40px"
      display="flex"
      direction="column"
      alignItems="center"
    >
      <Typography variant="h4">Event Information</Typography>
      <FormControl>
        <TextField 
          margin="normal"
          id="title"
          name="title" 
          label="Event Title"
          defaultValue={locObject.title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setDetail({...detail, title: event.target.value});
            console.log(`detail: ${detail}`)
          }}
        />

        <TextField 
          margin="normal" 
          multiline
          id="location"
          name="location" 
          label="Location"
          defaultValue={locObject.location}
        />

        <DateTimeField 
          name="date"
          label="Date"
          defaultValue={dayjs(locObject.date)} 
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

export default Form