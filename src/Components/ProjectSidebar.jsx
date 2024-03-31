import React from 'react';
import Button from './Button';

export default function ProjectSidebar({ onStartAddProject, projects }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-gray-900 text-gray-50 md:w-72 rounded-r-xl">
            <h1 className="mb-8 font-bold uppercase text-lg md:text-xl text-gray-200">Your Projects</h1>
            <div className="mb-8">
                <Button onClick={onStartAddProject} >
                    + Add Project
                </Button>
            </div>
            <ul className="mt-4 space-y-2">
                {projects.map((project) => (
                    <li key={project.id}>
                        <button className="text-left px-4 py-2 w-full rounded-md text-gray-300 hover:text-gray-200 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-gray-200">
                            {project.title}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
