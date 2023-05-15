import { FC } from "react";

interface Props {
  itemName: string;
  itemValue: number;
}
const StatsItem:FC<Props> = ({itemName,itemValue,}) => {
  return (
    <article className="bg-sky-50 rounded-sm flex justify-between p-2 gap-12">
      <h3 className="font-bold">{itemName}</h3>
      <span className="bg-sky-900 text-white px-2 rounded-sm font-mono">
        {itemValue}
      </span>
    </article>
  );
};

export default StatsItem;
