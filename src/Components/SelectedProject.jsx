
import Task from './Task.jsx'

export default function SelectedProject({ project, onDelete, onAddTask, onDeleteTask, tasks }) {
    const formatedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
    return (
        <div className='w-[35rem] mt-8'>
            <header className='pb-4 mb-4 border-b-2 border-slate-300 '>
                <div className='flex items-center justify-between '>
                    <h1 className='text-3xl font-bold text-slate-700 mb-2'>{project.title}</h1>
                    <button className='text-slate-700 hover:text-slate-950' onClick={onDelete}>Delete</button>
                </div>
                <p className='mb-4 text-slate-500'>{formatedDate}</p>
                <p className='text-slate-600 whitespace-pre-wrap'>{project.description}</p>
            </header>
            <Task onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
        </div>
    )
}
