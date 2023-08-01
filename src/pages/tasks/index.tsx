import { Outlet, Route, Routes } from "react-router-dom";
import Form from "./form";
import List from "./list";
import Detail from "./detail";
import TaskProvider from "../../context/TaskContext";

const Tasks = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<List />} />
        <Route path="create" element={<Form />} />
        <Route path="read" element={<Detail />} />
        <Route path="update" element={<Form />} />
      </Route>
    </Routes>
  );
};

const Layout = () => {
  return(
    <TaskProvider>
      <Outlet />
    </TaskProvider>
  );
};

export default Tasks;
