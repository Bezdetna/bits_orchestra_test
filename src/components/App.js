import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Table } from "./js/table.js";
import Add from "./js/components/add.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/add" element={<Add />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
