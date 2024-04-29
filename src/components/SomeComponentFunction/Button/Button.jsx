import { memo } from "react";

export const Button = memo(({ handleClick, value }) => {
  const onClickButton = () => handleClick(value);

  return <button onClick={onClickButton}>{value}</button>;
});

Button.displayName = "Button";
