import { useState } from "react"
import NewProject from "./Components/NewProject"
import NoprojectSelected from "./Components/NoprojectSelected"
import ProjectSidebar from "./Components/ProjectSidebar"



function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: []

  });

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

  console.log(projectState)

  let content;

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
      />
      {content}

    </main>
  )
}

export default App
