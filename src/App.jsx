import { useState } from "react"
import NewProject from "./Components/NewProject"
import NoprojectSelected from "./Components/NoprojectSelected"
import ProjectSidebar from "./Components/ProjectSidebar"
import SelectedProject from "./Components/SelectedProject";



function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
    tasks: [],

  });

  function handleAddTask(text) {
    setProjectState(prveState => {
      const taskId = Math.random()
      const NewTask = {
        text: text,
        projectId: prveState.selectedProjectId,
        id: taskId,
      }

      return {
        ...prveState,
        tasks: [NewTask, ...prveState.tasks]
      };
    });

  }
  function handleDeleteTask(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== id)  // filter out the selected project

      }
    });
  }

  function handleSelectProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    });
  }

  function handleStartAddProject() {
    setProjectState(prveState => {
      return {
        ...prveState,
        selectedProjectId: null,
      }

    });
  }

  function handleAddProject(projectData) {
    const projectId = Math.random()
    setProjectState(prveState => {
      const newProject = {
        ...projectData,
        id: projectId,
      }

      return {
        ...prveState,
        selectedProjectId: undefined,
        project: [...prveState.project, newProject]
      };
    });
  }

  // console.log(projectState)

  function handleDeleteProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        project: prevState.project.filter(project => project.id !== prevState.selectedProjectId)  // filter out the selected project
      }
    });
  }

  const selectedProject = projectState.project.find(project => project.id === projectState.selectedProjectId);

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoprojectSelected onStartAddProject={handleStartAddProject} />

  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.project}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}

    </main>
  );
}

export default App
