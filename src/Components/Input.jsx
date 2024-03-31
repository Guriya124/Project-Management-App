import { forwardRef } from "react";



const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
    const inputClasses = "w-full p-2 border rounded-md border-gray-300 text-gray-800 bg-gray-100 focus:outline-none focus:border-blue-500";

    return (
        <div className="my-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
            {textarea ? (
                <textarea ref={ref} className={inputClasses} rows="4" {...props} />
            ) : (
                <input ref={ref} className={inputClasses} {...props} />
            )}
        </div>
    );
});

export default Input;
