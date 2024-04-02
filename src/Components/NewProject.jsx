import { useRef, useState } from 'react';
import Input from './Input';
import PopUp from './PopUp';

export default function NewProject({ onAdd }) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    // State variables to track input validity and popup display
    const [titleValid, setTitleValid] = useState(true);
    const [descriptionValid, setDescriptionValid] = useState(true);
    const [dueDateValid, setDueDateValid] = useState(true);
    const [showPopup, setShowPopup] = useState(false);

    function handleSave() {
        const enteredTitle = titleRef.current.value.trim();
        const enteredDescription = descriptionRef.current.value.trim();
        const enteredDueDate = dueDateRef.current.value.trim();

        // Check for empty input fields and display popup
        if (enteredTitle === '') {
            setTitleValid(false);
        }
        if (enteredDescription === '') {
            setDescriptionValid(false);
        }
        if (enteredDueDate === '') {
            setDueDateValid(false);
        }

        // If all fields are valid, proceed with saving
        if (enteredTitle !== '' && enteredDescription !== '' && enteredDueDate !== '') {
            if (onAdd) {
                onAdd({
                    title: enteredTitle,
                    description: enteredDescription,
                    dueDate: enteredDueDate
                });
            }
        } else {
            // Display the popup warning
            setShowPopup(true);
        }
    }

    return (
        <>
            {showPopup && (
                <PopUp onClose={() => setShowPopup(false)}>
                    <p className="text-red-500">Please fill out all fields.</p>
                </PopUp>
            )}
            <div className="w-[32rem] mt-8">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button className="px-4 py-2 rounded-md text-white bg-red-500 hover:bg-red-600 transition duration-200 ease-in-out">Cancel</button></li>
                    <li>
                        <button
                            onClick={handleSave}
                            className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 transition duration-200 ease-in-out">Save</button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={titleRef} label="Title" />
                    {!titleValid && <p className="text-red-500">Please enter a title.</p>}
                    <Input ref={descriptionRef} label="Description" textarea />
                    {!descriptionValid && <p className="text-red-500">Please enter a description.</p>}
                    <Input type="date" ref={dueDateRef} label="Due Date" />
                    {!dueDateValid && <p className="text-red-500">Please enter a due date.</p>}
                </div>
            </div>
        </>
    );
}
