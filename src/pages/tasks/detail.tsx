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

import { Container, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { Task } from '../../model/task'
import { getDate, getTime } from '../../utils'
import { useEffect } from 'react'


const Detail = () => {
  const nav = useNavigate()
  const location = useLocation()

  const data = location.state?.event as Task

  useEffect(() => {
    if (data == undefined) {
        nav('/tasks')
    }
  })

  return(
    <Container maxWidth={'lg'}>
      <Typography variant='h4'>{data.name}</Typography>
      <TableContainer>
        <TableBody>
          <TableRow>
            <TableCell>Date:</TableCell>
            <TableCell>{getDate(data.start)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Time:</TableCell>
            <TableCell>{getTime(data.start)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>{(data.description) ? data.description : ''}</TableCell>
          </TableRow>
        </TableBody>
      </TableContainer>
    </Container>
  )
}

export default Detail
