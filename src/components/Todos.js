import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext';

export const Todos = ({ selectedData }) => {
  const [todos] = useContext(DataContext);

  return (
    <div className='flex flex-row grow-0'>
      <List data={todos.filter(el => el.task === 'todo')} status={'TODO'} selectedData={selectedData} />
      <List data={todos.filter(el => el.task === 'progress')} status={'PROGRESS'} selectedData={selectedData} />
      <List data={todos.filter(el => el.task === 'done')} status={'DONE'} selectedData={selectedData} />
    </div>

  );

}
const List = ({ data, status, selectedData }) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden mx-auto max-w-lg flex flex-col md:flex-row gap-4 m-3 pb-3 ">
        <div className="sm:flex sm:items-center px-6 py-4">
          <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            <label>{status}</label>
            {data.length === 0 && <div>No Task</div>}

            {
              data?.map((item, i) => (
                <ul className="text-lg font-medium text-gray-900 border border-b-black cursor-pointer" key={i} onClick={() => selectedData(item)}>
                  <li>
                    Task: {item.inputData}
                  </li>
                  <li className="text-sm font-medium text-gray-500 my-2">
                    Due date: {new Date(item?.date)?.toDateString()}
                  </li>
                </ul>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

