import { FC, FormEvent, useState } from "react";

interface Props {
  handleSubmit: (e: FormEvent<HTMLFormElement>, value: string) => void;
}

const InputContainer:FC<Props> = ({ handleSubmit}) => {

  const [newTaskName, setNewTaskName] = useState("");
  return (
    <form
      action=""
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault()
        if(newTaskName)
        handleSubmit(e, newTaskName);
        setNewTaskName("");
      }}
    >
      <div className="flex flex-col">
        <label className="text-white">Enter your next task:</label>
        <input
          className="p-1 rounded-sm"
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-sky-100 rounded-lg hover:bg-sky-200 p-1"
      >
        Add task
      </button>
    </form>
  );
};

export default InputContainer;
