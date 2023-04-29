import React, { useState } from 'react'
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { v4 } from 'uuid';
import DatePicker from 'react-datepicker';
const CreateTodo = ({ closeModal }) => {
    const [todos, setTodos] = useContext(DataContext);
    const [task, setTask] = useState('');
    const [date, setDate] = useState(new Date());
    console.log('date', date)
    const [inputData, setInputData] = useState();
    const [validationError, setValidationError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputData && !(inputData.trim())) {
            setValidationError('task input is required');
            return;
        }
        if (!(task.trim())) {
            setValidationError('please select task status');
            return;
        }
        const data = { id: v4(), task, date: date, inputData };
        setTodos(prevTodos => [...prevTodos, data])
        closeModal(false)
    }
    return (
        <>
            <form className='box-border h-80 w-80 p-4 border-4' onSubmit={handleSubmit}>
                <div className=''>
                    <span className='my-3'>Create your task</span>
                    <input className='bg-slate-300 h-16 p-2.5 my-3' type='text' value={inputData} onChange={e => {setInputData(e.target.value); setValidationError('')}} placeholder='write your todo here...' />
                </div>
                <span className='my-3'>Select Your Task Status</span>
                <div className='flex col-auto space-x-2 my-3'>
                    <input type='radio' name='task' value='todo' onChange={e => setTask(e.target.value)} /> To Do
                    <input type='radio' name='task' value='progress' onChange={e => setTask(e.target.value)} /> Progress
                    <input type='radio' name='task' value='done' onChange={e => setTask(e.target.value)} /> Done
                </div>
                <span>Due date</span>
                <div>
                    <DatePicker selected={date} onChange={(date) => setDate(date)} dateFormat="yyyy-MM-dd" />
                </div>
                <div>
                    <button type="submit" className='bg-cyan-600 p-2 m-2'>Create</button>
            {validationError && <label className='text-red-600'>!{validationError}</label>}
                </div>
            </form>
        </>


    )
}

export default CreateTodo;