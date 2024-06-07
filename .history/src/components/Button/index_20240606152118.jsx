import { NavLink } from "react-router-dom";

const defaultFN = () => {}

function Button({
  children,
  to,
  href,
  icon = false,
  style,
  onClick = defaultFN ,
  separate = false,
  extraClassName = '',
  isPrimary = false,
  isSecondary = false,
  ...passProps
}) {
  let Comp = "button";

  const props = {
    style,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = NavLink;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  return (
    
      <Comp
        className={`text-center font-medium text-sm lg:text-base cursor-pointer border-2 border-solid rounded-lg border-primary text-white py-2 lg:py-3 px-4 lg:px-5 mt-4 bg-primary hover:opacity-70 ${extraClassName} `}
        onClick = {onClick}
        {...props}
      >
        {icon && <span className="text-3xl">{icon}</span>}
        {children && <span className="ml-2">{children}</span>}
        {separate && <div className="absolute h-6 w-[1px] right-[-10px] top-5 bg-[#414141] skew-x-[-20deg]  "></div>}
      </Comp>
   
  );
}

export default Button;
