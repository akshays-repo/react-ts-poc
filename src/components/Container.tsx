import { FC } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
}
const Container:FC<Props> = ({children,title,}) => {
  return (
    <div className="bg-sky-600 p-4 border shadow rounded-md">
      {title && <h2 className="text-xl pb-2 text-white">{title}</h2>}
      <div>{children}</div>
    </div>
  );
};

export default Container;
