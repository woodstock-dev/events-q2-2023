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

import { Edit, Delete } from "@mui/icons-material";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Task } from '../model/task';
import { getDate, getTime } from "../utils";
import useTasks from "../hooks/tasksHook";

const TaskList = () => {
  const nav = useNavigate()
  const taskManager = useTasks()

  const handleEdit = (task: Task) => {
    nav('/tasks/update', {state: {task: task}})
  }

  return (
    <TableContainer component={Paper} sx={{ width: "100%", alignSelf: "center" }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell width="100">Date</TableCell>
            <TableCell width="100">Time</TableCell>
            <TableCell>Name</TableCell>
            <TableCell width="120" align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {taskManager.getTasks().map((d) => (
            <TableRow key={d.id}>
              <TableCell>
                {getDate(d.start)}
              </TableCell>
              <TableCell>
                {getTime(d.start)}
              </TableCell>
              <TableCell>{d.name}</TableCell>
              <TableCell align="center">
                <IconButton aria-label="edit" onClick={() => handleEdit(d) }>
                  <Edit fontSize="small"/>
                </IconButton>
                <IconButton aria-label="delete" onClick={() => console.log(d.id)}>
                  <Delete fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TaskList