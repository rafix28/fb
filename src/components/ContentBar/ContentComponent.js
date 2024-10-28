import React, { useState } from "react";
import { UserCircleIcon, PlusCircleIcon } from '@heroicons/react/outline';
import ActiveUser from "./ActiveUser";
import Posts from "./Posts";
import { useSelector } from "react-redux";
import Modal from "./Modal";

function ContentComponent() {
    const theme = useSelector(state => state.theme);
    const [isModalVisible, setModalVisible] = useState(false);

    const handleInputClick = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <>
            <div className='w-6/12 mx-5'>
                <div className={`w-full flex items-center p-3 rounded-xl shadow-sm ${theme === 'light' ? 'bg-blue-50' : 'bg-gray-800'} my-5`}>
                    <UserCircleIcon className="h-5 w-5 mr-2 text-slate-500" />
                    <input 
                        type='text' 
                        onClick={handleInputClick} 
                        placeholder="What's on your mind?" 
                        className='flex-1 border-none bg-inherit focus:outline-none' 
                    />
                    <PlusCircleIcon className="h-5 w-5 mr-2 text-slate-500" />
                </div>
                <ActiveUser />
                <Posts />
            </div>
            <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
              <div className="flex flex-col">
                <h2 className="text-xl font-bold">Dodaj post</h2>
                <input 
                        type='text' 
                        placeholder="What's on your mind?" 
                        className=' mt-10  border-none bg-inherit focus:outline-none' 
                    />
                <button 
                    onClick={handleCloseModal} 
                    className="mt-4 bg-blue-500 text-white p-2 rounded-md"
                >
                    Wyślij post
                </button>
                </div>
            </Modal>
        </>
    );
}

export default ContentComponent;
