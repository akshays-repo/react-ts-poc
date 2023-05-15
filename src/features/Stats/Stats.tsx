import { FC } from "react";
import StatsItem from "./StatsItem";
import { ITask } from "../../interface/task";

interface Props {
  tasks: ITask[]
}
const Stats :FC<Props>= ({ tasks }) => {
  const total = tasks.length;
  const pending = tasks.filter((t) => t.done === false).length;
  const done = tasks.filter((t) => t.done === true).length;
  
  return (
    <>
      <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
        <StatsItem itemName={"Total"} itemValue={total} />
        <StatsItem itemName={"To do"} itemValue={pending} />
        <StatsItem itemName={"Done"} itemValue={done} />
      </div>
    </>
  );
};

export default Stats;
