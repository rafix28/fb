import React from "react";
import {SearchIcon} from '@heroicons/react/outline';
import { useSelector } from "react-redux";
function RightComponent() {
    const theme = useSelector(state => state.theme);

    return (
        <>
        <div className='w-3/12'>
            <div className={`w-full flex items-center p-3 rounded-xl shadow-sm ${theme === 'light' ? 'bg-blue-50' : 'bg-gray-800'} my-5`}>
                <SearchIcon className="h-5 w-5 mr-2 text-slate-500" />
                <input type='text' placeholder="Search" className='flex-1 border-none bg-inherit  focus:outline-none'  />
            </div>

            <div className={`rounded-xl shadow-sm ${theme === 'light' ? 'bg-blue-50' : 'bg-gray-800'} my-5`}>
                <div className='p-3'>
                    <h2 className='text-sm font-semibold'>Who to follow</h2>
                </div>
                <div className='border-t-2'>
                    sdvsdv
                </div>
            </div>
        </div>
        </>
    )
}

export default RightComponent;