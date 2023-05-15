import { FC } from "react";
import TaskItem from "./TaskItem";
import { ITask } from "../../interface/task";

interface Props {
  tasks: ITask[];
  toggleDone: (id: string, done: boolean) => void;
  handleDelete: (id: string) => void;
}

const Tasks: FC<Props> = ({tasks,toggleDone,handleDelete,}) => {
  return (
    <div className="flex flex-col gap-2">
      {tasks.length ? (
        tasks.map((t) => (
          <TaskItem
            key={t.id}
            name={t.name}
            done={t.done}
            id={t.id}
            toggleDone={toggleDone}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <span className="text-sky-100">No tasks yet!</span>
      )}
    </div>
  );
};

export default Tasks;
