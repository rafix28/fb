import React from'react';
import { UserCircleIcon,  HomeIcon, CogIcon, TranslateIcon} from '@heroicons/react/outline';
import logo from '../../assets/logo.png'
import { useSelector } from'react-redux';
function LeftComponent() {
  const theme = useSelector(state => state.theme);

    return (
        <>
        <div className='w-3/12'>
        <div>
          <img src={logo} alt="logo" className='w-12 my-5'/>
        </div>
        <div>
          <ul className='my-7'>
          <li className={`flex items-center rounded-lg  transition duration-200 font-semibold  ${theme === 'light' ? 'hover:bg-blue-50 text-neutral-700 '  : 'hover:bg-gray-800 text-white'} p-2 hover:rounded-lg hover:shadow-sm mb-2`}>
          <HomeIcon className="h-5 w-5 mr-2" />
               HOME
            </li>
            <li className={`flex items-center rounded-lg  transition duration-200 font-semibold  ${theme === 'light' ? 'hover:bg-blue-50 text-neutral-700 '  : 'hover:bg-gray-800 text-white'} p-2 hover:rounded-lg hover:shadow-sm mb-2`}>
            <UserCircleIcon className="h-5 w-5 mr-2" />
               PROFILE
            </li>
            <li className={`flex items-center rounded-lg  transition duration-200 font-semibold  ${theme === 'light' ? 'hover:bg-blue-50 text-neutral-700 '  : 'hover:bg-gray-800 text-white'} p-2 hover:rounded-lg hover:shadow-sm mb-2`}>
            <TranslateIcon className="h-5 w-5 mr-2" />
               LANGUAGE
            </li>
            <li className={`flex items-center rounded-lg  transition duration-200 font-semibold  ${theme === 'light' ? 'hover:bg-blue-50 text-neutral-700 '  : 'hover:bg-gray-800 text-white'} p-2 hover:rounded-lg hover:shadow-sm mb-2`}>
            <CogIcon className="h-5 w-5 mr-2" />
               SETTINGS
            </li>
          </ul>
        </div>
        <div>
          <button className='bg-blue-700 p-3 w-full rounded-xl text-blue-50 font-medium transition hover:shadow-md hover:bg-blue-800'>SING IN+</button>
        </div>
      </div>
      
        </>
    )
}

export default LeftComponent