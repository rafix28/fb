import React from "react";
import { users } from '../../data'; // Corrected import statement
import { useSelector } from "react-redux";

function ActiveUser() {

  const theme = useSelector((state) => state.theme);

  return (
    <div>
      <h2 className='font-semibold text-sm'>Active user</h2>
      <div className='flex justify-between'>
        {users.map(user => (
          <div key={user.id} className={`flex items-center justify-center flex-col p-3 rounded-xl shadow-sm ${theme === 'light' ? 'bg-blue-50' : 'bg-gray-800'} my-1 px-7`}>
            <img src={user.photo} alt={user.name} className='rounded-full w-14 mb-4' />
            <h2 className='text-sm font-semibold'>{user.name}</h2>
            <p className='text-xs font-light'>{user.position}</p>
            <button className='mt-4 bg-blue-700 hover:bg-blue-800 rounded-3xl text-blue-50 p-1 w-full'>Send</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActiveUser;
