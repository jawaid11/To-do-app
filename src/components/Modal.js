import React from 'react'

const Model = ({isVisible, onClose, children}) => {
    if(!isVisible) return null;
    const handleClose=(e)=>{
    if(e.target.id === 'wrapper') onClose(false);
    }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-70  flex justify-center items-center' 
    id='wrapper' onClick={handleClose}>
    <div className="bg-white">
    {children}
    </div>
    </div>
  )
}

export default Model