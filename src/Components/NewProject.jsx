
import { useRef } from 'react';
import Input from './Input';

export default function NewProject({ onAdd }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enterTitle = title.current.value;
        const enterDescription = description.current.value;
        const enterDueDate = dueDate.current.value;

        if (enterTitle.trim() === '' || enterDescription.trim() === '' || enterDueDate.trim() === '') {
            
        }

        onAdd({
            title: enterTitle,
            description: enterDescription,
            dueDate: enterDueDate

        })

    }

    return (
        <div className="w-[32rem] mt-8 ">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="px-4 py-2 rounded-md text-white bg-red-500 hover:bg-red-600 transition duration-200 ease-in-out">Cancel</button></li>
                <li>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition duration-200 ease-in-out">Save</button></li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title" />
                <Input ref={description} label="Description" textarea />
                <Input type="date" ref={dueDate} label="Due Date" />
            </div>
        </div>
    )
}
