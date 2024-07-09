import { createRef, useState } from "react";

import { Table } from "./components/js/table.js";
import Modal from "./components/js/modal.js";



function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const rows = [
    {
      name: " ",
      author: "",
      isbn: "",
      createdAt: "",
      editedAt: "",
    }
  ]

  return <div className="App">
    <Table rows={rows} />
    <button className="off" onClick={() => setModalOpen(true)}>
      Add
    </button>
    {modalOpen && <Modal closeModal={() => {
      setModalOpen(false);
    }} />}
  </div>
}

export default App;
