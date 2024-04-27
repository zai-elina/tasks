import { cancellable } from "./cancellable";

jest.useFakeTimers();

describe("test cancellable", () => {
  test("calls the function after the specified time", () => {
    const fn = jest.fn();
    const args = [1, 2];
    const t = 1000;
    const cancel = cancellable(fn, args, t);

    expect(fn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(t);

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(1, 2);
  });

  test("cancels the timer when cancelled", () => {
    const fn = jest.fn();
    const args = [1, 2];
    const t = 1000;
    const cancel = cancellable(fn, args, t);

    cancel();

    jest.advanceTimersByTime(t);

    expect(fn).not.toHaveBeenCalled();
  });
});
