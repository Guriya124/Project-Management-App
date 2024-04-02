import React from 'react';

const PopUp = ({ onClose, children }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-md">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-red-500">Warning</h2>
                    <button onClick={onClose}>&times;</button>
                </div>
                <div className="mt-4">{children}</div>
            </div>
        </div>
    );
};

export default PopUp;
