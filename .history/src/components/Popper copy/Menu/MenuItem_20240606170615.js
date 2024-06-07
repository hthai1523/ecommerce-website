import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Button from "../../Button";

function MenuItem({ data, onClick }) {
  return (
    <Button
      extraClassName={`w-full justify-start font-semibold py-3 px-4 hover:bg-[#16182308] text-sm ${
        data.separate && "border-b border-b-[#1618231f]"
      }`}
      leftIcon={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

export default MenuItem;
