import React from "react";
import "./toggle.css";

interface Button {
  label: string;
  index: number;
}

interface Props {
  label: string;
  initialIndex: number;
  onToggle: (index: number) => void;
  buttons: Button[];
}

interface State {
  selectedIndex: number;
}

class Toggle extends React.Component<Props, State> {
  state = {
    selectedIndex: this.props.initialIndex
  };

  handleButtonClick = (index: number) => {
    this.setState({
      selectedIndex: index
    });
    this.props.onToggle(index);
  };

  render() {
    const { label, buttons } = this.props;
    const { selectedIndex } = this.state;

    return (
      <div className="toggle-container">
        <label>{label}</label>
        <div className="search-buttons-container">
          {buttons.map((button, i) => (
            <button
              key={button.index}
              className={selectedIndex === button.index ? "active" : "inactive"}
              style={{
                borderRight:
                  i + 1 === buttons.length
                    ? "none"
                    : selectedIndex === button.index
                    ? "none"
                    : "1px solid #efefef",
                width: `calc(100% / ${buttons.length})`
              }}
              onClick={() => this.handleButtonClick(button.index)}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Toggle;
