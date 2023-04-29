import React,{useState} from 'react'
import CreateTodo from './CreateTodo';
import Modal from './Modal';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className='bg-zinc-300'>
    <div className='p-4'>
     <button onClick={()=>setShowModal(true)}className='bg-cyan-600 text-xl p-1 rounded-xl'>+ Create Task </button>
    {showModal && <Modal isVisible={showModal} onClose={()=>setShowModal(false)}>
      <CreateTodo closeModal={value=>setShowModal(value)}/>
    </Modal>}
    </div>
    </div>
  )
}

export default Navbar;