import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { ProjectsSidebar } from "./components/ProjectsSidebar"
import SelectProject from "./components/SelectedProject";

function App() {

  const [projectedState, setProjectedState] = useState({
    selectProjectId: undefined,
    projects: []
  })

  const currentProject = projectedState.projects.find((item) => item.id === projectedState.selectProjectId);

  const handleStartAddProject = () => {
    setProjectedState((prev) => {
      return {
        ...prev,
        selectProjectId: null
      }
    })
  }

  const handleCreateNewProject = (data) => {
    setProjectedState((prev) => {
      return {
        ...prev,
        selectProjectId: undefined,
        projects: [...prev.projects, { ...data, id: Math.random() }]
      }
    })
  }

  const handleCancelNewProject = () => {
    setProjectedState((prev) => {
      return {
        ...prev,
        selectProjectId: undefined,
      }
    })
  }

  const handleSelectedProject = (id) => {
    setProjectedState((prev) => {
      return {
        ...prev,
        selectProjectId: id,
      }
    })
  }
  let content = <SelectProject project={currentProject} />;
  if (projectedState.selectProjectId === null) {
    content = <NewProject onSave={handleCreateNewProject} onCancel={handleCancelNewProject} />
  }
  else if (projectedState.selectProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectedState.projects}
        onSelectedPorject={(id) => handleSelectedProject(id)}
      />
      {content}
      {/* {
        projectedState.selectProjectId === null ? <NewProject onSave={handleCreateNewProject} onCancel={handleCancelNewProject} /> : (projectedState.selectProjectId === undefined ? <NoProjectSelected onStartAddProject={handleStartAddProject} /> : "")
      } */}
    </main>
  )
}

export default App
