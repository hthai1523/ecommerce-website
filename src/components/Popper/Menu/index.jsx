import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional

import { Wrapper as PopperWrapper } from "../../Popper";
import { useState } from "react";
import MenuItem from "./MenuItem";
import Header from "./Header";

const defaultFn = () => {};

function Menu({
  items = [],
  children,
  hideOnClick = false,
  onChange = defaultFn,
}) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];

  const handleClick = (item, isParent) => {
    if (isParent) {
      setHistory([...history, item.children]);
    } else {
      onChange(item);
    }
  }

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => handleClick(item, isParent)}
        />
      );
    });
  };

  

  return (
    <Tippy
      delay={[0, 700]}
      hideOnClick={hideOnClick}
      interactive
      offset={[12, 8]}
      placement="bottom-end"
      render={(attrs) => (
        <div className="w-[224px]" tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            <div className="overflow-y-auto ">{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
