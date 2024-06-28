import React from 'react';
import ReactDOM from 'react-dom';
import './ModalComponent.css';

interface ModalComponentProps {
  isOpen: boolean;
  onRequestClose: () => void;
  title: string;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ isOpen, onRequestClose, title }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <h2>{title}</h2>
        <button onClick={onRequestClose}>Close</button>
      </div>
    </div>,
    document.body
  );
};

export default ModalComponent;
