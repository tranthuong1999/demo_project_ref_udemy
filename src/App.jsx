import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { ProjectsSidebar } from "./components/ProjectsSidebar"
import SelectProject from "./components/SelectedProject";

function App() {

  const [projectedState, setProjectedState] = useState({
    selectProjectId: undefined,
    projects: [],
    tasks: []
  })

  const currentProject = projectedState.projects.find((item) => item.id === projectedState.selectProjectId);

  const handleAddTask = (text) => {
    setProjectedState((prev) => {
      const newTask = {
        text,
        id: Math.random(),
        projectId: prev.selectProjectId,
      };

      return {
        ...prev,
        tasks: [newTask ,...prev.tasks ],
      };
    });

  }

  const handleDeleteTask = () => {

  }

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

  const handleDeleteProject = () => {
    setProjectedState((prev) => {
      return {
        ...prev,
        selectProjectId: undefined,
        projects: prev.projects.filter((project) => project.id !== prev.selectProjectId)
      }
    })
  }
  // let content = <SelectProject project={currentProject} onDelete={handleDeleteProject} />;
  // if (projectedState.selectProjectId === null) {
  //   content = <NewProject onSave={handleCreateNewProject} onCancel={handleCancelNewProject} />
  // }
  // else if (projectedState.selectProjectId === undefined) {
  //   content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  // }

  console.log("projectedState", projectedState)

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectedState.projects}
        onSelectedPorject={(id) => handleSelectedProject(id)}
        currentProject={currentProject}
      />
      {
        projectedState.selectProjectId === null ?
          <NewProject onSave={handleCreateNewProject} onCancel={handleCancelNewProject} /> : (
            projectedState.selectProjectId === undefined ?
              <NoProjectSelected onStartAddProject={handleStartAddProject} /> :
              <SelectProject
                project={currentProject}
                onDelete={handleDeleteProject}
                onAddTask={handleAddTask}
                onDeleteTask={handleDeleteTask}
                tasks={projectedState.tasks}
              />
          )
      }
    </main>
  )
}

export default App
