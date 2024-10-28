import React from 'react';
import LeftComponent from './components/LeftBar/LeftComponent';
import ContentComponent from './components/ContentBar/ContentComponent';
import RightComponent from './components/RightBar/RightComponent';
import { SunIcon } from '@heroicons/react/outline';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './features/theme/themeSlice';

const App = () => {
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    return (
        <>
            <div className={`fixed p-2 rounded-full right-10 bottom-10 transition ${
                theme === 'light' ? 'bg-slate-700 hover:bg-slate-800 text-slate-200' : 'bg-yellow-500 hover:bg-yellow-600 text-slate-900'
            }`} onClick={handleToggleTheme}>
                <SunIcon className="h-7 w-7" />
            </div>
            <div className={`h-max ${theme === 'light' ? 'bg-indigo-100' : 'bg-gray-900 text-white'}`}>
                <div className="flex mx-40">
                    <LeftComponent />
                    <ContentComponent />
                    <RightComponent />
                </div>
            </div>
        </>
    );
};

export default App;
