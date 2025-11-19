import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { ProjectsSidebar } from "./components/ProjectsSidebar"

function App() {

  const [projectedState, setProjectedState] = useState({
    selectProjectId: undefined,
    projects: []
  })

  const handleStartAddProject = () => {
    setProjectedState((prev) => {
      return {
        ...prev,
        selectProjectId: null
      }
    })
  }

  // let content;
  // if (projectedState.selectProjectId === null) {
  //   content = <NewProject />
  // }
  // else if (projectedState.selectProjectId === undefined) {
  //   content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  // }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
     { 
      projectedState.selectProjectId === null ? <NewProject /> : (  projectedState.selectProjectId === undefined ? <NoProjectSelected onStartAddProject={handleStartAddProject} /> : "" )
     }
    </main>
  )
}

export default App
