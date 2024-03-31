
import Img from '../assets/no-projects.png';
import Button from './Button';

export default function NoprojectSelected({ onStartAddProject }) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={Img} alt='An empty task list' className="w-16 h-16 mx-auto object-contain" />
            <h2 className="text-2xl font-bold mt-6">No Project Selected</h2>
            <p className="text-lg mt-3">Select a project or get started with a new one</p>
            <p className="mt-6">
                <Button onClick={onStartAddProject}>Create New Project</Button>
            </p>
        </div>
    )
}
