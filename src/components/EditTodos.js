import React,{useContext, useEffect, useState} from 'react'
import { DataContext } from '../context/DataContext';
import DatePicker from 'react-datepicker';

const EditTodos = ({selectedData, onCloseModal}) => {
    const [todos, setTodos] = useContext(DataContext);
    console.log('edit tods',todos)
    const [inputData, setInputData] = useState( '')
    const [editTask, setEditTask] = useState( '');
    const [date, setDate] = useState( new Date());
   
    useEffect(()=>{
        setDate(selectedData?.date);
        setInputData(selectedData?.inputData);
        setEditTask(selectedData?.task)
    },[selectedData])
  const resetForm = () =>{
    setInputData('');
    setEditTask('');
    setDate(new Date());
  }
  const handleSubmit = e =>{
    e.preventDefault();
    const todoData = [...todos];
    const data = {id: selectedData.id, date:new Date(date), inputData, task:editTask};
    const findIndex = todoData.findIndex(el=>el.id === selectedData.id);
    todoData[findIndex] = data;
    setTodos(todoData);
    resetForm();
    onCloseModal(false)

  }
  const handleDelete = ()=>{
    if(window.confirm('Are you sure want to delete?')===true){
        const filterTodos = todos.filter(el=>el.id !== selectedData.id);
        console.log('filter', filterTodos);
        setTodos(filterTodos);
        resetForm()
        onCloseModal(false);
    }
  }
    return (
        <div className='flex justify-center'>
        <form className='box-border bg-white h-80 w-80 p-4 border-4' onSubmit={handleSubmit}>
            <div className=''>
                <span className='my-3'>Create your task</span>
                <input className='bg-slate-300 h-16 p-2.5 my-3' type='text' value={inputData} onChange={e=>setInputData(e.target.value)} />
            </div>
                <span className='my-3'>Select Your Task Status</span>
            <div className='flex col-auto space-x-2 my-3'>
                <input type='radio' name='task' value='todo' onChange={e=>setEditTask(e.target.value)} checked={editTask === 'todo'?true:false} /> To Do
                <input type='radio' name='task' value='progress' onChange={e=>setEditTask(e.target.value)} checked={editTask === 'progress'?true:false}/> Progress
                <input type='radio' name='task' value='done' onChange={e=>setEditTask(e.target.value)} checked={editTask === 'done'?true:false}/> Done
            </div>
                <span>Due date</span>
            <div>   
               <DatePicker selected={new Date(date)} onChange={date=>setDate(date)} />
            </div>
            <div className=' flex justify-between'>
                <button type='submit' className='bg-cyan-600 p-2 m-2 rounded-xl'>Edit</button>
                <button type='button' className='bg-red-500 p-2 m-2 rounded-xl' onClick={handleDelete}>Delete</button>
            </div>
        </form>
        </div>
    )
}

export default EditTodos;