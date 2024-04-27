import { PureComponent } from "react";

export class SomeComponentClass extends PureComponent {
  state = {
    data: [3, 4, 5],
    current: null,
  };

  setCurrent(value) {
    this.setState({ current: value });
  }

  reset() {
    this.setState({ current: null });
  }

  render() {
    return (
      <>
        current: {this.state.current || "unset"}
        <hr />
        {this.state.data.map((value) => (
          <button key={value} onClick={() => this.setCurrent(value)}>
            {value}
          </button>
        ))}
        <button onClick={() => this.reset()}>reset</button>
      </>
    );
  }
}
