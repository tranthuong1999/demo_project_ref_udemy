import Button from "../Button";

export function ProjectsSidebar({ onStartAddProject, projects, onSelectedPorject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {
          projects.map((item) => {
            return (
              <li key={item.id} onClick={() => onSelectedPorject(item.id)}>
                {item.title}
              </li>
            )
          })
        }
      </ul>
    </aside>
  );
}