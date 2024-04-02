
import NewTask from "./NewTask";


export default function Task({ tasks, onAdd, onDelete }) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-slate-700 mb-4">Tasks</h2>
            <NewTask onAdd={onAdd} />
            {tasks.length === 0 && (
                <p className="text-slate-800 my-4">
                    This project does not have any task yet.
                </p>
            )}
            {tasks.length > 0 && (
                <ul className="p-4 mt-8 rounded-md bg-slate-200">
                    {
                        tasks.map((task) =>
                            <li key={task.id} className="flex items-center justify-between my-4">
                                <span> {task.text} </span>
                                <button className="text-slate-700 hover:text-red-600" onClick={() => onDelete(task.id)}>Clear</button>
                            </li>
                        )}
                </ul>
            )}

        </section>
    )
}
