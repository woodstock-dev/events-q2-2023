import { Container, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { Task } from '../../model'
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
