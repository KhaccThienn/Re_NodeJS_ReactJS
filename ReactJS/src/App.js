import { Routes, Route } from "react-router-dom";
import MasterLayout from "./Components/Layouts/MasterLayout";
import Home from "./Components/Pages/Home/Home";
import AddStudent from "./Components/Pages/Student/Add/AddStudent";
import ListStudent from "./Components/Pages/Student/List/ListStudent";
import UpdateStudent from './Components/Pages/Student/Update/UpdateStudent';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MasterLayout children={<Home />} />} />
        <Route path="/student/list" element={<MasterLayout children={<ListStudent />} />} />
        <Route path="/student/add" element={<MasterLayout children={<AddStudent/>} />} />
        <Route path="/student/edit/:id" element={<MasterLayout children={<UpdateStudent/>} />} />
      </Routes>
    </>
  );
}

export default App;
