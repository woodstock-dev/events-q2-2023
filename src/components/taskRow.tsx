// Copyright 2023 Ryan McGuinness
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

import { Grid, IconButton } from "@mui/material";
import { Task } from "../model/task";
import { Delete, Edit } from "@mui/icons-material";

const TaskRow = ({event}: {event: Task}) => {
  return(
    <Grid container>
      <Grid item xs={1}>{event.start.toLocaleDateString()}</Grid>
      <Grid item xs={1}>{event.end.toLocaleDateString()}</Grid>
      <Grid item xs={8}>{event.name}</Grid>
      <Grid item xs={2}>
        <IconButton aria-label="edit">
          <Edit />
        </IconButton>
        <IconButton aria-label="delete">
          <Delete />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default TaskRow