import React from 'react'
import './Label.css'

class Label extends React.Component {
  render() {
    const { mode, isNightMode } = this.props
    return (
      <span
        style={{ border: `1px solid ${isNightMode ? '#303c4c' : '#f0f0f0'}` }}
        className="label"
      >
        ✓ {mode}
      </span>
    )
  }
}

export default Label
