import { useState } from "react"

export default function NewTask({ onAdd }) {
    const [task, setTask] = useState('');

    function handleChange(event) {
        setTask(event.target.value);

    }

    function handleClick() {
        if (!task.trim()) return;
        onAdd(task)
        setTask('');
    }
    return (
        <div className="flex items-center gap-4">
            <input type="text"
                className="w-64 px-2 py-1 rounded-sm bg-slate-300 mb-4"
                onChange={handleChange}
                value={task}
            />
            <button
                className="text-slate-700 hover:text-slate-950 mb-4"
                onClick={handleClick}
            >
                Add task</button>
        </div>
    )
}
