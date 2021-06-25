import { FunctionComponent } from "react";
import { Category } from "../type";

const NavItem: FunctionComponent<{
  value: Category | "all";
  active: String;
  handleFilter: Function;
}> = ({ value, handleFilter, active }) => {
  let className = "capitalize cursor-pointer hover:text-green";
  if (active === value) className += " text-green";
  return (
    <li
      className={className}
      onClick={() => {
        handleFilter(value);
      }}
    >
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handleFilter: Function;
  active: String;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="mongo" {...props} />
      <NavItem value="express" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="Html" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
