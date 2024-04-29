import { useState, useCallback } from "react";
import { Button } from "./Button/Button";

export const SomeComponentFunction = () => {
  const data = [3, 4, 5];
  const [current, setCurrent] = useState(null);

  const handleSetCurrent = useCallback((value) => {
    setCurrent(value);
  }, []);

  const handleReset = useCallback(() => {
    setCurrent(null);
  }, []);

  return (
    <>
      current: {current || "unset"}
      <hr />
      {data.map((value) => (
        <Button key={value} handleClick={handleSetCurrent} value={value} />
      ))}
      <Button handleClick={handleReset} value="reset" />
    </>
  );
};
