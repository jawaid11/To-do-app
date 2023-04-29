
import { useState } from "react";
import EditTodos from "./components/EditTodos";
import Navbar from "./components/Navbar";
import { Todos } from "./components/Todos";
import { DataProvider } from "./context/DataContext";
import Modal from "./components/Modal";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false)
  console.log('showModal',showModal)
  const selectedData = data => {
    setSelectedItem(data);
    setShowModal(true);
  }

  return (
    <DataProvider>
      <div className="bg-gray-500">
        <Navbar />
        <Todos selectedData={selectedData} />
        {(!!selectedItem && showModal) && <Modal isVisible={showModal || selectedItem} onClose={()=>setShowModal(false)} >
          <EditTodos selectedData={selectedItem} onCloseModal={value=>setShowModal(value)}/>
        </Modal>}
      </div>
    </DataProvider>
  );
}

export default App;
