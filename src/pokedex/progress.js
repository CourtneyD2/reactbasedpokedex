import React from 'react'

class ProgressBar extends React.Component {
  
  getProgress() {
      return Math.round((this.props.stat/15 * 100));
  }
  
  render() {
    const progress = this.getProgress();
    return (
      <div className="container">
        <div className="progressbar-container">
          <div className="progressbar-complete" style={{width: `${progress}%`}}>
            <div className="progressbar-liquid"></div>
          </div>
          <span className="progress"></span>
        </div>
      </div>
    )
  }
}

export default ProgressBar;