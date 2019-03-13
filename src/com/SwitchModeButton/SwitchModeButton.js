import React from "react";
import "./SwitchModeButton.css";

class SwitchModeButton extends React.Component {
  render() {
    const { isNightMode, handleSwitchMode } = this.props;
    return (
      <button className="btn" onClick={handleSwitchMode}>
        {" "}
        Switch to {isNightMode ? "Day Mode" : "Night Mode"}
      </button>
    );
  }
}

export default SwitchModeButton;
