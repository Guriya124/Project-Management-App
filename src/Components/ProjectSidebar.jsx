import React from 'react';
import Button from './Button';

export default function ProjectSidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-gray-900 text-gray-50 md:w-72 rounded-r-xl">
            <h1 className="mb-8 font-bold uppercase text-lg md:text-xl text-gray-200">Your Projects</h1>
            <div className="mb-8">
                <Button onClick={onStartAddProject} >
                    + Add Project
                </Button>
            </div>
            <ul className="mt-4 space-y-2">
                {projects.map((project) => {
                    let cssClasses = "text-left px-4 py-2 w-full rounded-md my-1  hover:text-gray-200 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-gray-200";
                    if (project.id === selectedProjectId) {
                        cssClasses += " bg-gray-800 text-gray-200";
                    } else {
                        cssClasses += " text-gray-300";
                    }

                    return (
                        <li key={project.id}>
                            <button
                                onClick={() => onSelectProject(project.id)}
                                className={cssClasses}

                            >

                                {project.title}
                            </button>
                        </li>

                    )
                }

                )}
            </ul>
        </aside>
    );
}
