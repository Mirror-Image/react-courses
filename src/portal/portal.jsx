import React from "react";
import ReactDOM from "react-dom";
import './portal.css'

export class Modal extends React.Component {
  componentWillMount() {
    this.root = document.createElement('div');
    document.body.appendChild(this.root);
  }

  componentWillUnmount() {
    document.body.removeChild(this.root);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="modal">
        <div
          className="modal__close-button"
          onClick={this.props.onClose}
        >
          X
        </div>
        {this.props.children}
      </div>,
      this.root
    );
  }
}

Modal.propTypes = {
  onClose: Function
}
