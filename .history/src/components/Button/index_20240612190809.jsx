import { NavLink } from "react-router-dom";

const defaultFN = () => {};

function Button({
  children,
  to,
  href,
  icon = false,
  style,
  onClick = defaultFN,
  separate = false,
  isPrimary = false,
  isSecondary = false,
  leftIcon,
  rightIcon,
  extraClassName = '',
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
      className={`px-6 py-4 bg-transparent cursor-pointer hover:opacity-55 font-semibold text-xl ${extraClassName}`}
      onClick={onClick}
      {...props}
    >
      {leftIcon && (
        <span className="inline-block w-6 text-center">{leftIcon}</span>
      )}

      {icon && <span className="text-3xl">{icon}</span>}
      {children && <span className="ml-2">{children}</span>}
      {separate && (
        <div className="absolute h-6 w-[1px] right-[-10px] top-5 bg-[#414141] skew-x-[-20deg]  "></div>
      )}
      {rightIcon && (
        <span className="inline-block w-6 text-center">{leftIcon}</span>
      )}
    </Comp>
  );
}

export default Button;
