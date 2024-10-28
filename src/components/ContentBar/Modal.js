import React from 'react';

const Modal = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <div className="bg-white rounded-lg p-4 w-1/3 h-1/2 shadow-lg relative">
                {children}
            </div>
        </div>
    );
};

export default Modal;
