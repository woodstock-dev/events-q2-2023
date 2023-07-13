import EventFilter from "../components/eventFilter";
import { sampleData } from "../data/model";
import {
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import EventForm from "./eventForm";
import { Delete, Edit } from "@mui/icons-material";

const Events = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="add" element={<EventForm />} />
        <Route path="/:id?edit" element={<EventForm />} />
        <Route path="/:id" element={<EventForm />} />
      </Route>
    </Routes>
  );
};

const Layout = () => {
  return <Outlet />;
};

const padNumber = (value: number) => {
  return `${value}`.padStart(2, "0");
};

const Index = () => {
  const nav = useNavigate()
  const data = sampleData;

  return (
    <Container>
      <EventFilter />
      <Container>
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
              {data.map((d) => (
                <TableRow>
                  <TableCell>
                    {padNumber(d.start.getMonth() + 1)}/{padNumber(d.start.getDate())}/{d.start.getFullYear()}
                  </TableCell>
                  <TableCell>
                    {d.start.getHours()}:{padNumber(d.start.getMinutes())} {d.start.getHours() > 12 ? "AM" : "PM"}
                  </TableCell>
                  <TableCell>{d.name}</TableCell>
                  <TableCell align="center">
                    <IconButton aria-label="edit" onClick={() => nav(`/events/${d.id}`)}>
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
      </Container>
    </Container>
  );
};

export default Events;
